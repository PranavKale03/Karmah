import Link from "next/link";
import { CheckSquare, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border/60 bg-muted/20 pt-16 pb-10">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 md:gap-8">
          
          {/* COLUMN 1 — Brand */}
          <div className="col-span-1 flex flex-col items-start">
            <Link href="/" className="flex items-center gap-2 font-semibold hover:opacity-80 transition-opacity">
              <div className="flex h-7 w-7 items-center justify-center rounded bg-primary/10">
                <CheckSquare className="h-4 w-4 text-primary" />
              </div>
              <span className="text-lg tracking-tight text-foreground">Karmah</span>
            </Link>
            
            <p className="text-sm text-muted-foreground mt-2 max-w-[200px] leading-relaxed">
              A cleaner way to manage your tasks and stay focused every day.
            </p>
            
            <div className="flex items-center gap-1 mt-6">
              <Button variant="ghost" size="icon" className="rounded-full h-9 w-9 text-muted-foreground hover:text-foreground transition-colors" asChild>
                <Link href="#">
                  <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full h-9 w-9 text-muted-foreground hover:text-foreground transition-colors" asChild>
                <Link href="#">
                  <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full h-9 w-9 text-muted-foreground hover:text-foreground transition-colors" asChild>
                <Link href="#">
                  <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"></path></svg>
                </Link>
              </Button>
            </div>
          </div>

          {/* COLUMN 2 — Product */}
          <div className="flex flex-col">
            <h4 className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-4">
              Product
            </h4>
            <div className="flex flex-col gap-2.5">
              <Link href="/#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</Link>
              <Link href="/#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">How it works</Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Changelog</Link>
            </div>
          </div>

          {/* COLUMN 3 — Company */}
          <div className="flex flex-col">
            <h4 className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-4">
              Company
            </h4>
            <div className="flex flex-col gap-2.5">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy policy</Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of service</Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col sm:flex-row justify-between items-center flex-wrap gap-4 border-t border-border/60 mt-12 pt-6">
          <p className="text-xs font-medium text-muted-foreground">
            &copy; {new Date().getFullYear()} Karmah. All rights reserved.
          </p>
          <p className="text-xs font-medium text-muted-foreground flex items-center gap-1.5 flex-wrap justify-center text-center">
            Designed and Developed by Beyond Zero
          </p>
        </div>

      </div>
    </footer>
  );
}
