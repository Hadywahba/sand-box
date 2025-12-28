import { ForgotPasswordFormFields } from '../schemas/forgot-password';

export const forgotPassword = async (data: ForgotPasswordFormFields) => {
  const API_URL =
    process.env.NEXT_PUBLIC_API ||
    (process.env.NODE_ENV === 'production'
      ? 'https://sand-box-mu.vercel.app/api'
      : 'http://localhost:3000/api');
  const response = await fetch(`${API_URL}/auth/forgot-password`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-type': 'application/json' },
  });
  const payload: ApiForgotResponse = await response.json();

  return payload;
};
