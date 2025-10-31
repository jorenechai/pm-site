import { Linkedin, Youtube } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-medium mb-2">
                Jorene Chai
              </h3>
              <p className="text-primary-foreground/80">
                GM-minded Product Manager
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-6 text-sm">
              <div className="flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/in/jorenechai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors flex items-center"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://www.youtube.com/@JoreneChai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors flex items-center"
                  title="YouTube Channel"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
            <p>
              © {currentYear} Jorene Chai. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}