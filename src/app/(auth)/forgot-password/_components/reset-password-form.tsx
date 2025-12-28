'use client';
import SubmitButton from '@/components/features/auth-fields/submit-button';
import React from 'react';
import PasswordField from '@/components/features/auth-fields/password-field';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  ResetPasswordFormFields,
  resetschema,
} from '@/lib/schemas/forgot-password';

import { UseResetPassword } from '../_hooks/use-reset';
import { ResetPasswordPayload } from '../_types/reset';
import { useSearchParams } from 'next/navigation';

export default function ResetPasswordForm() {
  const searchParams = useSearchParams();
  // Mutation
  const { reset, error, isPending } = UseResetPassword();
  const token = searchParams.get('token') || 'valid';

  //Form
  const { register, formState, handleSubmit } =
    useForm<ResetPasswordFormFields>({
      mode: 'all',
      resolver: zodResolver(resetschema),
      defaultValues: {
        password: '',
      },
    });

  // Variables

  // Function
  const onsubmit: SubmitHandler<ResetPasswordFormFields> = async (data) => {
    const payload: ResetPasswordPayload = {
      password: data.password,
      token: token ?? undefined,
    };
    reset(payload);
  };
  return (
    <main className="mx-auto flex h-screen w-full flex-col justify-center gap-3 px-6 md:w-[70%] lg:h-full lg:w-[28.25rem] lg:px-0">
      {/* title section */}
      <div className="pb-6">
        <h1 className="font-inter mb-2 text-xl font-bold text-gray-800 sm:text-3xl">
          Create a New Password
        </h1>
        <p className="text-sm font-normal text-gray-500 sm:text-base">
          Create a new strong password for your account.
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onsubmit)}
        className="flex flex-col justify-center gap-4"
      >
        {/* New password section */}
        <section className="w-full">
          <PasswordField
            register={register}
            name="password"
            errors={formState.errors}
            label="New Password"
            placeholder="enter your Password"
          />
        </section>

        {/* button */}
        <section>
          <SubmitButton
            label="Reset Password"
            message={error}
            loading={formState.isSubmitting}
            disbale={formState.isValid}
            isPending={isPending}
            text="Don’t have an account?"
            textLink="Create yours"
            link="/register"
          />
        </section>
      </form>
    </main>
  );
}
