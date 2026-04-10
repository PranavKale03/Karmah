import { Loader2 } from "lucide-react";

export default function RootLoading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-3.5rem)] w-full animate-in fade-in duration-500">
      <Loader2 className="h-8 w-8 animate-spin text-muted-foreground/40 mb-4" />
      <p className="text-sm text-muted-foreground/60 tracking-wider">LOADING</p>
    </div>
  );
}
