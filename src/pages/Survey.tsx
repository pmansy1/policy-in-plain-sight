
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

type FormData = {
  name: string;
  email: string;
  age: string;
  location: string;
  howOften: string;
  policyInterests: string[];
  foundUs: string;
  preferredLanguage: string;
  feedback: string;
  subscribe: boolean;
};

const initialFormData: FormData = {
  name: "",
  email: "",
  age: "",
  location: "",
  howOften: "",
  policyInterests: [],
  foundUs: "",
  preferredLanguage: "",
  feedback: "",
  subscribe: false,
};

const ageGroups = ["18-24", "25-34", "35-44", "45-54", "55-64", "65+", "Prefer not to say"];

const policyInterests = [
  { id: "housing", label: "Housing" },
  { id: "education", label: "Education" },
  { id: "healthcare", label: "Healthcare" },
  { id: "employment", label: "Employment" },
  { id: "environment", label: "Environment" },
  { id: "transportation", label: "Transportation" },
  { id: "immigration", label: "Immigration" },
  { id: "criminal-justice", label: "Criminal Justice" },
];

const languages = [
  { value: "english", label: "English" },
  { value: "spanish", label: "Spanish" },
  { value: "aave", label: "AAVE" },
  { value: "creole", label: "Creole" },
  { value: "other", label: "Other" },
];

const Survey = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (id: string) => {
    setFormData((prev) => {
      const newInterests = prev.policyInterests.includes(id)
        ? prev.policyInterests.filter((item) => item !== id)
        : [...prev.policyInterests, id];
      return { ...prev, policyInterests: newInterests };
    });
  };

  const handleRadioChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubscribeChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, subscribe: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Survey Submitted",
        description: "Thank you for your feedback! Your responses will help us improve PoliCode.",
      });
      setFormData(initialFormData);
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div>
      <div className="bg-policode-blue text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Community Survey</h1>
            <p className="text-xl text-gray-100">
              Help us improve PoliCode by sharing your experience and suggestions
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>PoliCode Community Survey</CardTitle>
              <CardDescription>
                Your feedback helps us improve our platform and better serve our community. All responses are anonymous.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">About You</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name (Optional)</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email (Optional)</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="age">Age Group</Label>
                      <Select
                        onValueChange={(value) => handleSelectChange("age", value)}
                        value={formData.age}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select your age group" />
                        </SelectTrigger>
                        <SelectContent>
                          {ageGroups.map((age) => (
                            <SelectItem key={age} value={age}>
                              {age}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="location">Zip Code (Optional)</Label>
                      <Input
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="e.g., 10001"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Your Experience</h3>
                  
                  <div className="space-y-2">
                    <Label>How often do you visit PoliCode?</Label>
                    <RadioGroup
                      value={formData.howOften}
                      onValueChange={(value) => handleRadioChange("howOften", value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="first-time" id="first-time" />
                        <Label htmlFor="first-time">This is my first time</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="weekly" id="weekly" />
                        <Label htmlFor="weekly">Weekly</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="monthly" id="monthly" />
                        <Label htmlFor="monthly">Monthly</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="rarely" id="rarely" />
                        <Label htmlFor="rarely">Rarely</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>What policy areas are you most interested in? (Select all that apply)</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {policyInterests.map((interest) => (
                        <div key={interest.id} className="flex items-center space-x-2">
                          <Checkbox
                            id={interest.id}
                            checked={formData.policyInterests.includes(interest.id)}
                            onCheckedChange={() => handleCheckboxChange(interest.id)}
                          />
                          <Label htmlFor={interest.id}>{interest.label}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>How did you find out about PoliCode?</Label>
                    <RadioGroup
                      value={formData.foundUs}
                      onValueChange={(value) => handleRadioChange("foundUs", value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="social-media" id="social-media" />
                        <Label htmlFor="social-media">Social Media</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="search-engine" id="search-engine" />
                        <Label htmlFor="search-engine">Search Engine</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="recommendation" id="recommendation" />
                        <Label htmlFor="recommendation">Friend or Colleague Recommendation</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="community-event" id="community-event" />
                        <Label htmlFor="community-event">Community Event</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="other" id="other-source" />
                        <Label htmlFor="other-source">Other</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="preferredLanguage">What language would you prefer for policy information?</Label>
                    <Select
                      onValueChange={(value) => handleSelectChange("preferredLanguage", value)}
                      value={formData.preferredLanguage}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select your preferred language" />
                      </SelectTrigger>
                      <SelectContent>
                        {languages.map((language) => (
                          <SelectItem key={language.value} value={language.value}>
                            {language.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Your Feedback</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="feedback">What suggestions do you have to improve PoliCode?</Label>
                    <Textarea
                      id="feedback"
                      name="feedback"
                      value={formData.feedback}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Share your thoughts, suggestions, or feature requests..."
                    />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="subscribe"
                      checked={formData.subscribe}
                      onCheckedChange={handleSubscribeChange}
                    />
                    <Label htmlFor="subscribe">
                      I'd like to receive updates about PoliCode (if you provided an email)
                    </Label>
                  </div>
                </div>
                
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Survey"}
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex justify-center border-t pt-6">
              <p className="text-sm text-gray-500 text-center">
                Thank you for taking the time to complete our survey. Your feedback helps us better serve our community.
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Survey;
