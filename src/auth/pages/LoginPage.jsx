import { Link } from "react-router-dom";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { FaGoogle } from "react-icons/fa";
import { checkingAuthentication, startGoogleSingIn } from "@/store/auth/thunks";
import { useDispatch, useSelector } from "react-redux";
import { useMemo } from "react";

// formSchema of form using Zod
const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters." }),
});

export const LoginPage = () => {
  const { status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const isAuthenticating = useMemo(() => status === "checking", [status]);

  // Config react-hook-form with zodResolver and init values
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      // Defined init values
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    dispatch(
      checkingAuthentication({ email: data.email, password: data.password })
    );
  };

  const signInWithGoogle = () => {
    console.log("Sign in with Google");
    dispatch(startGoogleSingIn());
  };

  return (
    <>
      <div className="container relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
          <div className="absolute inset-0 bg-zinc-900"></div>
          <div className="relative z-20 flex items-center text-lg font-medium">
            Control Pay Inc
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                “Ahora es mucho mas facil tener el control de mis pagos con
                Control Pay”
              </p>
              <footer className="text-sm">Alejandro Ramírez</footer>
            </blockquote>
          </div>
        </div>

        <div className="flex items-center justify-center py-12">
          <div className="mx-auto grid w-[350px] gap-5">
            <div className="grid gap-2 text-center">
              <h1 className="text-3xl font-bold">Login</h1>
            </div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="grid gap-2">
                  <div className="grid gap-2 mb-2">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="you@example.com"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage>
                            {form.formState.errors.email?.message}
                          </FormMessage>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <div className="flex items-center">
                            <FormLabel>Password</FormLabel>
                            <Link
                              to="/forgot-password"
                              className="ml-auto inline-block text-sm underline"
                            >
                              Forgot your password?
                            </Link>
                          </div>
                          <FormControl>
                            <Input
                              type="password"
                              placeholder="******"
                              {...field}
                            />
                          </FormControl>

                          <FormMessage>
                            {form.formState.errors.password?.message}
                          </FormMessage>
                        </FormItem>
                      )}
                    />
                  </div>
                  <Button
                    disabled={isAuthenticating}
                    type="submit"
                    className="w-full"
                  >
                    Login
                  </Button>
                </div>
              </form>
            </Form>

            <div className="grid gap-3">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t"></span>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>
              </div>
              <Button
                disabled={isAuthenticating}
                onClick={signInWithGoogle}
                variant="outline"
                className="w-full"
              >
                <FaGoogle className="mr-1" /> Google
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link to="/auth/register" className="underline">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
