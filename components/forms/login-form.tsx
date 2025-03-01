"use client";

import { FormControl } from "@/components/ui/form";
import { FormLabel } from "@/components/ui/form";
import { FormItem } from "@/components/ui/form";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

type FormValues = z.infer<typeof formSchema>;

export function LoginForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
    // Here you would handle login/signup
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 w-full max-w-sm"
      >
        <FormItem>
          <FormLabel>Email</FormLabel>
          <FormControl>
            <Input type="email" {...form.register("email")} />
          </FormControl>
        </FormItem>
        <FormItem>
          <FormLabel>Password</FormLabel>
          <FormControl>
            <Input type="password" {...form.register("password")} />
          </FormControl>
        </FormItem>
        <FormItem>
          <Button type="submit" className="w-full">
            Log in
          </Button>
          <Link href="/sign-in">
            <Button type="button" variant="outline" className="w-full mt-2">
              Sign up
            </Button>
          </Link>
        </FormItem>
      </form>
    </Form>
  );
}
