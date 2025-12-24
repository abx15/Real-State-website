import { Link } from "react-router-dom";
import {
  Home,
  TrendingUp,
  Users,
  Key,
  BarChart3,
  Shield,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { MainLayout } from "@/components/layout";

const services = [
  {
    icon: Home,
    title: "Property Sales",
    description:
      "Expert guidance through every step of buying or selling your property, from valuation to closing.",
    features: [
      "Market valuation analysis",
      "Professional photography",
      "Strategic marketing",
      "Negotiation support",
    ],
  },
  {
    icon: Key,
    title: "Rental Services",
    description:
      "Find the perfect rental property or let us help you find quality tenants for your investment.",
    features: [
      "Tenant screening",
      "Lease preparation",
      "Rent collection",
      "Move-in coordination",
    ],
  },
  {
    icon: TrendingUp,
    title: "Investment Advisory",
    description:
      "Strategic investment advice to help you build and grow your real estate portfolio.",
    features: [
      "Portfolio analysis",
      "ROI projections",
      "Market opportunities",
      "Risk assessment",
    ],
  },
  {
    icon: Users,
    title: "Property Management",
    description:
      "Comprehensive management services for property owners, ensuring optimal returns and peace of mind.",
    features: [
      "Maintenance coordination",
      "Financial reporting",
      "Tenant relations",
      "Property inspections",
    ],
  },
  {
    icon: BarChart3,
    title: "Market Analysis",
    description:
      "In-depth market research and analysis to help you make informed real estate decisions.",
    features: [
      "Comparative analysis",
      "Trend forecasting",
      "Neighborhood insights",
      "Price optimization",
    ],
  },
  {
    icon: Shield,
    title: "Legal Assistance",
    description:
      "Navigate complex real estate transactions with our network of trusted legal professionals.",
    features: [
      "Contract review",
      "Title searches",
      "Closing support",
      "Dispute resolution",
    ],
  },
];

export default function Services() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <p className="text-accent font-medium mb-4">Our Services</p>
            <h1 className="hero-title mb-6">
              Comprehensive Real Estate{" "}
              <span className="text-accent">Solutions</span>
            </h1>
            <p className="text-primary-foreground/70 text-lg">
              From finding your dream home to managing your investments, we
              provide end-to-end solutions for all your real estate needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-card rounded-xl p-8 shadow-card hover:shadow-xl transition-shadow group"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                  <service.icon className="h-7 w-7 text-accent group-hover:text-accent-foreground transition-colors" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-foreground/80"
                    >
                      <CheckCircle className="h-4 w-4 text-accent shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-accent font-medium mb-2">How It Works</p>
            <h2 className="section-title text-foreground">
              Our Simple Process
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { step: "01", title: "Consultation", desc: "Tell us your needs and goals" },
              { step: "02", title: "Strategy", desc: "We create a tailored plan" },
              { step: "03", title: "Execution", desc: "Expert handling of every detail" },
              { step: "04", title: "Success", desc: "Achieve your real estate goals" },
            ].map((item, index) => (
              <div key={item.step} className="text-center relative">
                <div className="w-16 h-16 rounded-full bg-accent text-accent-foreground font-display text-xl font-bold flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted text-sm">{item.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-title mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto mb-8">
            Contact us today to discuss how we can help you achieve your real
            estate goals.
          </p>
          <Link to="/contact">
            <Button variant="gold" size="xl">
              Schedule a Consultation
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </MainLayout>
  );
}
