
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const articles = [
  {
    id: 1,
    title: "New Housing Affordability Act to Benefit Low-Income Families",
    excerpt: "The Housing Affordability Act introduces rent controls and subsidies for families below the poverty line.",
    date: "May 15, 2023",
    category: "Housing",
    impact: "High",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80"
  },
  {
    id: 2,
    title: "Community College Funding Expansion Announced",
    excerpt: "New legislation will increase funding for community colleges by 15% and expand scholarship opportunities.",
    date: "May 10, 2023",
    category: "Education",
    impact: "Medium",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 3,
    title: "Healthcare Access Improvement Initiative",
    excerpt: "New policy aims to reduce healthcare disparities in underserved communities through mobile clinics.",
    date: "May 5, 2023",
    category: "Healthcare",
    impact: "High",
    image: "https://images.unsplash.com/photo-1631815588090-d4bfb0629a89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
  }
];

const FeaturedArticles = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-policode-dark">Featured Articles</h2>
            <p className="text-gray-600 mt-2">Recent policy changes that may affect you</p>
          </div>
          <Link to="/articles">
            <Button variant="outline" className="mt-4 md:mt-0">
              View All Articles
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Card key={article.id} className="article-card overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge 
                    variant="outline" 
                    className="bg-policode-blue/10 text-policode-blue"
                  >
                    {article.category}
                  </Badge>
                  <Badge 
                    variant={article.impact === "High" ? "destructive" : "secondary"}
                    className="text-xs"
                  >
                    {article.impact} Impact
                  </Badge>
                </div>
                <CardTitle className="text-xl line-clamp-2">{article.title}</CardTitle>
                <CardDescription className="text-sm text-gray-500">
                  {article.date}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 line-clamp-3">{article.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Link to={`/articles/${article.id}`} className="w-full">
                  <Button variant="outline" className="w-full">Read More</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;
