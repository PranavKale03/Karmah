import { cn } from "@/lib/utils";
import { TASK_STATUS, TASK_STATUS_LABELS } from "@/lib/constants";

interface TaskFiltersProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export function TaskFilters({ activeFilter, onFilterChange }: TaskFiltersProps) {
  const filters = [
    { id: TASK_STATUS.ALL, label: TASK_STATUS_LABELS[TASK_STATUS.ALL], dotClass: 'bg-muted-foreground/30' },
    { id: TASK_STATUS.PENDING, label: TASK_STATUS_LABELS[TASK_STATUS.PENDING], dotClass: 'bg-yellow-500' },
    { id: TASK_STATUS.IN_PROGRESS, label: TASK_STATUS_LABELS[TASK_STATUS.IN_PROGRESS], dotClass: 'bg-blue-500' },
    { id: TASK_STATUS.COMPLETED, label: TASK_STATUS_LABELS[TASK_STATUS.COMPLETED], dotClass: 'bg-green-500' },
  ];

  return (
    <div className="flex items-center overflow-x-auto no-scrollbar gap-2 p-1 bg-secondary/30 rounded-full w-fit max-w-full mt-2 border border-border/50">
      {filters.map((filter) => {
        const isActive = activeFilter === filter.id;
        return (
          <button
            key={filter.id}
            onClick={() => onFilterChange(filter.id)}
            className={cn(
              "flex items-center shrink-0 gap-2 rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200",
              isActive 
                ? "bg-background text-foreground shadow-sm ring-1 ring-border/50" 
                : "bg-transparent text-muted-foreground hover:text-foreground"
            )}
          >
            <span className={cn("h-2 w-2 rounded-full", filter.dotClass)} />
            <span className="whitespace-nowrap">{filter.label}</span>
          </button>
        );
      })}
    </div>
  );
}
