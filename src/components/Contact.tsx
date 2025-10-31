import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export function Contact() {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto backdrop-blur-md bg-white/40 rounded-3xl border border-white/30 p-8 shadow-xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-[Playfair_Display]">Work With Me</h2>
          
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-lg text-muted-foreground">
              Whether it's a new role, a <a href="https://joreneventures.carrd.co/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary underline transition-colors">consulting engagement</a>, or a collaboration, I'm always open to exploring impactful ways to work together!
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="backdrop-blur-md bg-white/60 border border-white/40 rounded-2xl shadow-xl overflow-hidden">
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSdeO4LtLgYuRL6Q3xL94y7GowNJH4XAkew9WlZ1axcQyEqhUA/viewform?embedded=true" 
                width="100%" 
                height="800" 
                frameBorder="0"
                className="w-full"
                title="Contact Form"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}