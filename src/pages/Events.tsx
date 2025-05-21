
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Community Town Hall: Housing Policy",
    description: "Join us for a discussion about the new Housing Affordability Act and how it affects our community.",
    date: "June 15, 2023",
    time: "6:00 PM - 8:00 PM",
    location: "Community Center, 123 Main St",
    category: "Town Hall",
  },
  {
    id: 2,
    title: "Voter Registration Drive",
    description: "Get registered to vote and learn about upcoming elections and how to make your voice heard.",
    date: "June 20, 2023",
    time: "10:00 AM - 4:00 PM",
    location: "Public Library, 456 Oak Ave",
    category: "Civic Engagement",
  },
  {
    id: 3,
    title: "Education Policy Workshop",
    description: "Learn about recent education policy changes and how they impact students and families.",
    date: "June 25, 2023",
    time: "1:00 PM - 3:00 PM",
    location: "Community College, 789 Pine St",
    category: "Workshop",
  },
  {
    id: 4,
    title: "Healthcare Access Forum",
    description: "Community forum on healthcare access and recent policy changes affecting healthcare coverage.",
    date: "July 5, 2023",
    time: "5:30 PM - 7:30 PM",
    location: "Health Center, 321 Elm St",
    category: "Forum",
  },
  {
    id: 5,
    title: "Environmental Justice Rally",
    description: "Rally in support of the Environmental Justice Act and against pollution in urban communities.",
    date: "July 10, 2023",
    time: "12:00 PM - 2:00 PM",
    location: "City Park, 654 Maple Ave",
    category: "Rally",
  },
  {
    id: 6,
    title: "Policy Impact Discussion: Transportation",
    description: "Discussion on transportation policy and its impact on access to jobs and services.",
    date: "July 15, 2023",
    time: "6:30 PM - 8:30 PM",
    location: "Transit Center, 987 Cherry St",
    category: "Discussion",
  }
];

const Events = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredEvents = events.filter(event => {
    return !searchTerm || 
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <div className="bg-policode-blue text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Local Events</h1>
            <p className="text-xl text-gray-100">
              Stay connected with civic engagement events in your community
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="mb-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <Input 
              type="text" 
              placeholder="Search events by name, description, or location..." 
              className="w-full md:w-auto md:min-w-[300px]"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
            <div className="flex items-center gap-2">
              <Input 
                type="text" 
                placeholder="Enter your zip code" 
                className="w-full md:w-[150px]"
              />
              <Button>Find Nearby</Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event) => (
                <Card key={event.id} className="article-card h-full flex flex-col">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge className="bg-policode-blue text-white">
                        {event.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-700 mb-4">{event.description}</p>
                    <div className="space-y-2 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="mr-2 h-4 w-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="mr-2 h-4 w-4" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t pt-4">
                    <Button className="w-full">Register</Button>
                  </CardFooter>
                </Card>
              ))
            ) : (
              <div className="col-span-3 py-12 text-center">
                <p className="text-gray-500 mb-4">No events found matching your search criteria.</p>
                <Button 
                  variant="outline" 
                  onClick={() => setSearchTerm("")}
                >
                  Reset Search
                </Button>
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-12 bg-gray-50 rounded-lg p-6 md:p-10">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-policode-dark mb-2">Host Your Own Event</h2>
            <p className="text-gray-600">
              Have a policy-related event you'd like to organize? We can help you spread the word.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Button variant="outline">Submit an Event</Button>
            <Button>Contact Us</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
