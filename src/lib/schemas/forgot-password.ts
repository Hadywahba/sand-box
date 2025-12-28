import z from 'zod';
import { loginschema } from './login.schema';

// Forget Password schema
export const forgotschema = loginschema.pick({ email: true });

// Forgot Password Form Fields
export type ForgotPasswordFormFields = z.infer<typeof forgotschema>;

export const resetschema = loginschema.pick({ password: true });

// Reset Password Form Fields
export type ResetPasswordFormFields = z.infer<typeof resetschema>;
