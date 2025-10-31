import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

export function Skills() {
  const skillCategories = [
    {
      title: "Product Strategy",
      skills: ["Product Roadmapping", "Market Research", "Competitive Analysis", "Go-to-Market Strategy", "Product Vision", "OKRs & KPIs"]
    },
    {
      title: "Technical Skills",
      skills: ["SQL", "Google Analytics", "Tableau", "Figma", "Jira", "Confluence", "A/B Testing", "API Documentation"]
    },
    {
      title: "Leadership & Collaboration",
      skills: ["Cross-functional Leadership", "Stakeholder Management", "Agile/Scrum", "User Story Writing", "Team Coaching", "Conflict Resolution"]
    },
    {
      title: "Data & Analytics",
      skills: ["Data Analysis", "User Metrics", "Conversion Optimization", "Customer Journey Mapping", "Cohort Analysis", "Statistical Analysis"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium text-center mb-12">Skills & Expertise</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-sm">
                        {skill}
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