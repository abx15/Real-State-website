import { Link } from "react-router-dom";
import {
  Search,
  ArrowRight,
  Building,
  Users,
  Award,
  TrendingUp,
  Star,
  ChevronRight,
  Home,
  MapPin,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MainLayout } from "@/components/layout";
import { PropertyCard } from "@/components/PropertyCard";
import { AgentCard } from "@/components/AgentCard";
import { properties, agents, testimonials } from "@/data/mockData";
import heroImage from "@/assets/hero-mansion.jpg";

const stats = [
  { label: "Properties Sold", value: "15K+", icon: Building },
  { label: "Happy Clients", value: "12K+", icon: Users },
  { label: "Years Experience", value: "25+", icon: Award },
  { label: "Cities Covered", value: "50+", icon: MapPin },
];

export default function Index() {
  const featuredProperties = properties.filter((p) => p.isFeatured).slice(0, 3);
  const topAgents = agents.slice(0, 4);

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Luxury mansion"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>

        {/* Hero Content */}
        <div className="relative container mx-auto px-4 pt-20 pb-16">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <p className="text-accent font-medium mb-4 animate-fade-in">
              Welcome to Estatery
            </p>
            <h1 className="hero-title mb-6 animate-fade-in-up">
              Find Your Dream Home in the{" "}
              <span className="text-accent">Perfect Location</span>
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-10 animate-fade-in-up [animation-delay:0.2s]">
              Discover luxury properties, work with expert agents, and make your
              real estate dreams a reality.
            </p>

            {/* Search Box */}
            <div className="bg-card/95 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-xl animate-fade-in-up [animation-delay:0.3s]">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted" />
                  <Input
                    placeholder="Search location..."
                    className="pl-10 h-12 bg-secondary/50 border-0"
                  />
                </div>
                <Select>
                  <SelectTrigger className="h-12 bg-secondary/50 border-0">
                    <SelectValue placeholder="Property Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="house">House</SelectItem>
                    <SelectItem value="villa">Villa</SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                    <SelectItem value="land">Land</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="h-12 bg-secondary/50 border-0">
                    <SelectValue placeholder="Price Range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-500000">Under $500K</SelectItem>
                    <SelectItem value="500000-1000000">$500K - $1M</SelectItem>
                    <SelectItem value="1000000-3000000">$1M - $3M</SelectItem>
                    <SelectItem value="3000000+">$3M+</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="gold" size="xl" className="h-12">
                  <Search className="h-5 w-5 mr-2" />
                  Search
                </Button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-fade-in-up [animation-delay:0.4s]">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4"
                >
                  <stat.icon className="h-6 w-6 text-accent mx-auto mb-2" />
                  <p className="text-2xl font-bold text-primary-foreground">
                    {stat.value}
                  </p>
                  <p className="text-sm text-primary-foreground/70">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-8 h-12 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 rounded-full bg-accent animate-bounce" />
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <p className="text-accent font-medium mb-2">Featured Listings</p>
              <h2 className="section-title text-foreground">
                Handpicked Properties
              </h2>
            </div>
            <Link to="/properties">
              <Button variant="navyOutline" className="group">
                View All Properties
                <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Properties Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-accent font-medium mb-2">What We Offer</p>
            <h2 className="section-title mb-4">
              Comprehensive Real Estate Services
            </h2>
            <p className="text-primary-foreground/70">
              From finding your dream home to managing your investments, we
              provide end-to-end solutions for all your real estate needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Home,
                title: "Property Sales",
                description:
                  "Expert guidance through every step of buying or selling your property.",
              },
              {
                icon: TrendingUp,
                title: "Investment Advisory",
                description:
                  "Strategic investment advice to help you build your real estate portfolio.",
              },
              {
                icon: Users,
                title: "Property Management",
                description:
                  "Comprehensive management services ensuring optimal returns.",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="p-6 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 hover:border-accent/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent transition-colors">
                  <service.icon className="h-6 w-6 text-accent group-hover:text-accent-foreground transition-colors" />
                </div>
                <h3 className="text-lg font-display font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-primary-foreground/70 text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/services">
              <Button variant="gold">
                Explore All Services
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Agents Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <p className="text-accent font-medium mb-2">Meet Our Team</p>
              <h2 className="section-title text-foreground">
                Expert Real Estate Agents
              </h2>
            </div>
            <Link to="/agents">
              <Button variant="navyOutline" className="group">
                View All Agents
                <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {topAgents.map((agent) => (
              <AgentCard key={agent.id} agent={agent} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-accent font-medium mb-2">Testimonials</p>
            <h2 className="section-title text-foreground mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-card rounded-xl p-6 shadow-card"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-accent fill-current"
                    />
                  ))}
                </div>
                {/* Content */}
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                {/* Author */}
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-navy relative overflow-hidden">
        {/* Pattern Overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <h2 className="section-title mb-4">
              Ready to Find Your{" "}
              <span className="text-accent">Dream Home?</span>
            </h2>
            <p className="text-primary-foreground/70 mb-8 text-lg">
              Let our expert team help you navigate the real estate market and
              find the perfect property that matches your lifestyle and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/properties">
                <Button variant="gold" size="xl">
                  Browse Properties
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="heroOutline" size="xl">
                  <Phone className="h-5 w-5 mr-2" />
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
