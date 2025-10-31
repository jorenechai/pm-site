import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const projects = [
    {
      title: "B2B Analytics Platform for Walmart Data Ventures",
      description:
        "Spearheaded the creation of a new analytics function that monetizes Walmart's first-party consumer data, helping 3,000+ suppliers and 20k+ users optimize omnichannel operations through data-informed insights.",
      tags: [
        "B2B SaaS",
        "Analytics",
        "AI/ML",
        "Product Strategy",
      ],
      image: "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGFuYWx5dGljcyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjA5NTAzNDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title:
        "AcreVision: 0-to-1 ML-Powered Farmland Valuation Tool",
      description:
        "Shipped an SEO farmland valuation and lending product from concept to launch, powered by machine learning models and financial data APIs, capturing organic leads for top-of-funnel.",
      tags: [
        "AI/ML",
        "0-to-1 Product",
        "SEO",
        "Growth",
      ],
      image: "https://images.unsplash.com/photo-1721594489297-963f5e24abe1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGZhcm1sYW5kJTIwYWVyaWFsfGVufDF8fHx8MTc2MDk3ODYyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title:
        "Conversion Rate Optimization & Growth Experimentation",
      description:
        "Led end-to-end conversion rate optimization across users' lending journey, leveraging A/B testing, funnel analysis, and growth experiments to improve customer acquisition costs and lifetime value.",
      tags: [
        "Growth",
        "A/B Testing",
        "Analytics",
        "Customer Acquisition",
      ],
      image: "https://images.unsplash.com/photo-1722171098271-185f35942797?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWdhcGhvbmUlMjBsb3Vkc3BlYWtlciUyMG1hcmtldGluZ3xlbnwxfHx8fDE3NjE4MzI4MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "B2B Marketplace & Predictive Analytics Platform",
      description:
        "Owned the end-to-end product vision and strategy for Unilever's global contract manufacturing analytics products, launching an integrated pricing analytics platform and B2B marketplace for 1,300+ users across 150+ countries.",
      tags: ["B2B", "Analytics", "Marketplace", "Enterprise"],
      image: "https://images.unsplash.com/photo-1691807714620-2c540def3257?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG5ldHdvcmslMjBjb25uZWN0aW9ufGVufDF8fHx8MTc2MDk3ODYyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto backdrop-blur-md bg-white/40 rounded-3xl border border-white/30 p-8 shadow-xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-[Playfair_Display]">
            Featured Projects
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="h-full flex flex-col backdrop-blur-md bg-white/30 border-white/40 hover:bg-white/40 transition-all duration-300 overflow-hidden"
              >
                <div className="w-full h-48 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl font-[Playfair_Display] font-bold">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="outline"
                        className="text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
