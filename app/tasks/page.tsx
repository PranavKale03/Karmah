"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CreateTaskDialog } from "@/components/tasks/CreateTaskDialog";
import { TaskFilters } from "@/components/tasks/TaskFilters";
import { TaskList } from "@/components/tasks/TaskList";
import { TASK_STATUS } from "@/lib/constants";
import { useTasks } from "@/hooks/useTasks";

export default function TasksPage() {
  const [activeFilter, setActiveFilter] = useState<string>(TASK_STATUS.ALL);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Used for fetching total task count across the whole system (or current filter)
  const { data: tasks } = useTasks(activeFilter);
  const taskCount = tasks?.length || 0;

  return (
    <main className="container mx-auto px-4 py-12 md:py-20 max-w-4xl">
      <div className="flex flex-col gap-8">
        
        {/* Header Row */}
        <div className="flex items-center justify-between">
          <div className="flex items-end gap-3 rounded-lg">
            <h1 className="text-3xl font-bold tracking-tight text-foreground">My Tasks</h1>
            <span className="mb-[5px] text-sm font-medium text-muted-foreground">
              {taskCount} {taskCount === 1 ? 'task' : 'tasks'}
            </span>
          </div>
          
          <Button onClick={() => setIsDialogOpen(true)} className="gap-2 rounded-full shadow-sm">
            <Plus className="h-4 w-4" />
            <span className="hidden sm:inline">New Task</span>
          </Button>
        </div>

        {/* Filters Block */}
        <TaskFilters activeFilter={activeFilter} onFilterChange={setActiveFilter} />

        {/* List Content */}
        <TaskList activeFilter={activeFilter} />

        <CreateTaskDialog 
          open={isDialogOpen} 
          onOpenChange={setIsDialogOpen} 
        />

      </div>
    </main>
  );
}
