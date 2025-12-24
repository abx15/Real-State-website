import { Link } from "react-router-dom";
import { Heart, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MainLayout } from "@/components/layout";
import { PropertyCard } from "@/components/PropertyCard";
import { properties } from "@/data/mockData";

export default function Wishlist() {
  // In a real app, this would come from state/context
  const wishlistProperties = properties.slice(0, 2);

  return (
    <MainLayout>
      {/* Page Header */}
      <section className="pt-32 pb-12 bg-primary">
        <div className="container mx-auto px-4">
          <div className="text-center text-primary-foreground">
            <Heart className="h-12 w-12 text-accent mx-auto mb-4" />
            <h1 className="hero-title mb-4">My Wishlist</h1>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
              Properties you've saved for later. Sign in to sync across devices.
            </p>
          </div>
        </div>
      </section>

      {/* Wishlist Content */}
      <section className="py-16 bg-secondary/30 min-h-[50vh]">
        <div className="container mx-auto px-4">
          {wishlistProperties.length > 0 ? (
            <>
              <div className="flex items-center justify-between mb-8">
                <p className="text-muted">
                  <span className="text-foreground font-semibold">
                    {wishlistProperties.length}
                  </span>{" "}
                  saved properties
                </p>
                <Button variant="outline" size="sm">
                  <Trash2 className="h-4 w-4 mr-2" />
                  Clear All
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {wishlistProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <Heart className="h-16 w-16 text-muted mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-foreground mb-2">
                Your wishlist is empty
              </h2>
              <p className="text-muted mb-8">
                Start browsing properties and save your favorites here.
              </p>
              <Link to="/properties">
                <Button variant="gold">Browse Properties</Button>
              </Link>
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  );
}
