import { Button } from "./ui/button";

export function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 border-b border-white/30 shadow-lg shadow-secondary/5">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="text-xl font-medium text-primary">Jorene Chai</div>
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={scrollToTop}
              className="px-4 py-2 rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300 text-primary/80 hover:scale-105 transform"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-4 py-2 rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300 text-primary/80 hover:scale-105 transform"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="px-4 py-2 rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300 text-primary/80 hover:scale-105 transform"
            >
              About
            </button>
          </div>
          <Button 
            variant="outline" 
            onClick={() => scrollToSection('contact')}
            className="backdrop-blur-sm bg-white/20 border-secondary/30 hover:bg-accent hover:text-accent-foreground hover:border-accent/50 transition-all duration-300 text-base"
          >
            Work With Me
          </Button>
        </nav>
      </div>
    </header>
  );
}