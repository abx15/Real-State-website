import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, User, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Properties", path: "/properties" },
  { name: "Agents", path: "/agents" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = location.pathname === "/";
  const isTransparent = isHomePage && !isScrolled;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isTransparent
          ? "bg-transparent"
          : "bg-card/95 backdrop-blur-md shadow-md"
      )}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
              <span className="font-display text-xl font-bold text-accent-foreground">
                E
              </span>
            </div>
            <span
              className={cn(
                "font-display text-xl font-semibold transition-colors",
                isTransparent ? "text-primary-foreground" : "text-foreground"
              )}
            >
              Estatery
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "nav-link text-sm font-medium",
                  isTransparent
                    ? "text-primary-foreground/90 hover:text-primary-foreground"
                    : "text-foreground/80 hover:text-foreground",
                  location.pathname === link.path && "text-accent"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="/wishlist">
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  isTransparent
                    ? "text-primary-foreground hover:bg-primary-foreground/10"
                    : ""
                )}
              >
                <Heart className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/login">
              <Button
                variant={isTransparent ? "heroOutline" : "navyOutline"}
                size="sm"
              >
                Sign In
              </Button>
            </Link>
            <Link to="/register">
              <Button variant="gold" size="sm">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X
                className={cn(
                  "h-6 w-6",
                  isTransparent ? "text-primary-foreground" : "text-foreground"
                )}
              />
            ) : (
              <Menu
                className={cn(
                  "h-6 w-6",
                  isTransparent ? "text-primary-foreground" : "text-foreground"
                )}
              />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 right-0 bg-card shadow-lg border-t border-border animate-fade-in">
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "text-foreground/80 hover:text-accent py-2 text-base font-medium transition-colors",
                    location.pathname === link.path && "text-accent"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-border">
                <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="navyOutline" className="w-full">
                    Sign In
                  </Button>
                </Link>
                <Link to="/register" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="gold" className="w-full">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
