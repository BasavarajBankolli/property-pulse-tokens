
import { SectionHeading } from "@/components/ui/section-heading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function SmartContractVisualization() {
  return (
    <section className="py-16 bg-gradient-to-b from-[#F1F0FB] to-white">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Smart Contract Architecture" 
          subtitle="Explore the Solidity smart contracts powering our real estate tokenization platform."
          centered
        />
        
        <div className="mt-12 bg-white rounded-lg shadow-md overflow-hidden border border-purple-100">
          <Tabs defaultValue="tokenization" className="w-full">
            <div className="border-b">
              <TabsList className="p-0 h-auto bg-transparent border-b">
                <TabsTrigger 
                  value="tokenization" 
                  className="py-3 px-6 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-[#6E59A5] data-[state=active]:text-[#6E59A5] data-[state=active]:shadow-none"
                >
                  Tokenization Contract
                </TabsTrigger>
                <TabsTrigger 
                  value="marketplace" 
                  className="py-3 px-6 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-[#6E59A5] data-[state=active]:text-[#6E59A5] data-[state=active]:shadow-none"
                >
                  Marketplace Contract
                </TabsTrigger>
                <TabsTrigger 
                  value="dividend" 
                  className="py-3 px-6 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-[#6E59A5] data-[state=active]:text-[#6E59A5] data-[state=active]:shadow-none"
                >
                  Dividend Distribution
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="tokenization" className="p-0">
              <div className="p-6">
                <h3 className="text-lg font-bold mb-4 font-heading">Property Tokenization Smart Contract</h3>
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-auto max-h-96 text-sm font-mono">
                  <pre>{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title PropertyToken
 * @dev ERC20 token representing fractional ownership of a real estate property
 */
contract PropertyToken is ERC20, Ownable {
    // Property details
    string public propertyId;
    string public propertyAddress;
    uint256 public propertyValue;
    uint256 public totalTokens;
    
    // Token price and supply
    uint256 public tokenPrice;
    uint256 public maxSupply;
    
    // Property documentation (IPFS hash)
    string public legalDocumentation;
    
    // Investor registry
    mapping(address => bool) public investors;
    address[] public investorList;
    
    // Events
    event PropertyTokenized(string propertyId, uint256 totalValue, uint256 totalTokens);
    event TokensPurchased(address investor, uint256 amount, uint256 value);
    
    constructor(
        string memory _name,
        string memory _symbol,
        string memory _propertyId,
        string memory _propertyAddress,
        uint256 _propertyValue,
        uint256 _tokenPrice,
        uint256 _maxSupply,
        string memory _legalDocumentation
    ) ERC20(_name, _symbol) {
        propertyId = _propertyId;
        propertyAddress = _propertyAddress;
        propertyValue = _propertyValue;
        tokenPrice = _tokenPrice;
        maxSupply = _maxSupply;
        legalDocumentation = _legalDocumentation;
        
        // Reserve 25% of tokens for platform
        uint256 platformReserve = maxSupply * 25 / 100;
        _mint(owner(), platformReserve);
        
        emit PropertyTokenized(_propertyId, _propertyValue, maxSupply);
    }
    
    // Purchase tokens
    function purchaseTokens(uint256 _amount) external payable {
        require(_amount > 0, "Amount must be greater than 0");
        require(totalSupply() + _amount <= maxSupply, "Exceeds max supply");
        require(msg.value >= _amount * tokenPrice, "Insufficient payment");
        
        // Register investor
        if(!investors[msg.sender]) {
            investors[msg.sender] = true;
            investorList.push(msg.sender);
        }
        
        // Mint tokens to investor
        _mint(msg.sender, _amount);
        
        emit TokensPurchased(msg.sender, _amount, msg.value);
    }
    
    // Update token price (only owner)
    function updateTokenPrice(uint256 _newPrice) external onlyOwner {
        tokenPrice = _newPrice;
    }
    
    // Get total number of investors
    function getInvestorCount() external view returns (uint256) {
        return investorList.length;
    }
}`}</pre>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="marketplace" className="p-0">
              <div className="p-6">
                <h3 className="text-lg font-bold mb-4 font-heading">Property Token Marketplace Contract</h3>
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-auto max-h-96 text-sm font-mono">
                  <pre>{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

/**
 * @title PropertyTokenMarketplace
 * @dev Facilitates buying and selling of property tokens
 */
contract PropertyTokenMarketplace is Ownable, ReentrancyGuard {
    // Listing structure
    struct Listing {
        address seller;
        address tokenAddress;
        uint256 amount;
        uint256 pricePerToken;
        bool active;
    }
    
    // Platform fee percentage (0.5%)
    uint256 public platformFeePercent = 50; // 50 basis points
    uint256 public constant MAX_FEE = 10000; // 100%
    
    // Listings storage
    uint256 public nextListingId = 1;
    mapping(uint256 => Listing) public listings;
    
    // Events
    event ListingCreated(uint256 indexed listingId, address indexed seller, address indexed tokenAddress, uint256 amount, uint256 pricePerToken);
    event ListingCancelled(uint256 indexed listingId);
    event ListingUpdated(uint256 indexed listingId, uint256 newAmount, uint256 newPrice);
    event TokensPurchased(uint256 indexed listingId, address indexed buyer, uint256 amount, uint256 totalPrice);
    
    // Create a new listing
    function createListing(
        address _tokenAddress,
        uint256 _amount,
        uint256 _pricePerToken
    ) external returns (uint256) {
        require(_amount > 0, "Amount must be greater than 0");
        require(_pricePerToken > 0, "Price must be greater than 0");
        
        // Transfer tokens to marketplace
        IERC20 token = IERC20(_tokenAddress);
        require(token.transferFrom(msg.sender, address(this), _amount), "Token transfer failed");
        
        // Create listing
        uint256 listingId = nextListingId++;
        listings[listingId] = Listing({
            seller: msg.sender,
            tokenAddress: _tokenAddress,
            amount: _amount,
            pricePerToken: _pricePerToken,
            active: true
        });
        
        emit ListingCreated(listingId, msg.sender, _tokenAddress, _amount, _pricePerToken);
        return listingId;
    }
    
    // Purchase tokens from a listing
    function purchaseTokens(uint256 _listingId, uint256 _amount) external payable nonReentrant {
        Listing storage listing = listings[_listingId];
        require(listing.active, "Listing is not active");
        require(_amount > 0 && _amount <= listing.amount, "Invalid amount");
        
        uint256 totalPrice = _amount * listing.pricePerToken;
        require(msg.value >= totalPrice, "Insufficient payment");
        
        // Calculate platform fee
        uint256 platformFee = (totalPrice * platformFeePercent) / MAX_FEE;
        uint256 sellerProceeds = totalPrice - platformFee;
        
        // Update listing
        listing.amount -= _amount;
        if (listing.amount == 0) {
            listing.active = false;
        }
        
        // Transfer tokens to buyer
        IERC20 token = IERC20(listing.tokenAddress);
        require(token.transfer(msg.sender, _amount), "Token transfer failed");
        
        // Transfer funds to seller
        (bool sentToSeller, ) = payable(listing.seller).call{value: sellerProceeds}("");
        require(sentToSeller, "Failed to send Ether to seller");
        
        emit TokensPurchased(_listingId, msg.sender, _amount, totalPrice);
        
        // Refund excess payment
        if (msg.value > totalPrice) {
            (bool refunded, ) = payable(msg.sender).call{value: msg.value - totalPrice}("");
            require(refunded, "Failed to refund excess payment");
        }
    }
    
    // Cancel a listing
    function cancelListing(uint256 _listingId) external {
        Listing storage listing = listings[_listingId];
        require(listing.seller == msg.sender || owner() == msg.sender, "Not authorized");
        require(listing.active, "Listing is not active");
        
        listing.active = false;
        
        // Return tokens to seller
        IERC20 token = IERC20(listing.tokenAddress);
        require(token.transfer(listing.seller, listing.amount), "Token transfer failed");
        
        emit ListingCancelled(_listingId);
    }
    
    // Update platform fee (owner only)
    function updatePlatformFee(uint256 _newFeePercent) external onlyOwner {
        require(_newFeePercent <= 500, "Fee too high"); // Max 5%
        platformFeePercent = _newFeePercent;
    }
    
    // Withdraw platform fees (owner only)
    function withdrawFees() external onlyOwner {
        (bool sent, ) = payable(owner()).call{value: address(this).balance}("");
        require(sent, "Failed to send Ether");
    }
}`}</pre>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="dividend" className="p-0">
              <div className="p-6">
                <h3 className="text-lg font-bold mb-4 font-heading">Dividend Distribution Contract</h3>
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-auto max-h-96 text-sm font-mono">
                  <pre>{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

/**
 * @title PropertyDividendDistributor
 * @dev Handles distribution of rental income to property token holders
 */
contract PropertyDividendDistributor is Ownable {
    using SafeMath for uint256;
    
    // Property token
    IERC20 public propertyToken;
    
    // Dividend distribution records
    struct Distribution {
        uint256 amount;
        uint256 timestamp;
        uint256 totalSupplySnapshot;
        mapping(address => bool) claimed;
    }
    
    // Storage
    mapping(uint256 => Distribution) public distributions;
    uint256 public distributionCount;
    
    // Events
    event DividendDistributed(uint256 indexed distributionId, uint256 amount, uint256 timestamp);
    event DividendClaimed(uint256 indexed distributionId, address indexed account, uint256 amount);
    
    constructor(address _propertyToken) {
        propertyToken = IERC20(_propertyToken);
    }
    
    // Distribute dividends
    function distributeDividends() external payable onlyOwner {
        require(msg.value > 0, "Must send ETH for distribution");
        
        uint256 distributionId = distributionCount++;
        uint256 totalSupply = propertyToken.totalSupply();
        
        Distribution storage newDistribution = distributions[distributionId];
        newDistribution.amount = msg.value;
        newDistribution.timestamp = block.timestamp;
        newDistribution.totalSupplySnapshot = totalSupply;
        
        emit DividendDistributed(distributionId, msg.value, block.timestamp);
    }
    
    // Claim dividends
    function claimDividend(uint256 _distributionId) external {
        require(_distributionId < distributionCount, "Invalid distribution ID");
        Distribution storage distribution = distributions[_distributionId];
        
        require(!distribution.claimed[msg.sender], "Already claimed");
        
        uint256 balance = propertyToken.balanceOf(msg.sender);
        require(balance > 0, "No tokens owned");
        
        uint256 totalSupply = distribution.totalSupplySnapshot;
        uint256 ownershipPercentage = balance.mul(1e18).div(totalSupply);
        uint256 dividendAmount = distribution.amount.mul(ownershipPercentage).div(1e18);
        
        distribution.claimed[msg.sender] = true;
        
        (bool sent, ) = payable(msg.sender).call{value: dividendAmount}("");
        require(sent, "Failed to send dividend");
        
        emit DividendClaimed(_distributionId, msg.sender, dividendAmount);
    }
    
    // Check pending dividends for an account
    function getPendingDividends(address _account) external view returns (uint256[] memory distributionIds, uint256[] memory amounts) {
        uint256 pendingCount = 0;
        
        // First, count pending distributions
        for (uint256 i = 0; i < distributionCount; i++) {
            if (!distributions[i].claimed[_account] && propertyToken.balanceOf(_account) > 0) {
                pendingCount++;
            }
        }
        
        // Then populate the arrays
        distributionIds = new uint256[](pendingCount);
        amounts = new uint256[](pendingCount);
        
        uint256 index = 0;
        for (uint256 i = 0; i < distributionCount; i++) {
            if (!distributions[i].claimed[_account] && propertyToken.balanceOf(_account) > 0) {
                uint256 balance = propertyToken.balanceOf(_account);
                uint256 totalSupply = distributions[i].totalSupplySnapshot;
                uint256 ownershipPercentage = balance.mul(1e18).div(totalSupply);
                uint256 dividendAmount = distributions[i].amount.mul(ownershipPercentage).div(1e18);
                
                distributionIds[index] = i;
                amounts[index] = dividendAmount;
                index++;
            }
        }
        
        return (distributionIds, amounts);
    }
}`}</pre>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
