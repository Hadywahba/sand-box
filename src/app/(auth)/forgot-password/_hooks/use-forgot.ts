import { ForgotPasswordFormFields } from '@/lib/schemas/forgot-password';
import { forgotPassword } from '@/lib/services/forgot-password.service';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export const UseForgot = ({ redirect = true }) => {
  // Navigation
  const router = useRouter();
  const {
    mutate: forgot,
    isPending,
    error,
  } = useMutation({
    mutationFn: async (data: ForgotPasswordFormFields) => {
      const payload = await forgotPassword(data);

      if (!payload.success) {
        throw new Error(payload.message);
      }

      return payload;
    },

    onSuccess: (_payload, variables) => {
      // only redirect when allowed
      if (redirect) {
        router.push(`/forgot-password?step=2&email=${variables?.email}`);
      }
    },
  });
  return {
    forgot,
    isPending,
    error,
  };
};
