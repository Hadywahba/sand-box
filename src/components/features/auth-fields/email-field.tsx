import ValidationError from '@/components/error/validation-error';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React from 'react';
import {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from 'react-hook-form';
interface EmailFieldProps<
  T extends FieldValues,
> extends React.HTMLAttributes<HTMLInputElement> {
  register: UseFormRegister<T>;
  name: Path<T>;
  errors: FieldErrors<T>;
  label: string;
  placeholder: string;
}

export default function EmailField<T extends FieldValues>({
  register,
  name,
  errors,
  label,
  placeholder,
}: EmailFieldProps<T>) {
  return (
    <>
      <div className="grid w-full items-center gap-3">
        {/* Label */}
        <Label htmlFor="picture" className="font-medium text-gray-800">
          {label}
        </Label>

        {/* Input */}
        <Input {...register(name)} type="email" placeholder={placeholder} />
      </div>

      {/* Error */}
      <div>
        <ValidationError errors={errors} name={name} />
      </div>
    </>
  );
}
