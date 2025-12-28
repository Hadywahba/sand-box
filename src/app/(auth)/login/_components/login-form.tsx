'use client';
import EmailField from '@/components/features/auth-fields/email-field';
import PasswordField from '@/components/features/auth-fields/password-field';
import { LoginFormFields, loginschema } from '@/lib/schemas/login.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { UseLogin } from '../_hooks/use-login';
import SubmitButton from '@/components/features/auth-fields/submit-button';

export default function LoginForm() {
  // Mutation
  const { error, isPending, Login } = UseLogin();

  // Form
  const { register, handleSubmit, formState, setError } =
    useForm<LoginFormFields>({
      mode: 'all',
      resolver: zodResolver(loginschema),
      defaultValues: {
        email: '',
        password: '',
      },
    });

  // Function it used to submit login data
  const onsubmit: SubmitHandler<LoginFormFields> = async (data) => {
    Login(data, {
      onError: (error) => {
        setError('root', {
          message: error?.message || 'Login failed, please try again',
        });
      },
    });
  };

  return (
    <main className="mx-auto flex h-screen w-full flex-col justify-center gap-3 px-6 lg:h-full lg:w-[50%] lg:pt-14">
      <h1 className="font-inter pb-6 text-start text-3xl font-bold">Login</h1>
      <form
        onSubmit={handleSubmit(onsubmit)}
        className="flex flex-col justify-center gap-4"
      >
        {/* email section */}
        <section className="w-full">
          <EmailField
            register={register}
            name="email"
            errors={formState.errors}
            label="Email"
            placeholder="enter your email"
          />
        </section>

        {/* password section */}
        <section className="w-full">
          <PasswordField
            register={register}
            name="password"
            errors={formState.errors}
            label="Password"
            placeholder="enter your Password"
          />
        </section>

        <Link
          href={'/forgot-password'}
          className="text-end text-sm font-medium text-blue-600"
        >
          Forgot your password?
        </Link>

        {/* button */}
        <section>
          <SubmitButton
            label="Login"
            message={error}
            loading={formState.isSubmitting}
            disbale={formState.isValid}
            isPending={isPending}
          />
        </section>
      </form>
    </main>
  );
}
