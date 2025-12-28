import React from 'react';
import ForgotPasswordForm from './_components/forgot-password-form';
import ResetPasswordForm from './_components/reset-password-form';
interface PageProps {
  searchParams: { step?: string };
}

export default function page({ searchParams }: PageProps) {
  // searchParams used to navigate between Forgot Password steps
  const step = Number(searchParams.step) || 1;

  return (
    <div>
      {step === 1 && <ForgotPasswordForm />}
      {step === 2 && <ResetPasswordForm />}
    </div>
  );
}
