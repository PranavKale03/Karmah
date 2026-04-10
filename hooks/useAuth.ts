import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { login, signup, getMe } from '../lib/api/auth';
import { saveAuth, clearAuth, isAuthenticated } from '../lib/auth';

export function useMe() {
  return useQuery({
    queryKey: ['me'],
    queryFn: getMe,
    enabled: isAuthenticated(),
    retry: false,
  });
}

export function useLogin() {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      saveAuth(data.token, data.user);
      queryClient.invalidateQueries({ queryKey: ['me'] });
      router.push('/tasks');
    },
  });
}

export function useSignup() {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: signup,
    onSuccess: (data) => {
      saveAuth(data.token, data.user);
      queryClient.invalidateQueries({ queryKey: ['me'] });
      router.push('/tasks');
    },
  });
}

export function useLogout() {
  const queryClient = useQueryClient();
  const router = useRouter();

  return () => {
    clearAuth();
    queryClient.clear();
    router.push('/');
  };
}
