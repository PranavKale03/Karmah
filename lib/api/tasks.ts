import { apiClient } from './client';
import { Task, CreateTaskPayload } from '../types';

const mapTask = (t: any): Task => ({
  ...t,
  id: t._id || t.id,
});

export const getTasks = async (status?: string): Promise<Task[]> => {
  const response = await apiClient.get<{ success: boolean; data: any[] }>('/tasks');
  let tasks = response.data.data.map(mapTask);
  
  if (status && status !== 'all') {
    tasks = tasks.filter(t => t.status === status);
  }
  
  return tasks;
};

export const getTaskById = async (id: string): Promise<Task> => {
  const response = await apiClient.get<{ success: boolean; data: any }>(`/tasks/${id}`);
  return mapTask(response.data.data);
};

export const createTask = async (data: CreateTaskPayload): Promise<Task> => {
  const response = await apiClient.post<{ success: boolean; data: any }>('/tasks', data);
  return mapTask(response.data.data);
};

export const updateTask = async (id: string, data: Partial<Task>): Promise<Task> => {
  const response = await apiClient.patch<{ success: boolean; data: any }>(`/tasks/${id}`, data);
  return mapTask(response.data.data);
};

export const deleteTask = async (id: string): Promise<void> => {
  await apiClient.delete(`/tasks/${id}`);
};

export const updateTaskStatus = async (id: string, status: string): Promise<Task> => {
  // Overloads patch controller natively handling internal JSON state modifications
  const response = await apiClient.patch<{ success: boolean; data: any }>(`/tasks/${id}`, { status });
  return mapTask(response.data.data);
};
