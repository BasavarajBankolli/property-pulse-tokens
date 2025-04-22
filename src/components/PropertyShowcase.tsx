
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

interface Property {
  id: number;
  name: string;
  location: string;
  pricePerToken: number;
  totalSupply: number;
  image: string;
  annualReturn: string;
  funded: number;
}

export function PropertyShowcase() {
  const properties: Property[] = [
    {
      id: 1,
      name: "Azure Heights Apartments",
      location: "Miami, FL",
      pricePerToken: 50,
      totalSupply: 100000,
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300' %3E%3Crect width='400' height='300' fill='%236E59A5' /%3E%3Cpath d='M160 60h80v180h-80z' fill='white' /%3E%3Cpath d='M100 120h60v120h-60z' fill='white' /%3E%3Cpath d='M240 120h60v120h-60z' fill='white' /%3E%3Cpath d='M130 150h20v20h-20z' fill='%236E59A5' /%3E%3Cpath d='M130 180h20v20h-20z' fill='%236E59A5' /%3E%3Cpath d='M190 90h20v20h-20z' fill='%236E59A5' /%3E%3Cpath d='M190 120h20v20h-20z' fill='%236E59A5' /%3E%3Cpath d='M190 150h20v20h-20z' fill='%236E59A5' /%3E%3Cpath d='M190 180h20v20h-20z' fill='%236E59A5' /%3E%3Cpath d='M250 150h20v20h-20z' fill='%236E59A5' /%3E%3Cpath d='M250 180h20v20h-20z' fill='%236E59A5' /%3E%3Cpath d='M100 240h200v10h-200z' fill='%230EA5E9' /%3E%3C/svg%3E",
      annualReturn: "8.5%",
      funded: 68,
    },
    {
      id: 2,
      name: "Emerald Office Tower",
      location: "Austin, TX",
      pricePerToken: 75,
      totalSupply: 120000,
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300' %3E%3Crect width='400' height='300' fill='%230EA5E9' /%3E%3Cpath d='M150 50h100v200h-100z' fill='white' /%3E%3Cpath d='M160 60h80v180h-80z' fill='%23E5DEFF' /%3E%3Cpath d='M160 60h80v15h-80z' fill='%236E59A5' /%3E%3Cpath d='M160 90h80v15h-80z' fill='%236E59A5' /%3E%3Cpath d='M160 120h80v15h-80z' fill='%236E59A5' /%3E%3Cpath d='M160 150h80v15h-80z' fill='%236E59A5' /%3E%3Cpath d='M160 180h80v15h-80z' fill='%236E59A5' /%3E%3Cpath d='M160 210h80v15h-80z' fill='%236E59A5' /%3E%3Cpath d='M120 250h160v10h-160z' fill='%236E59A5' /%3E%3C/svg%3E",
      annualReturn: "7.2%",
      funded: 42,
    },
    {
      id: 3,
      name: "Sunset Retail Plaza",
      location: "Los Angeles, CA",
      pricePerToken: 60,
      totalSupply: 80000,
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300' %3E%3Crect width='400' height='300' fill='%23E5DEFF' /%3E%3Cpath d='M80 120h240v130h-240z' fill='white' /%3E%3Cpath d='M90 130h220v110h-220z' fill='%236E59A5' /%3E%3Cpath d='M90 130h220v20h-220z' fill='%230EA5E9' /%3E%3Cpath d='M120 150h40v40h-40z' fill='white' /%3E%3Cpath d='M180 150h40v40h-40z' fill='white' /%3E%3Cpath d='M240 150h40v40h-40z' fill='white' /%3E%3Cpath d='M120 200h40v40h-40z' fill='white' /%3E%3Cpath d='M180 200h40v40h-40z' fill='white' /%3E%3Cpath d='M240 200h40v40h-40z' fill='white' /%3E%3Cpath d='M200 80l-30 40h60z' fill='%236E59A5' /%3E%3C/svg%3E",
      annualReturn: "9.1%",
      funded: 89,
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Property Tokenization Showcase" 
          subtitle="Explore our sample properties that demonstrate the concept of real estate tokenization."
          centered
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {properties.map((property) => (
            <Card key={property.id} className="overflow-hidden border border-purple-100 transition-all duration-300 hover:shadow-lg">
              <div className="relative h-48 bg-gray-200">
                <img 
                  src={property.image} 
                  alt={property.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-[#6E59A5] text-white px-2 py-1 rounded text-sm">
                  {property.annualReturn} ROI
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-1 font-heading text-gray-900">{property.name}</h3>
                <p className="text-gray-600 mb-3">{property.location}</p>
                
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-sm text-gray-500">Token Price</p>
                    <p className="font-bold text-[#6E59A5]">${property.pricePerToken}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Total Supply</p>
                    <p className="font-bold">{property.totalSupply.toLocaleString()}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium">{property.funded}% Funded</span>
                    <span>{property.funded}K / {property.totalSupply/1000}K tokens</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-[#6E59A5] h-2 rounded-full" 
                      style={{ width: `${property.funded}%` }}
                    ></div>
                  </div>
                </div>
                
                <Button className="w-full bg-[#6E59A5] hover:bg-[#574784]">
                  View Property
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" className="border-[#6E59A5] text-[#6E59A5] hover:bg-[#6E59A5] hover:text-white">
            View All Properties
          </Button>
        </div>
      </div>
    </section>
  );
}
