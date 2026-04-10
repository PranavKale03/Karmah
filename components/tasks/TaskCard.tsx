import { useState } from "react";
import { MoreHorizontal, Calendar, Trash, Edit2 } from "lucide-react";
import { Task } from "@/lib/types";
import { TASK_STATUS, TASK_STATUS_LABELS } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useUpdateTaskStatus, useDeleteTask } from "@/hooks/useTasks";
import { cn } from "@/lib/utils";
import { EditTaskDialog } from "./EditTaskDialog";

interface TaskCardProps {
  task: Task;
}

export function TaskCard({ task }: TaskCardProps) {
  const { mutate: updateStatus } = useUpdateTaskStatus();
  const { mutate: deleteTask } = useDeleteTask();
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  const isCompleted = task.status === TASK_STATUS.COMPLETED;

  const getStatusBadgeClasses = (status: string) => {
    switch (status) {
      case TASK_STATUS.PENDING:
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400 hover:bg-yellow-100/80 dark:hover:bg-yellow-900/50 border-transparent border-none";
      case TASK_STATUS.IN_PROGRESS:
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 hover:bg-blue-100/80 dark:hover:bg-blue-900/50 border-transparent border-none";
      case TASK_STATUS.COMPLETED:
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 hover:bg-green-100/80 dark:hover:bg-green-900/50 border-transparent border-none";
      default:
        return "";
    }
  };

  const getStatusDotColor = (status: string) => {
    switch (status) {
      case TASK_STATUS.PENDING:
        return "bg-yellow-500";
      case TASK_STATUS.IN_PROGRESS:
        return "bg-blue-500";
      case TASK_STATUS.COMPLETED:
        return "bg-green-500";
      default:
        return "bg-muted-foreground";
    }
  };

  return (
    <div className={cn(
      "flex items-center justify-between rounded-xl border bg-card p-4 sm:px-5 transition-colors hover:bg-secondary/40",
      isCompleted && "opacity-60"
    )}>
      <div className={cn("flex gap-4 overflow-hidden", (task.description || task.dueDate) ? "items-start" : "items-center")}>
        <div className={cn("shrink-0", (task.description || task.dueDate) && "mt-1.5")}>
          <span className={cn("inline-block h-2.5 w-2.5 rounded-full", getStatusDotColor(task.status))} />
        </div>
        <div className="flex flex-col min-w-0">
          <h3 className={cn(
            "truncate font-medium leading-none",
            (task.description || task.dueDate) && "mb-1.5",
            isCompleted && "line-through text-muted-foreground text-opacity-80"
          )}>
            {task.title}
          </h3>
          
          {(task.description || task.dueDate) && (
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3 text-sm text-muted-foreground">
              {task.description && (
                <p className="truncate max-w-[280px] md:max-w-[400px]">{task.description}</p>
              )}
              {task.dueDate && (
                <div className="flex items-center gap-1 shrink-0">
                  <Calendar className="h-3 w-3" />
                  <span>
                    {new Date(task.dueDate).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric"
                    })}
                  </span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center gap-3 shrink-0 ml-4">
        <Badge className={cn("hidden sm:inline-flex rounded-full font-medium shadow-none", getStatusBadgeClasses(task.status))}>
          {TASK_STATUS_LABELS[task.status as keyof typeof TASK_STATUS_LABELS] || task.status}
        </Badge>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[180px]">
            <DropdownMenuItem onClick={() => setIsEditDialogOpen(true)}>
              <Edit2 className="mr-2 h-4 w-4" />
              Edit Task
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => updateStatus({ id: task.id, status: TASK_STATUS.PENDING })}>
              Mark as Pending
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => updateStatus({ id: task.id, status: TASK_STATUS.IN_PROGRESS })}>
              Mark as In Progress
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => updateStatus({ id: task.id, status: TASK_STATUS.COMPLETED })}>
              Mark as Completed
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem 
              onClick={() => deleteTask(task.id)}
              className="text-destructive focus:text-destructive"
            >
              <Trash className="mr-2 h-4 w-4" />
              Delete Task
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <EditTaskDialog 
          task={task} 
          open={isEditDialogOpen} 
          onOpenChange={setIsEditDialogOpen} 
        />
      </div>
    </div>
  );
}
