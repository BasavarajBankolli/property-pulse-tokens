
import { CheckCircleIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

interface PreparationItem {
  title: string;
  items: string[];
}

export function TechnicalPreparation() {
  const preparationCategories: PreparationItem[] = [
    {
      title: "Technical Groundwork",
      items: [
        "Learn Solidity programming",
        "Study ERC-20 token standards",
        "Understand blockchain real estate tokenization",
        "Practice smart contract development"
      ]
    },
    {
      title: "Technology Stack",
      items: [
        "Blockchain: Ethereum/Polygon",
        "Frontend: React.js",
        "Backend: Node.js",
        "Smart Contracts: Solidity",
        "Web3 Integration: Web3.js/Ethers.js",
        "Oracle: Chainlink"
      ]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-[#F1F0FB]">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Pre-Hackathon Preparation" 
          subtitle="Our comprehensive preparation ensures a solid foundation for building a successful real estate tokenization platform."
          centered
        />
        
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {preparationCategories.map((category, index) => (
            <Card key={index} className="border border-purple-100 bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#6E59A5] mb-4 font-heading">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-emerald-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
