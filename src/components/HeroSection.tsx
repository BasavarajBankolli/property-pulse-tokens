
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#6E59A5] to-[#3c3464] text-white">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2LTJoLTF2Mmg0NFZMM2wtMi0yaC0yMUwyOSAydjFIMWwtNyA3di0zOWg0djJoLTJ2MzNoMzR2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
            Real Estate Tokenization Platform
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-purple-100">
            Transforming real estate investment through blockchain technology.
            Fractional ownership made simple, secure, and accessible.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-[#6E59A5] hover:bg-purple-100">
              Explore Properties
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-[#8B5CF6] rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute -bottom-8 right-24 w-40 h-40 bg-[#0EA5E9] rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
    </div>
  );
}
