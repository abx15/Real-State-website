import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Heart,
  Share2,
  Bed,
  Bath,
  Square,
  MapPin,
  Calendar,
  Check,
  Phone,
  Mail,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MainLayout } from "@/components/layout";
import { PropertyCard } from "@/components/PropertyCard";
import { properties } from "@/data/mockData";

export default function PropertyDetails() {
  const { id } = useParams();
  const property = properties.find((p) => p.id === id);
  const similarProperties = properties.filter((p) => p.id !== id).slice(0, 3);

  if (!property) {
    return (
      <MainLayout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Property Not Found</h1>
            <Link to="/properties">
              <Button variant="gold">Back to Properties</Button>
            </Link>
          </div>
        </div>
      </MainLayout>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(price);
  };

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
            <Link to="/properties" className="text-muted hover:text-accent transition-colors">
              Properties
            </Link>
            <span className="text-muted">/</span>
            <span className="text-foreground">{property.title}</span>
          </div>
        </div>
      </section>

      {/* Property Header */}
      <section className="py-6 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Badge
                  className={
                    property.status === "for-sale"
                      ? "bg-accent text-accent-foreground"
                      : "bg-primary text-primary-foreground"
                  }
                >
                  {property.status === "for-sale" ? "For Sale" : "For Rent"}
                </Badge>
                <Badge variant="outline">{property.type}</Badge>
              </div>
              <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
                {property.title}
              </h1>
              <div className="flex items-center gap-2 text-muted">
                <MapPin className="h-4 w-4" />
                <span>{property.address}, {property.location}</span>
              </div>
            </div>
            <div className="flex flex-col items-start lg:items-end gap-2">
              <p className="text-3xl font-display font-bold text-accent">
                {formatPrice(property.price)}
                {property.status === "for-rent" && (
                  <span className="text-lg text-muted font-sans">/month</span>
                )}
              </p>
              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Image */}
      <section className="pb-8 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img
              src={property.images[0]}
              alt={property.title}
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Property Details */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Quick Stats */}
              <div className="grid grid-cols-4 gap-4 p-6 bg-card rounded-xl shadow-card">
                <div className="text-center">
                  <Bed className="h-6 w-6 text-accent mx-auto mb-2" />
                  <p className="text-xl font-bold text-foreground">{property.bedrooms}</p>
                  <p className="text-sm text-muted">Bedrooms</p>
                </div>
                <div className="text-center">
                  <Bath className="h-6 w-6 text-accent mx-auto mb-2" />
                  <p className="text-xl font-bold text-foreground">{property.bathrooms}</p>
                  <p className="text-sm text-muted">Bathrooms</p>
                </div>
                <div className="text-center">
                  <Square className="h-6 w-6 text-accent mx-auto mb-2" />
                  <p className="text-xl font-bold text-foreground">{property.area.toLocaleString()}</p>
                  <p className="text-sm text-muted">Sq Ft</p>
                </div>
                <div className="text-center">
                  <Calendar className="h-6 w-6 text-accent mx-auto mb-2" />
                  <p className="text-xl font-bold text-foreground">2024</p>
                  <p className="text-sm text-muted">Year Built</p>
                </div>
              </div>

              {/* Description */}
              <div className="bg-card rounded-xl p-6 shadow-card">
                <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                  Description
                </h2>
                <p className="text-foreground/80 leading-relaxed">
                  {property.description}
                </p>
                <p className="text-foreground/80 leading-relaxed mt-4">
                  This exceptional property offers the perfect blend of luxury and comfort. 
                  With meticulously designed interiors and premium finishes throughout, 
                  every detail has been carefully considered to provide an unparalleled living experience.
                </p>
              </div>

              {/* Features */}
              <div className="bg-card rounded-xl p-6 shadow-card">
                <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                  Features & Amenities
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {property.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                        <Check className="h-3 w-3 text-accent" />
                      </div>
                      <span className="text-foreground/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Agent Card */}
              <div className="bg-card rounded-xl p-6 shadow-card">
                <h3 className="text-lg font-display font-semibold text-foreground mb-4">
                  Listed By
                </h3>
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={property.agent.avatar}
                    alt={property.agent.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-foreground">{property.agent.name}</p>
                    <p className="text-sm text-muted">Luxury Property Specialist</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <Button variant="gold" className="w-full">
                    <Phone className="h-4 w-4 mr-2" />
                    {property.agent.phone}
                  </Button>
                  <Button variant="navyOutline" className="w-full">
                    <Mail className="h-4 w-4 mr-2" />
                    Send Email
                  </Button>
                </div>
              </div>

              {/* Inquiry Form */}
              <div className="bg-card rounded-xl p-6 shadow-card">
                <h3 className="text-lg font-display font-semibold text-foreground mb-4">
                  Schedule a Visit
                </h3>
                <form className="space-y-4">
                  <Input placeholder="Your Name" />
                  <Input placeholder="Email Address" type="email" />
                  <Input placeholder="Phone Number" type="tel" />
                  <Textarea placeholder="I'm interested in this property..." rows={4} />
                  <Button variant="gold" className="w-full">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Send Inquiry
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Properties */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-foreground mb-8">Similar Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {similarProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
