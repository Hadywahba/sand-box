'use client';

import EmailField from '@/components/features/auth-fields/email-field';
import SubmitButton from '@/components/features/auth-fields/submit-button';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  ForgotPasswordFormFields,
  forgotschema,
} from '@/lib/schemas/forgot-password';
import { MoveRight } from 'lucide-react';
import { UseForgot } from '../_hooks/use-forgot';

export default function ForgotPasswordForm() {

  // Mutation
  const { error, isPending, forgot } = UseForgot({ redirect: true });

  //Form
  const { register, formState, handleSubmit } =
    useForm<ForgotPasswordFormFields>({
      mode: 'all',
      resolver: zodResolver(forgotschema),
      defaultValues: {
        email: '',
      },
    });

  // onSubmit function used to send data to get OTP
  const onsubmit: SubmitHandler<ForgotPasswordFormFields> = async (data) => {
    forgot(data);
  };

  return (
    <main className="mx-auto flex  w-full flex-col justify-center h-screen lg:h-full gap-3 px-6  md:w-[70%] lg:w-[28.25rem] lg:px-0">
      <div className="pb-6">
        <h1 className="mb-2 font-inter text-2xl sm:text-3xl font-bold text-gray-800">
          Forgot Password
        </h1>
        <p className=" text-sm sm:text-base font-normal text-gray-500">
          Don’t worry, we will help you recover your account.
        </p>
      </div>
      <div>
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

          {/* button */}
          <section>
            <SubmitButton
              label={
                <span className="flex items-center gap-2">
                  Continue <MoveRight size={18} />
                </span>
              }
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
      </div>
    </main>
  );
}
