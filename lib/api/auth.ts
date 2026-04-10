import { apiClient } from './client';
import { AuthResponse, User } from '../types';

const mapUser = (data: any): User => ({
  id: data._id || data.id,
  name: data.name,
  email: data.email,
});

export const login = async (data: Record<string, string>): Promise<AuthResponse> => {
  const res = await apiClient.post<{ success: boolean; data: any }>('/auth/login', data);
  const payload = res.data.data;
  return {
    token: payload.token,
    user: mapUser(payload),
  };
};

export const signup = async (data: Record<string, string>): Promise<AuthResponse> => {
  const res = await apiClient.post<{ success: boolean; data: any }>('/auth/register', data);
  const payload = res.data.data;
  return {
    token: payload.token,
    user: mapUser(payload),
  };
};

export const getMe = async (): Promise<User> => {
  const res = await apiClient.get<{ success: boolean; data: any }>('/auth/me');
  return mapUser(res.data.data);
};
