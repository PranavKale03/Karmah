import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { 
  getTasks, 
  getTaskById, 
  createTask, 
  updateTask, 
  deleteTask, 
  updateTaskStatus 
} from '../lib/api/tasks';
import { Task, CreateTaskPayload } from '../lib/types';

export function useTasks(status?: string) {
  return useQuery({
    queryKey: ['tasks', status],
    queryFn: () => getTasks(status),
  });
}

export function useTask(id: string) {
  return useQuery({
    queryKey: ['task', id],
    queryFn: () => getTaskById(id),
    enabled: !!id,
  });
}

export function useCreateTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateTaskPayload) => createTask(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
  });
}

export function useUpdateTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<Task> }) => updateTask(id, data),
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
      queryClient.invalidateQueries({ queryKey: ['task', variables.id] });
    },
  });
}

export function useDeleteTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteTask(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
  });
}

export function useUpdateTaskStatus() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, status }: { id: string; status: string }) => updateTaskStatus(id, status),
    onMutate: async ({ id, status }) => {
      // Cancel pending refetches to avoid sync conflicts
      await queryClient.cancelQueries({ queryKey: ['tasks'] });

      // Snapshot the previous state (to allow rollback on error)
      const previousTasks = queryClient.getQueryData(['tasks']);

      // Perform optimistic update. We use setQueriesData to update any variants of ['tasks']
      queryClient.setQueriesData({ queryKey: ['tasks'] }, (oldData: Task[] | undefined) => {
        if (!oldData) return [];
        return oldData.map((task) => 
          task.id === id ? { ...task, status: status as Task['status'] } : task
        );
      });

      return { previousTasks };
    },
    onError: (err, variables, context) => {
      // Rollback to previous state using the context snapshotted in onMutate
      if (context?.previousTasks) {
        queryClient.setQueriesData({ queryKey: ['tasks'] }, context.previousTasks);
      }
    },
    onSettled: () => {
      // Always sync with the server afterward
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
  });
}
