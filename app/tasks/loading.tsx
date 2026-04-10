import { Skeleton } from "@/components/ui/skeleton";

export default function TasksLoading() {
  return (
    <div className="max-w-4xl mx-auto py-8 sm:py-12 px-4 w-full animate-in fade-in duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <Skeleton className="h-9 w-40 mb-2 rounded-lg" />
          <Skeleton className="h-4 w-24 rounded-full" />
        </div>
        <Skeleton className="h-10 w-[120px] rounded-full" />
      </div>

      <div className="flex items-center gap-2 mb-8 overflow-hidden">
        {[1, 2, 3, 4].map((i) => (
          <Skeleton key={i} className="h-9 w-[100px] rounded-full shrink-0" />
        ))}
      </div>

      <div className="flex flex-col gap-[12px] mt-6">
        {[1, 2, 3, 4, 5].map((i) => (
          <Skeleton key={i} className="h-[76px] w-full rounded-xl" />
        ))}
      </div>
    </div>
  );
}
