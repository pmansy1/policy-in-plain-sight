
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";

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
  },
  {
    id: 4,
    title: "Minimum Wage Increase for Essential Workers",
    excerpt: "New policy raises minimum wage for essential workers in retail, healthcare, and transportation.",
    date: "April 28, 2023",
    category: "Employment",
    impact: "High",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 5,
    title: "Environmental Justice Act for Urban Communities",
    excerpt: "New legislation addresses pollution and environmental hazards in predominantly minority urban areas.",
    date: "April 20, 2023",
    category: "Environment",
    impact: "Medium",
    image: "https://images.unsplash.com/photo-1532649538693-f3a2ec1bf8bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 6,
    title: "Public Transportation Expansion in Underserved Areas",
    excerpt: "New initiative will expand bus and light rail service to connect low-income neighborhoods to job centers.",
    date: "April 15, 2023",
    category: "Transportation",
    impact: "Medium",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
  }
];

const Articles = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);
  
  const filteredArticles = articles.filter(article => {
    const matchesSearch = !searchTerm || 
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = !selectedCategory || article.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <div className="bg-policode-blue text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Policy Articles</h1>
            <p className="text-xl text-gray-100">
              Stay informed about policies that affect your community
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="mb-10">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input 
                type="text" 
                placeholder="Search articles..." 
                className="pl-10"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
            </div>
            <Select onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Housing">Housing</SelectItem>
                <SelectItem value="Education">Education</SelectItem>
                <SelectItem value="Healthcare">Healthcare</SelectItem>
                <SelectItem value="Employment">Employment</SelectItem>
                <SelectItem value="Environment">Environment</SelectItem>
                <SelectItem value="Transportation">Transportation</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <Tabs defaultValue="recent" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:w-auto md:inline-flex">
              <TabsTrigger value="recent">Most Recent</TabsTrigger>
              <TabsTrigger value="popular">Most Popular</TabsTrigger>
            </TabsList>
            
            <TabsContent value="recent" className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.length > 0 ? (
                  filteredArticles.map((article) => (
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
                  ))
                ) : (
                  <div className="col-span-3 py-12 text-center">
                    <p className="text-gray-500 mb-4">No articles found matching your search criteria.</p>
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        setSearchTerm("");
                        setSelectedCategory(undefined);
                      }}
                    >
                      Reset Filters
                    </Button>
                  </div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="popular" className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.length > 0 ? (
                  [...filteredArticles]
                    .sort((a, b) => (a.impact === "High" ? -1 : 1))
                    .map((article) => (
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
                    ))
                ) : (
                  <div className="col-span-3 py-12 text-center">
                    <p className="text-gray-500 mb-4">No articles found matching your search criteria.</p>
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        setSearchTerm("");
                        setSelectedCategory(undefined);
                      }}
                    >
                      Reset Filters
                    </Button>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Articles;
