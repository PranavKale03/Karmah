import { apiClient } from './client';
import { AuthResponse, User } from '../types';
import { getUser } from '../auth';

// Mapping utility for database translation
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
  // Gracefully fulfill isolated checks off internal state matching
  const localUser = getUser();
  if (localUser) {
    return Promise.resolve(localUser);
  }
  return Promise.reject(new Error("Local User Session Missing"));
};
