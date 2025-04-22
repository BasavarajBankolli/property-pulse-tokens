
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

export function TokenEconomics() {
  const tokenFeatures = [
    {
      title: "Fractional Ownership",
      description: "Properties are divided into tokens, allowing partial ownership with lower entry barriers.",
      icon: (
        <svg className="w-10 h-10 text-[#6E59A5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      )
    },
    {
      title: "Smart Dividend Distribution",
      description: "Automated rent distribution to token holders based on ownership percentage.",
      icon: (
        <svg className="w-10 h-10 text-[#6E59A5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Secondary Market Liquidity",
      description: "Tokens can be traded on secondary markets, providing investment liquidity.",
      icon: (
        <svg className="w-10 h-10 text-[#6E59A5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      )
    },
    {
      title: "Governance Rights",
      description: "Token holders can participate in property management decisions.",
      icon: (
        <svg className="w-10 h-10 text-[#6E59A5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 bg-[#F1F0FB]">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Token Economics Model"
          subtitle="Our innovative approach to property tokenization creates value through these key mechanisms."
          centered
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {tokenFeatures.map((feature, index) => (
            <Card key={index} className="border border-purple-100 bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 font-heading">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-white p-6 rounded-lg shadow-md border border-purple-100">
          <h3 className="text-xl font-bold text-[#6E59A5] mb-4 font-heading text-center">Property Token Distribution Example</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="w-64 h-64 relative">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="40" fill="none" stroke="#E5E7EB" strokeWidth="15" />
                <circle 
                  cx="50" 
                  cy="50" 
                  r="40" 
                  fill="none" 
                  stroke="#6E59A5" 
                  strokeWidth="15" 
                  strokeDasharray="188.5 251.3"
                  transform="rotate(-90 50 50)"
                />
                <circle 
                  cx="50" 
                  cy="50" 
                  r="40" 
                  fill="none" 
                  stroke="#0EA5E9" 
                  strokeWidth="15" 
                  strokeDasharray="62.8 251.3"
                  strokeDashoffset="-188.5"
                  transform="rotate(-90 50 50)"
                />
                <text x="50" y="45" textAnchor="middle" fill="#221F26" fontWeight="bold" fontSize="10">
                  Token
                </text>
                <text x="50" y="57" textAnchor="middle" fill="#221F26" fontWeight="bold" fontSize="10">
                  Distribution
                </text>
              </svg>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-[#6E59A5] rounded-full mr-2"></div>
                <span className="mr-2 font-medium">Investor Pool (75%):</span>
                <span className="text-gray-600">Available for public investment</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-[#0EA5E9] rounded-full mr-2"></div>
                <span className="mr-2 font-medium">Platform Reserve (25%):</span>
                <span className="text-gray-600">For maintenance and liquidity</span>
              </div>
              <div className="pt-4">
                <p className="text-sm text-gray-600 mt-2">
                  Each property is tokenized into 100,000 tokens, with a minimum purchase of 100 tokens per investor.
                  Property income is distributed proportionally to token holdings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
