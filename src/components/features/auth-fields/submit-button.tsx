import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import SubmitError from '@/components/error/submit-error';

interface SubmitButtonProps {
  label: React.ReactNode;
  message: Error | null;
  loading?: boolean;
  disbale?: boolean;
  isPending?: boolean;
  text?: string;
  textLink?: string;
  link?: string;
}
export default function SubmitButton({
  label,
  message,
  loading,
  disbale,
  isPending,
  text,
  textLink,
  link,
}: SubmitButtonProps) {
  return (
    <div className="flex flex-col gap-6 pt-4">
      {/* Error */}
      <SubmitError errors={message} />

      {/* Button */}
      <div className="flex w-full flex-col items-center justify-center gap-9">
        <Button
          variant="default"
          className="w-full"
          disabled={isPending || (!disbale && loading)}
        >
          {isPending ? 'Loading...' : label}
        </Button>

        <p className="text-xs font-medium text-gray-500 sm:text-sm">
          {text}
          <Link
            href={String(link)}
            className="pl-2 text-blue-600 hover:text-blue-700"
          >
            {textLink}
          </Link>
        </p>
      </div>
    </div>
  );
}
