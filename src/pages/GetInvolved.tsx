
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const GetInvolved = () => {
  const { toast } = useToast();
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Subscribed!",
      description: "You've successfully subscribed to our newsletter.",
    });
  };
  
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for your message. We'll get back to you soon.",
    });
  };

  return (
    <div>
      <div className="bg-policode-blue text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get Involved</h1>
            <p className="text-xl text-gray-100">
              Join us in making policy information accessible to everyone
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <Tabs defaultValue="ways-to-help" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="ways-to-help">Ways to Help</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
            <TabsTrigger value="contact">Contact Us</TabsTrigger>
          </TabsList>
          
          <TabsContent value="ways-to-help" className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Spread the Word</CardTitle>
                  <CardDescription>
                    Help others learn about PoliCode
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>Share PoliCode with your community:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Share our articles on social media</li>
                    <li>Tell friends and family about our resources</li>
                    <li>Invite community members to our events</li>
                    <li>Post about PoliCode in community spaces</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Share PoliCode</Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Volunteer</CardTitle>
                  <CardDescription>
                    Contribute your skills and time
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>We need help with:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Translating policy documents</li>
                    <li>Community outreach</li>
                    <li>Event organization</li>
                    <li>Content creation and research</li>
                    <li>Technical support</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Become a Volunteer</Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Donate</CardTitle>
                  <CardDescription>
                    Support our mission financially
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>Your donations help us:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Translate more policy documents</li>
                    <li>Host community events</li>
                    <li>Develop educational materials</li>
                    <li>Maintain and improve our platform</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="default" className="w-full">Donate Now</Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Become a Partner</CardTitle>
                  <CardDescription>
                    Collaborate with PoliCode
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>We partner with:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Community organizations</li>
                    <li>Educational institutions</li>
                    <li>Legal aid services</li>
                    <li>Government agencies</li>
                    <li>Advocacy groups</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Become a Partner</Button>
                </CardFooter>
              </Card>
            </div>
            
            <div className="mt-12 bg-gray-50 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h3>
              <p className="text-gray-600 mb-6">
                Stay updated on policy changes, events, and opportunities to get involved.
              </p>
              <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
                <Input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow"
                  required
                />
                <Button type="submit">Subscribe</Button>
              </form>
            </div>
          </TabsContent>
          
          <TabsContent value="resources" className="pt-6">
            <div className="space-y-10">
              <div>
                <h2 className="text-2xl font-bold mb-4">Educational Resources</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Policy Guides</CardTitle>
                      <CardDescription>
                        Easy-to-understand explanations of common policies
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Housing Policy Basics</li>
                        <li>Understanding Healthcare Laws</li>
                        <li>Education Policy Framework</li>
                        <li>Employment Rights Guide</li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">Download Guides</Button>
                    </CardFooter>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Video Tutorials</CardTitle>
                      <CardDescription>
                        Visual explanations of policy concepts
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>How Laws Are Made</li>
                        <li>Understanding Your Rights</li>
                        <li>How to Contact Your Representatives</li>
                        <li>Participating in Public Comment Periods</li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">Watch Videos</Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4">Action Resources</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Advocacy Toolkits</CardTitle>
                      <CardDescription>
                        Resources to help you advocate for change
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Letter Writing Templates</li>
                        <li>Meeting with Officials Guide</li>
                        <li>Community Organizing Basics</li>
                        <li>Social Media Advocacy Tips</li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Get Toolkits</Button>
                    </CardFooter>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Representative Finder</CardTitle>
                      <CardDescription>
                        Find and contact your elected officials
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">
                        Enter your address to find your:
                      </p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Local Representatives</li>
                        <li>State Representatives</li>
                        <li>Federal Representatives</li>
                        <li>School Board Members</li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Find Representatives</Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4">Community Resources</h2>
                <Card>
                  <CardHeader>
                    <CardTitle>Partner Organizations</CardTitle>
                    <CardDescription>
                      Organizations working on policy issues in your community
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2">Housing</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Housing Rights Initiative</li>
                          <li>Community Housing Network</li>
                          <li>Fair Housing Alliance</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Education</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Education Equity Coalition</li>
                          <li>Student Success Alliance</li>
                          <li>Parent Teacher Advocacy Group</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Healthcare</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Healthcare Access Network</li>
                          <li>Community Health Initiative</li>
                          <li>Patient Rights Advocates</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Employment</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Workers' Rights Center</li>
                          <li>Job Opportunity Coalition</li>
                          <li>Fair Wage Alliance</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">View All Partners</Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="contact" className="pt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Us</CardTitle>
                  <CardDescription>
                    Have questions or want to get involved? Send us a message.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Name
                        </label>
                        <Input id="name" required />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <Input id="email" type="email" required />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <Input id="subject" required />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea id="message" rows={5} required />
                    </div>
                    
                    <Button type="submit" className="w-full">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Other Ways to Reach Us</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p>contact@policode.org</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-1">Social Media</h3>
                      <div className="flex space-x-4">
                        <a href="#" className="text-policode-blue hover:text-policode-red transition-colors">
                          Twitter
                        </a>
                        <a href="#" className="text-policode-blue hover:text-policode-red transition-colors">
                          Facebook
                        </a>
                        <a href="#" className="text-policode-blue hover:text-policode-red transition-colors">
                          Instagram
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>FAQs</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-1">How can I volunteer?</h3>
                      <p className="text-gray-600">
                        Fill out our volunteer form or contact us directly to discuss how you can contribute your skills.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-1">Do you offer internships?</h3>
                      <p className="text-gray-600">
                        Yes, we offer internships for students and recent graduates interested in policy advocacy.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-1">Can I suggest a policy to cover?</h3>
                      <p className="text-gray-600">
                        Absolutely! We welcome suggestions for policies to explain and analyze.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-1">How can my organization partner with PoliCode?</h3>
                      <p className="text-gray-600">
                        Contact us with partnership opportunities, and we'll explore how we can work together.
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">View All FAQs</Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default GetInvolved;
