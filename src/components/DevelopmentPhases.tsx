
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

interface Phase {
  number: number;
  title: string;
  description: string;
  tasks: string[];
}

export function DevelopmentPhases() {
  const phases: Phase[] = [
    {
      number: 1,
      title: "Prototype Development",
      description: "Building the foundational components of our tokenization platform.",
      tasks: [
        "Design token economics model",
        "Create basic smart contract",
        "Develop MVP token mechanism",
        "Implement fractional ownership logic"
      ]
    },
    {
      number: 2,
      title: "Market Integration",
      description: "Connecting our platform to external data and markets.",
      tasks: [
        "Integrate property valuation APIs",
        "Develop asset listing interface",
        "Setup market liquidity pools",
        "Implement token swapping mechanism"
      ]
    },
    {
      number: 3,
      title: "Security & Compliance",
      description: "Ensuring the platform meets regulatory requirements.",
      tasks: [
        "Implement KYC/AML procedures",
        "Conduct smart contract audits",
        "Setup governance model",
        "Design compliance reporting system"
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Project Development Phases" 
          subtitle="Our systematic approach to building a comprehensive real estate tokenization platform."
          centered
        />
        
        <div className="relative mt-16">
          {/* Timeline connector */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#6E59A5] to-[#0EA5E9] rounded-full hidden md:block"></div>
          
          {phases.map((phase, index) => (
            <div key={index} className="relative z-10 mb-16 last:mb-0">
              <div className="flex flex-col md:flex-row items-center">
                {/* Phase number circle - visible on all screens */}
                <div className="flex justify-center mb-4 md:mb-0">
                  <div className="w-12 h-12 rounded-full bg-[#6E59A5] text-white flex items-center justify-center font-bold text-lg z-20">
                    {phase.number}
                  </div>
                </div>
                
                {/* Content - alternating sides on desktop */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:ml-8' : 'md:mr-8 md:order-first'}`}>
                  <Card className="border border-purple-100 bg-white shadow hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-[#6E59A5] mb-2 font-heading">
                        Phase {phase.number}: {phase.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{phase.description}</p>
                      <ul className="space-y-2">
                        {phase.tasks.map((task, idx) => (
                          <li key={idx} className="flex items-center">
                            <span className="w-2 h-2 bg-[#0EA5E9] rounded-full mr-2"></span>
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Empty div to maintain layout on alternating sides */}
                <div className={`hidden md:block md:w-1/2 ${index % 2 === 0 ? 'order-first' : ''}`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
