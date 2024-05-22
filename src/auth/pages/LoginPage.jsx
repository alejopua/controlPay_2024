import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  startGoogleSingIn,
  startLoginWithEmailPassword,
} from "@/store/auth/thunks";
import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { Alert, AlertDescription } from "@/components/ui/alert";
import { FaGoogle } from "react-icons/fa";
import { AlertCircle } from "lucide-react";

// formSchema of form using Zod
const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters." }),
});

export const LoginPage = () => {
  const { status, errorMessage } = useSelector((state) => state.auth);
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
      startLoginWithEmailPassword({
        displayName: data.username,
        email: data.email,
        password: data.password,
      })
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
                  <div>
                    <Alert
                      variant="destructive"
                      className={` ${
                        !!errorMessage ? "" : "hidden"
                      } h-13 py-2 mb-2`}
                    >
                      <AlertDescription className="flex items-center justify-center">
                        <AlertCircle className="h-4 w-4 mr-2" /> {errorMessage}
                      </AlertDescription>
                    </Alert>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      disabled={isAuthenticating}
                      type="submit"
                      className="w-full"
                    >
                      Login
                    </Button>
                    <Button
                      disabled={isAuthenticating}
                      onClick={signInWithGoogle}
                      className="w-full"
                    >
                      <FaGoogle className="mr-1" /> Google
                    </Button>
                  </div>
                </div>
              </form>
            </Form>

            <div className=" text-center text-sm text-gray-600">
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
