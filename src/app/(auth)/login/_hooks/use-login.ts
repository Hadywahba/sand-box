import { LoginFormFields } from '@/lib/schemas/login.schema';
import { useMutation } from '@tanstack/react-query';
import { signIn } from 'next-auth/react';

export const UseLogin = () => {
  // Mutation
  const {
    mutate: Login,
    isPending,
    error,
  } = useMutation({
    mutationFn: async (data: LoginFormFields) => {
      const payload = await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (payload?.ok) {
        const callbackUrl =
          new URLSearchParams(location.search).get('callbackUrl') || '/';
        return (location.href = callbackUrl);
      }
      if (payload?.error) {
        throw new Error('Invalid email or password');
      }

      return payload;
    },
  });
  return {
    Login,
    isPending,
    error,
  };
};
