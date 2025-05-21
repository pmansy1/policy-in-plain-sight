
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Hero = () => {
  return (
    <div className="hero-gradient text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Policy in your language, power in your hands
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Making policy accessible to everyone, regardless of background or education
          </p>
          
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 mt-10">
            <h2 className="text-2xl font-bold mb-4">Find policies that impact you</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-left">Location</label>
                <Input 
                  type="text" 
                  placeholder="Enter zip code or address" 
                  className="bg-white/20 text-white placeholder:text-gray-300 border-gray-400"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-left">Policy Type</label>
                <Select>
                  <SelectTrigger className="bg-white/20 text-white border-gray-400">
                    <SelectValue placeholder="Select policy type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="housing">Housing</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="employment">Employment</SelectItem>
                    <SelectItem value="immigration">Immigration</SelectItem>
                    <SelectItem value="environment">Environment</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="mt-4">
              <Button className="w-full" size="lg">
                Search Policies
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
