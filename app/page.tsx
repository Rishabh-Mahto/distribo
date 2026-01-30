import AffiliateFlow from "@/components/landing/affiliate-flow";
import Hero from "@/components/landing/hero";
import Topbar from "@/components/landing/topbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      <Topbar />
      <Hero />
      <AffiliateFlow />
       {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-primary text-primary-foreground mt-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold">Ready to Scale Your Affiliate Network?</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Start building your affiliate ecosystem with Distribo today.
          </p>
          <Button size="lg" variant="outline" asChild className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent">
            <Link href="/signup">Create Your Account</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
