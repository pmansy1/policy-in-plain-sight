
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import { Search, Menu } from "lucide-react";

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Articles", path: "/articles" },
    { name: "Events", path: "/events" },
    { name: "Survey", path: "/survey" },
    { name: "Get Involved", path: "/get-involved" },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? "bg-white dark:bg-gray-900 shadow-md" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="text-2xl font-extrabold text-policode-blue">
                Poli<span className="text-policode-red">Code</span>
              </div>
            </Link>
          </div>

          {isMobile ? (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[270px]">
                <nav className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      className="text-base font-medium hover:text-policode-blue transition-colors py-2 border-b border-gray-100"
                    >
                      {link.name}
                    </Link>
                  ))}
                  <Button className="w-full mt-4" variant="default">
                    <Search className="mr-2 h-4 w-4" />
                    Search Policies
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          ) : (
            <nav className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-base font-medium hover:text-policode-blue transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Button variant="default">
                <Search className="mr-2 h-4 w-4" />
                Search
              </Button>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
