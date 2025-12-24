import { Link } from "react-router-dom";
import { Heart, Bed, Bath, Square, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Property } from "@/data/mockData";

interface PropertyCardProps {
  property: Property;
  variant?: "default" | "featured";
}

export function PropertyCard({ property, variant = "default" }: PropertyCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(price);
  };

  const isFeatured = variant === "featured";

  return (
    <Link
      to={`/properties/${property.id}`}
      className={cn(
        "property-card group block",
        isFeatured && "lg:flex lg:items-stretch"
      )}
    >
      {/* Image Container */}
      <div
        className={cn(
          "relative overflow-hidden",
          isFeatured ? "lg:w-1/2 aspect-[4/3] lg:aspect-auto" : "aspect-[4/3]"
        )}
      >
        <img
          src={property.images[0]}
          alt={property.title}
          className="property-image w-full h-full object-cover"
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Status Badge */}
        <Badge
          className={cn(
            "absolute top-4 left-4 font-medium",
            property.status === "for-sale" && "bg-accent text-accent-foreground",
            property.status === "for-rent" && "bg-primary text-primary-foreground",
            property.status === "sold" && "bg-destructive text-destructive-foreground"
          )}
        >
          {property.status === "for-sale" ? "For Sale" : property.status === "for-rent" ? "For Rent" : "Sold"}
        </Badge>

        {/* Featured Badge */}
        {property.isFeatured && (
          <Badge className="absolute top-4 right-14 bg-gold text-accent-foreground font-medium">
            Featured
          </Badge>
        )}

        {/* Wishlist Button */}
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-3 right-3 h-8 w-8 rounded-full bg-card/80 backdrop-blur-sm hover:bg-card text-foreground"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            // Handle wishlist toggle
          }}
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>

      {/* Content */}
      <div
        className={cn(
          "p-5",
          isFeatured && "lg:w-1/2 lg:flex lg:flex-col lg:justify-center lg:p-8"
        )}
      >
        {/* Price */}
        <p className="text-accent font-display text-2xl font-bold mb-2">
          {formatPrice(property.price)}
          {property.status === "for-rent" && (
            <span className="text-muted text-sm font-sans font-normal">/month</span>
          )}
        </p>

        {/* Title */}
        <h3 className="card-title text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-1">
          {property.title}
        </h3>

        {/* Location */}
        <div className="flex items-center gap-1.5 text-muted text-sm mb-4">
          <MapPin className="h-4 w-4 shrink-0" />
          <span className="line-clamp-1">{property.location}</span>
        </div>

        {/* Description (Featured Only) */}
        {isFeatured && (
          <p className="text-muted text-sm mb-6 line-clamp-2">
            {property.description}
          </p>
        )}

        {/* Features */}
        <div className="flex items-center gap-4 text-sm text-foreground/80">
          <div className="flex items-center gap-1.5">
            <Bed className="h-4 w-4 text-accent" />
            <span>{property.bedrooms} Beds</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Bath className="h-4 w-4 text-accent" />
            <span>{property.bathrooms} Baths</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Square className="h-4 w-4 text-accent" />
            <span>{property.area.toLocaleString()} sqft</span>
          </div>
        </div>

        {/* Agent (Featured Only) */}
        {isFeatured && (
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-border">
            <img
              src={property.agent.avatar}
              alt={property.agent.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-medium text-foreground">
                {property.agent.name}
              </p>
              <p className="text-xs text-muted">
                {property.agent.phone}
              </p>
            </div>
          </div>
        )}
      </div>
    </Link>
  );
}
