
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const NewsletterSignup = () => {
  return (
    <section className="py-16 bg-policode-blue/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-policode-dark mb-4">
            Stay Informed
          </h2>
          <p className="text-gray-600 mb-8">
            Subscribe to our newsletter to receive updates about new policies, events, and resources that matter to you.
          </p>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex flex-col md:flex-row gap-4">
              <Input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-grow"
              />
              <Button>
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              By subscribing, you agree to our privacy policy and consent to receive updates from PoliCode.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
