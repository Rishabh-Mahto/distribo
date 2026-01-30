import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return(
         <div className="text-center space-y-6 mt-10">
            <div className="inline-block px-4 py-2 text-accent rounded-lg text-md font-bold bg-gray-100 text-black">
              ✨ The Future of Affiliate Distribution
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground text-balance">
              Distribute & Scale Your Affiliate Network
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Manage your entire affiliate ecosystem with real-time tracking, seamless link generation, and powerful analytics.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" asChild>
                <Link href="/signup">
                  Get Started <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#flow">See How It Works</Link>
              </Button>
            </div>
          </div>
    )
}