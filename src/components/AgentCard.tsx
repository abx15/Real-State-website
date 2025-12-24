import { Link } from "react-router-dom";
import { Phone, Mail, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Agent } from "@/data/mockData";

interface AgentCardProps {
  agent: Agent;
}

export function AgentCard({ agent }: AgentCardProps) {
  return (
    <div className="property-card group p-6 text-center">
      {/* Avatar */}
      <div className="relative w-24 h-24 mx-auto mb-4">
        <img
          src={agent.avatar}
          alt={agent.name}
          className="w-full h-full rounded-full object-cover border-4 border-accent/20"
        />
        <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-accent flex items-center justify-center">
          <Star className="h-4 w-4 text-accent-foreground fill-current" />
        </div>
      </div>

      {/* Info */}
      <h3 className="card-title text-foreground mb-1">{agent.name}</h3>
      <p className="text-sm text-muted mb-4">{agent.title}</p>

      {/* Stats */}
      <div className="flex justify-center gap-6 mb-6 text-sm">
        <div>
          <p className="font-semibold text-foreground">{agent.listings}</p>
          <p className="text-muted">Listings</p>
        </div>
        <div className="border-l border-border" />
        <div>
          <p className="font-semibold text-foreground">{agent.experience}+</p>
          <p className="text-muted">Years</p>
        </div>
        <div className="border-l border-border" />
        <div>
          <p className="font-semibold text-foreground">{agent.rating}</p>
          <p className="text-muted">Rating</p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <Button variant="navyOutline" size="sm" className="flex-1" asChild>
          <a href={`tel:${agent.phone}`}>
            <Phone className="h-4 w-4 mr-1" />
            Call
          </a>
        </Button>
        <Button variant="gold" size="sm" className="flex-1" asChild>
          <Link to={`/agents/${agent.id}`}>
            View Profile
          </Link>
        </Button>
      </div>
    </div>
  );
}
