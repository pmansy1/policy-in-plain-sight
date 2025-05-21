
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="bg-policode-blue text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About PoliCode</h1>
            <p className="text-xl text-gray-100">
              Bridging the policy gap and empowering those who were once restricted
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" 
              alt="Founder" 
              className="rounded-lg shadow-lg"
            />
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-policode-dark mb-6">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              PoliCode was founded with a clear purpose: to make policy information accessible to everyone, especially those in low-income, Black, and Latino communities who have historically been excluded from policy conversations.
            </p>
            <p className="text-gray-700 mb-6">
              We believe that understanding the laws and policies that affect your life shouldn't require a law degree or specialized education. That's why we translate complex policy language into clear, understandable terms that empower people to make informed decisions.
            </p>
            <p className="text-gray-700 mb-6">
              Our platform is designed to bring awareness about statutes that are most impactful depending on your state, city/town, district, and zipcode. We provide unbiased, accurate information about policies being enacted, formulated, implemented, and evaluated.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link to="/get-involved">
                <Button>Get Involved</Button>
              </Link>
              <Link to="/survey">
                <Button variant="outline">Take Our Survey</Button>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-policode-dark mb-10 text-center">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-policode-blue/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-policode-blue text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-policode-dark mb-2">Accessibility</h3>
              <p className="text-gray-700">
                We believe policy information should be accessible to everyone, regardless of education level or background.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-policode-blue/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-policode-blue text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-policode-dark mb-2">Transparency</h3>
              <p className="text-gray-700">
                We provide unbiased, accurate information about policies and their potential impacts on communities.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-policode-blue/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-policode-blue text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-policode-dark mb-2">Empowerment</h3>
              <p className="text-gray-700">
                We empower communities to participate in the policy process and make their voices heard.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-policode-dark mb-6">Contact Us</h2>
          <p className="text-gray-700 mb-8">
            We'd love to hear from you! If you have questions, feedback, or just want to say hello, please don't hesitate to get in touch.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-policode-dark mb-4">Email</h3>
              <p className="text-gray-700">contact@policode.org</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-policode-dark mb-4">Social Media</h3>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
