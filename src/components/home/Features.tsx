
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Map, FileText, Languages, Users, Calendar } from "lucide-react";

const features = [
  {
    title: "Policy Search",
    description: "Find policies by location or type that directly impact your community",
    icon: Search,
  },
  {
    title: "Interactive Maps",
    description: "Visualize policies and their impact in your local area",
    icon: Map,
  },
  {
    title: "Simplified Language",
    description: "Complex policies explained in clear, accessible language",
    icon: FileText,
  },
  {
    title: "Multiple Languages",
    description: "Content available in English, Spanish, AAVE, and more",
    icon: Languages,
  },
  {
    title: "Community Engagement",
    description: "Comment, share, and discuss policies with your community",
    icon: Users,
  },
  {
    title: "Local Events",
    description: "Stay informed about policy-related events in your area",
    icon: Calendar,
  },
];

const Features = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-policode-dark">How PoliCode Helps You</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            We're bridging the gap between complex policy language and everyday people
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-t-4 border-policode-blue">
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-policode-blue/10 mb-4">
                  <feature.icon className="h-6 w-6 text-policode-blue" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent></CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
