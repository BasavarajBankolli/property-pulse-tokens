
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <div className="text-[#6E59A5] font-bold text-xl font-heading">PropertyPulse</div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-[#6E59A5] font-medium transition-colors">Home</a>
            <a href="#" className="text-gray-700 hover:text-[#6E59A5] font-medium transition-colors">Properties</a>
            <a href="#" className="text-gray-700 hover:text-[#6E59A5] font-medium transition-colors">How It Works</a>
            <a href="#" className="text-gray-700 hover:text-[#6E59A5] font-medium transition-colors">About</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" className="hidden md:inline-flex border-[#6E59A5] text-[#6E59A5] hover:bg-[#6E59A5] hover:text-white">
              Connect Wallet
            </Button>
            <Button size="sm" className="bg-[#6E59A5] text-white hover:bg-[#574784]">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
