import { MainLayout } from "@/components/layout";
import { AgentCard } from "@/components/AgentCard";
import { agents } from "@/data/mockData";

export default function Agents() {
  return (
    <MainLayout>
      {/* Page Header */}
      <section className="pt-32 pb-12 bg-primary">
        <div className="container mx-auto px-4">
          <div className="text-center text-primary-foreground">
            <h1 className="hero-title mb-4">Our Agents</h1>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
              Meet our team of dedicated real estate professionals ready to help
              you find your perfect property.
            </p>
          </div>
        </div>
      </section>

      {/* Agents Grid */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {agents.map((agent) => (
              <AgentCard key={agent.id} agent={agent} />
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-title mb-4">Join Our Team</h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto mb-8">
            Are you a passionate real estate professional looking for new
            opportunities? We're always looking for talented agents to join our
            growing team.
          </p>
          <a href="mailto:careers@estatery.com">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-base font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-accent text-accent-foreground hover:bg-gold-dark shadow-gold hover:shadow-xl h-12 px-10">
              Apply Now
            </button>
          </a>
        </div>
      </section>
    </MainLayout>
  );
}
