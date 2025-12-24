import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, Heart } from "lucide-react";
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
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = location.pathname === "/";
  const transparent = isHome && !isScrolled;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        transparent
          ? "bg-transparent"
          : "bg-card/90 backdrop-blur-lg shadow-md"
      )}
    >
      <div className="container mx-auto px-4">
        <nav className="flex h-20 items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center">
              <span className="font-display text-xl font-bold text-accent-foreground">
                E
              </span>
            </div>
            <span
              className={cn(
                "font-display text-2xl font-semibold transition-colors",
                transparent ? "text-primary-foreground" : "text-foreground"
              )}
            >
              Estatery
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "relative text-sm font-medium transition-colors",
                    transparent
                      ? "text-primary-foreground/80 hover:text-primary-foreground"
                      : "text-foreground/70 hover:text-foreground",
                    active && "text-accent"
                  )}
                >
                  {link.name}
                  {active && (
                    <span className="absolute -bottom-2 left-0 h-[2px] w-full bg-accent rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/wishlist">
              <Button
                size="icon"
                variant="ghost"
                className={cn(
                  transparent &&
                    "text-primary-foreground hover:bg-primary-foreground/10"
                )}
              >
                <Heart className="h-5 w-5" />
              </Button>
            </Link>

            <Link to="/login">
              <Button
                size="sm"
                variant={transparent ? "heroOutline" : "navyOutline"}
              >
                Sign In
              </Button>
            </Link>

            <Link to="/register">
              <Button size="sm" variant="gold">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            {isMobileOpen ? (
              <X
                className={cn(
                  "h-6 w-6",
                  transparent ? "text-primary-foreground" : "text-foreground"
                )}
              />
            ) : (
              <Menu
                className={cn(
                  "h-6 w-6",
                  transparent ? "text-primary-foreground" : "text-foreground"
                )}
              />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileOpen && (
          <div className="lg:hidden absolute top-20 left-0 right-0 bg-card border-t border-border shadow-xl">
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileOpen(false)}
                  className={cn(
                    "text-base font-medium transition-colors",
                    location.pathname === link.path
                      ? "text-accent"
                      : "text-foreground/80 hover:text-accent"
                  )}
                >
                  {link.name}
                </Link>
              ))}

              <div className="pt-4 border-t border-border flex flex-col gap-3">
                <Link to="/login" onClick={() => setIsMobileOpen(false)}>
                  <Button variant="navyOutline" className="w-full">
                    Sign In
                  </Button>
                </Link>
                <Link to="/register" onClick={() => setIsMobileOpen(false)}>
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
