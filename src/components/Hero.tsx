import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink } from "lucide-react";
import headshot from "figma:asset/a221e765f5b00f3855e43e6c1fea6678a01e8513.png";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-7xl mx-auto backdrop-blur-md bg-white/40 rounded-3xl border border-white/30 p-8 shadow-xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-foreground font-[Playfair_Display]">
                  Hello I'm <br />
                  <span className="text-secondary">Jorene.</span>
                </h1>
                
                <p className="text-xl text-muted-foreground mb-8">
                  I help teams win customers, go to market faster and streamline operations as a GM-minded product manager.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={() => window.open('https://www.linkedin.com/in/jorenechai/', '_blank')}
                  className="text-lg px-8 flex items-center gap-2 hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                >
                  Connect on LinkedIn
                  <ExternalLink className="w-5 h-5" />
                </Button>
              </div>
            </div>
            
            {/* Right side - Hero image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img
                  src={headshot}
                  alt="Jorene Chai - Product Manager"
                  className="w-80 h-80 lg:w-96 lg:h-96 xl:w-[500px] xl:h-[500px] rounded-2xl object-cover object-[center_25%] shadow-2xl border-4 border-accent/20 animate-in fade-in duration-500 ease-in-out"
                />
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/30 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}