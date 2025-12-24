import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MainLayout } from "@/components/layout";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <MainLayout hideFooter>
      <section className="min-h-screen flex items-center justify-center bg-secondary/30 pt-20 pb-12">
        <div className="w-full max-w-md mx-auto px-4">
          <div className="bg-card rounded-xl p-8 shadow-xl">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-display font-bold text-foreground mb-2">
                Create Account
              </h1>
              <p className="text-muted">Join Estatery today</p>
            </div>

            <form className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">First Name</label>
                  <Input placeholder="John" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Last Name</label>
                  <Input placeholder="Doe" />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted" />
                  <Input type="email" placeholder="you@example.com" className="pl-10" />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="pl-10 pr-10"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-foreground"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <label className="flex items-start gap-2 text-sm">
                <input type="checkbox" className="rounded border-border mt-1" />
                <span className="text-foreground/80">
                  I agree to the{" "}
                  <a href="#" className="text-accent hover:underline">Terms of Service</a> and{" "}
                  <a href="#" className="text-accent hover:underline">Privacy Policy</a>
                </span>
              </label>

              <Button variant="gold" className="w-full" size="lg">Create Account</Button>
            </form>

            <p className="text-center text-sm text-muted mt-6">
              Already have an account?{" "}
              <Link to="/login" className="text-accent hover:underline font-medium">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
