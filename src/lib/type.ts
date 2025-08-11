import { z } from "zod";

export type FormState =
  | {
      error?: {
        email?: string[];
        password?: string[];
      };
      message?: string;
      success?: boolean;
      session?: Session;
    }
  | undefined;

export const LoginFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email." }),
  password: z.string().min(1, {
    message: "Password field must not be empty.",
  }),
});

export type Session = {
  user: {
    id: string;
    name: string;
    email: string;
  };
  access_token: string;
  refresh_token: string;
};
