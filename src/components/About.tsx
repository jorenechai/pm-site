import { Card, CardContent } from "./ui/card";

export function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto backdrop-blur-md bg-white/40 rounded-3xl border border-white/30 p-8 shadow-xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-[Playfair_Display]">About</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                A balance of cutting costs and maximizing revenue brings the margins that any profitable business desires.
              </p>
              
              <p>
                I've been on both sides of the business at Fortune 500 companies and start-ups. Over the years, I've found myself thriving in a sweet spot of building (AI) products that drive customer acquisition, activation and retention that leads to recurring revenue growth. I believe that the upside is always unlimited.
              </p>
              
              <p>
                Outside of work, I enjoy exploring new play spaces with my family, getting up to speed on the latest (financial & tech) news and recreating recipes that I miss from home.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}