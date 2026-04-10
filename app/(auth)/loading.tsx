import { Loader2 } from "lucide-react";

export default function AuthLoading() {
  return (
    <div className="w-full flex flex-col items-center justify-center space-y-4 py-24 animate-in fade-in duration-500">
      <Loader2 className="h-8 w-8 animate-spin text-primary/70" />
      <span className="text-sm text-muted-foreground/80 animate-pulse">Authenticating securely...</span>
    </div>
  );
}
