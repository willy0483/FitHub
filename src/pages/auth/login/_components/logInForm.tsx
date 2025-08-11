import { useActionState } from "react";
import { login } from "../../../../lib/auth";
import { EyeIcon, EyeOffIcon, LockIcon, MailIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/lib/utils";
import SubmitButton from "@/components/submitButton";

export const LoginForm = () => {
  const [state, action] = useActionState(login, undefined);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { createSession } = useAuth();

  useEffect(() => {
    if (state?.success && state.session) {
      createSession(state.session);
      navigate("/home");
    }
  }, [state?.success, navigate, state?.session, createSession]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const errorMessage =
    state?.message || state?.error?.email || state?.error?.password;

  return (
    <form
      action={action}
      className="w-full h-100 flex flex-col justify-center max-w-xs space-y-4 text-black"
    >
      {errorMessage && (
        <p className="text-sm text-red-500 text-center">{errorMessage}</p>
      )}

      <div className="relative flex items-center gap-2 rounded-md border border-gray-300 px-3 py-2 focus-within:ring-2 focus-within:ring-primary">
        <MailIcon className="h-5 w-5 text-gray-500" />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          className="flex-1 border-none outline-0 border-0 bg-transparent focus:ring-0 p-0"
        />
      </div>

      <div className="relative flex items-center gap-2 rounded-md border border-gray-300 px-3 py-2 focus-within:ring-2 focus-within:ring-primary">
        <LockIcon className="h-5 w-5 text-gray-500" />
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          id="password"
          name="password"
          className="flex-1 border-none outline-0 bg-transparent focus:ring-0 p-0"
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="text-gray-500 hover:text-gray-700"
        >
          {showPassword ? (
            <EyeOffIcon className="h-5 w-5" />
          ) : (
            <EyeIcon className="h-5 w-5" />
          )}
        </button>
      </div>

      <SubmitButton>Login In</SubmitButton>

      <div className="flex justify-center text-sm gap-1">
        <p className="text-gray-600">Don&apos;t have an account?</p>
        <a
          className="font-medium text-primary hover:underline"
          href="/auth/signup"
        >
          Sign Up
        </a>
      </div>
    </form>
  );
};
