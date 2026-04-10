"use client";

import { ClipboardList } from "lucide-react";
import { useTasks } from "@/hooks/useTasks";
import { TaskCard } from "./TaskCard";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { TASK_STATUS } from "@/lib/constants";

interface TaskListProps {
  activeFilter: string;
}

export function TaskList({ activeFilter }: TaskListProps) {
  const filterParam = activeFilter === TASK_STATUS.ALL ? undefined : activeFilter;
  const { data: tasks, isLoading, error, refetch } = useTasks(filterParam);

  if (isLoading) {
    return (
      <div className="flex flex-col gap-[12px] mt-6">
        {[1, 2, 3, 4].map((i) => (
          <Skeleton key={i} className="h-[76px] w-full rounded-xl" />
        ))}
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center animate-in fade-in">
        <p className="text-sm text-muted-foreground mb-4">
          Failed to load tasks. Please try again.
        </p>
        <Button variant="outline" size="sm" onClick={() => refetch()}>
          Retry
        </Button>
      </div>
    );
  }

  if (!tasks?.length) {
    const isFiltered = activeFilter !== TASK_STATUS.ALL;
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center animate-in fade-in slide-in-from-bottom-2 duration-500">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary/50 mb-4">
          <ClipboardList className="h-8 w-8 text-muted-foreground/50" />
        </div>
        <h3 className="text-lg font-medium text-foreground">No tasks yet</h3>
        <p className="text-sm text-muted-foreground mt-1 max-w-[300px]">
          {isFiltered 
            ? "No tasks match this specific status filter." 
            : "You don't have any tasks right now. Create one to get started."}
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-[12px] mt-6">
      {tasks.map((task, i) => (
        <div 
          key={task.id} 
          className="animate-in fade-in slide-in-from-bottom-1 fill-mode-both duration-500"
          style={{ animationDelay: `${i * 50}ms` }}
        >
          <TaskCard task={task} />
        </div>
      ))}
    </div>
  );
}
