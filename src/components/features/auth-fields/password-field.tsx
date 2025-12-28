'use client';
import React, { useState } from 'react';
import ValidationError from '@/components/error/validation-error';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { EyeOff } from 'lucide-react';
import { Eye } from 'lucide-react';
import {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from 'react-hook-form';
interface passwordFieldProps<T extends FieldValues>
  extends React.HTMLAttributes<HTMLInputElement> {
  register: UseFormRegister<T>;
  name: Path<T>;
  errors: FieldErrors<T>;
  label: string;
  placeholder: string;
}
export default function PasswordField<T extends FieldValues>({
  register,
  name,
  errors,
  label,
  placeholder,
}: passwordFieldProps<T>) {
  // State
  const [toggle, settoggle] = useState<boolean>(false);

  // Function
  const HandleToggle = () => {
    settoggle(!toggle);
  };
  return (
    <>
      <div className="grid w-full items-center gap-3">
        {/* Label */}
        <div>
          <Label htmlFor="picture" className="font-medium text-gray-800">
            {label}
          </Label>
        </div>

        {/* Input */}
        <div className="relative">
          <Input
            {...register(name)}
            type={`${toggle ? 'password' : 'text'}`}
            placeholder={placeholder}
          />
          <div>
            <button
              onClick={HandleToggle}
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              {toggle ? (
                <EyeOff className="h-[1.1rem] w-[1.1rem] text-gray-400" />
              ) : (
                <Eye className="h-[1.1rem] w-[1.1rem] text-gray-400" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Error */}
      <div>
        <ValidationError errors={errors} name={name} />
      </div>
    </>
  );
}
