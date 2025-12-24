import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const quickLinks = [
  { name: "Properties", path: "/properties" },
  { name: "Agents", path: "/agents" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

const propertyTypes = [
  { name: "Apartments", path: "/properties?type=apartment" },
  { name: "Houses", path: "/properties?type=house" },
  { name: "Villas", path: "/properties?type=villa" },
  { name: "Commercial", path: "/properties?type=commercial" },
  { name: "Land", path: "/properties?type=land" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      
      {/* Newsletter */}
      <div className="border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h3 className="font-display text-2xl font-semibold mb-2">
                Stay Updated with Latest Properties
              </h3>
              <p className="text-primary-foreground/70">
                Get real estate insights and new listings across India
              </p>
            </div>
            <div className="flex gap-3 w-full max-w-md">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
              <Button variant="gold">
                Subscribe
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <span className="font-display text-xl font-bold text-accent-foreground">
                  E
                </span>
              </div>
              <span className="font-display text-xl font-semibold">
                Estatery
              </span>
            </Link>

            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              A trusted real estate platform helping you buy, sell, and rent
              premium properties across major cities in India.
            </p>

            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">
              Property Types
            </h4>
            <ul className="space-y-3">
              {propertyTypes.map((type) => (
                <li key={type.path}>
                  <Link
                    to={type.path}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {type.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5" />
                <span className="text-primary-foreground/70 text-sm">
                  Civil Lines, Prayagraj<br />
                  Uttar Pradesh, India – 211001
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent" />
                <a
                  href="tel:+919129939972"
                  className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  +91 91299 39972
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent" />
                <a
                  href="mailto:contact@estatery.in"
                  className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  contact@estatery.in
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
            <p>© 2024 Estatery India. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-accent">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-accent">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}
