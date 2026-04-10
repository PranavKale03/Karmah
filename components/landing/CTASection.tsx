import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="py-20 md:py-32 px-4 max-w-6xl mx-auto">
      <div className="mx-auto bg-muted/40 border border-border/50 rounded-[2rem] py-20 px-6 md:px-12 text-center backdrop-blur-sm relative overflow-hidden flex flex-col items-center">
        {/* Subtle Decorative Ambience */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none"></div>

        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight relative z-10 mb-6 max-w-3xl">
          Start getting things done.
        </h2>
        <p className="text-lg md:text-xl font-medium text-muted-foreground max-w-lg mx-auto relative z-10 mb-10">
          Join thousands of people using Karmah to clear their head and move forward every single day.
        </p>
        
        <Button size="lg" asChild className="rounded-full px-10 h-14 text-[17px] relative z-10 hover:scale-[1.02] shadow-sm transition-transform duration-200">
          <Link href="/login">Create free account</Link>
        </Button>
        <p className="text-sm font-medium text-muted-foreground mt-5 relative z-10">
          No credit card required
        </p>
      </div>
    </section>
  );
}
