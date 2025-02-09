import { ActionFunctionArgs, json, redirect } from "@remix-run/node";
import { Form, Link, useActionData } from "@remix-run/react";
import FormContainer from "~/components/forms/form-container";
import InputForm from "~/components/forms/input-form";
import Button from "~/components/ui/button";
import { loginUser } from "~/utils/auth";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    const { headers } = await loginUser(request, email, password);
    return redirect("/dashboard", { headers });
  } catch (error) {
    return json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 400 }
    );
  }
}

export default function Login() {
  const actionData = useActionData<{
    user?: { email: string };
    error?: string;
  }>();

  return (
    <FormContainer>
      <Form className="flex flex-col gap-4 p-4" method="post">
        <InputForm label="Email" name="email" type="email" />
        <InputForm label="Password" name="password" type="password" />
        <Button type="submit">Submit</Button>
      </Form>
      {actionData?.error && <p className="text-red-500">{actionData.error}</p>}
      <p className="w-full text-center mb-2">
        Don&apos;t have an account yet?
        <Link to="/sign-up">
          <Button type="button" text>
            Create an account
          </Button>
        </Link>
      </p>
    </FormContainer>
  );
}
