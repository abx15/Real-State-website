import { Link } from "react-router-dom";
import { Award, Users, Building, Target, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MainLayout } from "@/components/layout";

const values = [
  {
    icon: Target,
    title: "Client-Focused",
    description: "Your goals are our priority. We listen, understand, and deliver results that exceed expectations."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We hold ourselves to the highest standards in every transaction and interaction."
  },
  {
    icon: Users,
    title: "Integrity",
    description: "Honesty and transparency guide every decision we make on your behalf."
  },
  {
    icon: Building,
    title: "Innovation",
    description: "Leveraging technology and market insights to provide cutting-edge real estate solutions."
  }
];

const milestones = [
  { year: "1998", event: "Founded in New York City" },
  { year: "2005", event: "Expanded to 10 major cities" },
  { year: "2012", event: "Launched luxury division" },
  { year: "2018", event: "10,000 properties sold milestone" },
  { year: "2024", event: "Serving 50+ cities nationwide" }
];

export default function About() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <p className="text-accent font-medium mb-4">About Estatery</p>
            <h1 className="hero-title mb-6">
              Building Dreams,<br />
              <span className="text-accent">One Home at a Time</span>
            </h1>
            <p className="text-primary-foreground/70 text-lg">
              For over 25 years, Estatery has been connecting people with
              exceptional properties and providing unparalleled real estate
              services across the nation.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-card -mt-10 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: "25+", label: "Years Experience" },
              { value: "15K+", label: "Properties Sold" },
              { value: "12K+", label: "Happy Clients" },
              { value: "50+", label: "Cities Covered" }
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-display font-bold text-accent">
                  {stat.value}
                </p>
                <p className="text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-accent font-medium mb-2">Our Story</p>
              <h2 className="section-title text-foreground mb-6">
                A Legacy of Excellence in Real Estate
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  Estatery was founded with a simple mission: to make the dream
                  of homeownership accessible to everyone while maintaining the
                  highest standards of service and integrity.
                </p>
                <p>
                  What started as a small boutique agency in New York has grown
                  into a nationwide network of dedicated professionals, all
                  sharing the same commitment to our clients' success.
                </p>
                <p>
                  Today, we continue to innovate and adapt to the changing real
                  estate landscape while staying true to our core values of
                  trust, expertise, and personalized service.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-secondary/50 rounded-xl p-8">
                <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                  Our Journey
                </h3>
                <div className="space-y-6">
                  {milestones.map((milestone, index) => (
                    <div key={milestone.year} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-sm">
                          {milestone.year.slice(-2)}
                        </div>
                        {index < milestones.length - 1 && (
                          <div className="w-0.5 h-full bg-border mt-2" />
                        )}
                      </div>
                      <div className="pb-6">
                        <p className="font-semibold text-foreground">
                          {milestone.year}
                        </p>
                        <p className="text-muted text-sm">{milestone.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-accent font-medium mb-2">Our Values</p>
            <h2 className="section-title text-foreground">
              What Drives Us Forward
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-card rounded-xl p-6 shadow-card text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-title mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto mb-8">
            Whether you're buying, selling, or investing, our team is here to
            guide you every step of the way.
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
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
