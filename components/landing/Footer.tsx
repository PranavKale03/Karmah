import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border/60 bg-muted/20 pt-16 pb-10">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Main Content Area */}
        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-8">
          
          {/* LEFT: Brand */}
          <div className="flex flex-col items-start">
            <Link href="/" className="flex items-center gap-2 font-semibold hover:opacity-80 transition-opacity">
              <Image src="/Logo.png" alt="Karmah Logo" width={42} height={42} className="rounded-lg border" />
              <span className="text-xl tracking-tight text-foreground font-extrabold">Karmah</span>
            </Link>
            
            <p className="text-sm text-muted-foreground mt-2 max-w-[200px] leading-relaxed">
              A cleaner way to manage your tasks and stay focused every day.
            </p>
          </div>

          {/* RIGHT: Links Group */}
          <div className="grid grid-cols-2 gap-12 sm:gap-24">
            {/* COLUMN 1 — Product */}
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

            {/* COLUMN 2 — Company */}
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

        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col sm:flex-row justify-between items-center flex-wrap gap-4 border-t border-border/60 mt-12 pt-6">
          <p className="text-xs font-medium text-muted-foreground">
            &copy; {new Date().getFullYear()} Karmah Inc. All rights reserved.
          </p>
          <p className="text-xs font-medium text-muted-foreground flex items-center gap-1.5 flex-wrap justify-center text-center">
            Designed and Developed by Beyond Zero
          </p>
        </div>

      </div>
    </footer>
  );
}
