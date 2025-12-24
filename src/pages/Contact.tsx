import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MainLayout } from "@/components/layout";
import { toast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    lines: ["123 Real Estate Avenue", "New York, NY 10001"],
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+1 (234) 567-890", "+1 (234) 567-891"],
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["info@estatery.com", "support@estatery.com"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    lines: ["Mon - Fri: 9AM - 6PM", "Sat: 10AM - 4PM"],
  },
];

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <p className="text-accent font-medium mb-4">Contact Us</p>
            <h1 className="hero-title mb-6">
              Get in <span className="text-accent">Touch</span>
            </h1>
            <p className="text-primary-foreground/70 text-lg">
              Have questions or ready to start your real estate journey? We're
              here to help you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  Contact Information
                </h2>
                <p className="text-muted">
                  Reach out to us through any of these channels, and we'll
                  respond promptly.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      <item.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {item.title}
                      </h3>
                      {item.lines.map((line) => (
                        <p key={line} className="text-muted text-sm">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-xl p-8 shadow-card">
                <h2 className="text-2xl font-display font-semibold text-foreground mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        First Name
                      </label>
                      <Input placeholder="John" required />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Last Name
                      </label>
                      <Input placeholder="Doe" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Subject
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="buying">Buying a Property</SelectItem>
                        <SelectItem value="selling">Selling a Property</SelectItem>
                        <SelectItem value="renting">Renting</SelectItem>
                        <SelectItem value="investment">Investment Advice</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Message
                    </label>
                    <Textarea
                      placeholder="Tell us how we can help you..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button variant="gold" size="xl" className="w-full md:w-auto">
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 bg-secondary/50 flex items-center justify-center">
        <div className="text-center">
          <MapPin className="h-12 w-12 text-accent mx-auto mb-4" />
          <p className="text-muted">
            Interactive map would be displayed here
          </p>
        </div>
      </section>
    </MainLayout>
  );
}
