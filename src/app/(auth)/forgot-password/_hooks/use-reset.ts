import { ResetPasswordFormFields } from '@/lib/schemas/forgot-password';
import { ResetPassword } from '@/lib/services/reset-password.service';
import { useMutation } from '@tanstack/react-query';

import { useRouter } from 'next/navigation';

export const UseResetPassword = () => {
  // Navigation
  const router = useRouter();

  // Mutation
  const {
    mutate: reset,
    error,
    isPending,
  } = useMutation({
    mutationFn: async (data: ResetPasswordFormFields) => {
      const payload = await ResetPassword(data);
      if (!payload.success) {
        throw new Error(payload.message);
      }

      return payload;
    },
    onSuccess: () => {
      router.push(`/login`);
    },
  });
  return {
    reset,
    error,
    isPending,
  };
};
