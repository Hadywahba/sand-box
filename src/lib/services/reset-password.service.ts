import { ResetPasswordPayload } from '@/app/(auth)/forgot-password/_types/reset';

export const ResetPassword = async (data: ResetPasswordPayload) => {
  const API_URL =
    process.env.NEXT_PUBLIC_API ||
    (process.env.NODE_ENV === 'production'
      ? 'https://sand-box-mu.vercel.app/api'
      : 'http://localhost:3000/api');

  const response = await fetch(`${API_URL}/auth/reset-password`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-type': 'application/json' },
  });
  const payload: ApiResetResponse = await response.json();

  return payload;
};
