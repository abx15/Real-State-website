import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Phone,
  Mail,
  Star,
  MapPin,
  Award,
  Briefcase,
  MessageSquare,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MainLayout } from "@/components/layout";
import { PropertyCard } from "@/components/PropertyCard";
import { agents, properties } from "@/data/mockData";
import { toast } from "@/hooks/use-toast";

export default function AgentProfile() {
  const { id } = useParams();
  const agent = agents.find((a) => a.id === id);
  
  // Get agent's properties
  const agentProperties = properties.filter((p) => p.agent.id === id);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: `Your message has been sent to ${agent?.name}.`,
    });
  };

  if (!agent) {
    return (
      <MainLayout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Agent Not Found</h1>
            <Link to="/agents">
              <Button variant="gold">Back to Agents</Button>
            </Link>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      {/* Breadcrumb */}
      <section className="pt-24 pb-4 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-muted hover:text-accent transition-colors">
              Home
            </Link>
            <span className="text-muted">/</span>
            <Link to="/agents" className="text-muted hover:text-accent transition-colors">
              Agents
            </Link>
            <span className="text-muted">/</span>
            <span className="text-foreground">{agent.name}</span>
          </div>
        </div>
      </section>

      {/* Agent Header */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 text-primary-foreground">
            {/* Avatar */}
            <div className="relative">
              <img
                src={agent.avatar}
                alt={agent.name}
                className="w-40 h-40 rounded-2xl object-cover border-4 border-accent/30 shadow-xl"
              />
              <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-accent flex items-center justify-center shadow-gold">
                <Star className="h-6 w-6 text-accent-foreground fill-current" />
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-display font-bold mb-2">
                {agent.name}
              </h1>
              <p className="text-accent text-lg mb-4">{agent.title}</p>
              
              {/* Stats */}
              <div className="flex flex-wrap justify-center md:justify-start gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-accent" />
                  <span>{agent.listings} Listings</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-accent" />
                  <span>{agent.experience}+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-accent fill-current" />
                  <span>{agent.rating} Rating</span>
                </div>
              </div>

              {/* Contact Buttons */}
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <Button variant="gold" asChild>
                  <a href={`tel:${agent.phone}`}>
                    <Phone className="h-4 w-4 mr-2" />
                    {agent.phone}
                  </a>
                </Button>
                <Button variant="heroOutline" asChild>
                  <a href={`mailto:${agent.email}`}>
                    <Mail className="h-4 w-4 mr-2" />
                    Send Email
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - About & Specialties */}
            <div className="lg:col-span-2 space-y-8">
              {/* About */}
              <div className="bg-card rounded-xl p-6 shadow-card">
                <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                  About {agent.name}
                </h2>
                <p className="text-foreground/80 leading-relaxed">
                  {agent.bio}
                </p>
                <p className="text-foreground/80 leading-relaxed mt-4">
                  With a proven track record of success and a commitment to excellence, {agent.name.split(' ')[0]} 
                  brings unparalleled expertise to every transaction. Whether you're buying your first home or 
                  selling a luxury property, you can count on personalized service and expert guidance throughout 
                  the entire process.
                </p>
              </div>

              {/* Specialties */}
              <div className="bg-card rounded-xl p-6 shadow-card">
                <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                  Areas of Expertise
                </h2>
                <div className="flex flex-wrap gap-3">
                  {agent.specialties.map((specialty) => (
                    <Badge
                      key={specialty}
                      variant="secondary"
                      className="px-4 py-2 text-sm bg-accent/10 text-accent border-accent/20"
                    >
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Agent's Listings */}
              <div>
                <h2 className="text-xl font-display font-semibold text-foreground mb-6">
                  {agent.name}'s Listings ({agentProperties.length})
                </h2>
                {agentProperties.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {agentProperties.map((property) => (
                      <PropertyCard key={property.id} property={property} />
                    ))}
                  </div>
                ) : (
                  <div className="bg-secondary/30 rounded-xl p-8 text-center">
                    <p className="text-muted">
                      No active listings at the moment.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <div className="bg-card rounded-xl p-6 shadow-card sticky top-28">
                <h3 className="text-lg font-display font-semibold text-foreground mb-4">
                  Contact {agent.name.split(' ')[0]}
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Your Name
                    </label>
                    <Input placeholder="John Doe" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Email Address
                    </label>
                    <Input type="email" placeholder="john@example.com" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Phone Number
                    </label>
                    <Input type="tel" placeholder="+1 (234) 567-890" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Message
                    </label>
                    <Textarea
                      placeholder={`Hi ${agent.name.split(' ')[0]}, I'm interested in...`}
                      rows={4}
                      required
                    />
                  </div>
                  <Button variant="gold" className="w-full">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>

                {/* Quick Actions */}
                <div className="mt-6 pt-6 border-t border-border space-y-3">
                  <Button variant="navyOutline" className="w-full" asChild>
                    <a href={`tel:${agent.phone}`}>
                      <Phone className="h-4 w-4 mr-2" />
                      Call Now
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule a Meeting
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Agents CTA */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-title text-foreground mb-4">
            Meet Our Other Agents
          </h2>
          <p className="text-muted mb-6">
            Explore our full team of real estate professionals
          </p>
          <Link to="/agents">
            <Button variant="navy">View All Agents</Button>
          </Link>
        </div>
      </section>
    </MainLayout>
  );
}
