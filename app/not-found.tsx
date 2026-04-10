import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-3.5rem)] text-center px-4 fade-in animate-in">
      <h1 className="text-6xl font-bold tracking-tight text-foreground mb-4">404</h1>
      <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-4">Page not found</h2>
      <p className="text-muted-foreground mb-8 max-w-sm">
        The page you are looking for doesn't exist or has been securely moved.
      </p>
      <Button asChild className="rounded-full px-8">
        <Link href="/">
          Back to Home
        </Link>
      </Button>
    </div>
  );
}
