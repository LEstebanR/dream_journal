import { Form } from "@remix-run/react";
import { ActionFunctionArgs, json, redirect } from "@remix-run/server-runtime";
import FormContainer from "~/components/forms/form-container";
import InputForm from "~/components/forms/input-form";
import Button from "~/components/ui/button";
import { signInUser } from "~/utils/auth";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    const headers = await signInUser(email, password, name);
    return headers;
  } catch (error) {
    return json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 400 }
    );
  }
}

export default function SignInPage() {
  return (
    <FormContainer>
      <Form className="flex flex-col gap-4  p-4" method="post">
        <InputForm label="Name" name="name" />
        <InputForm label="Email" name="email" type="email" />
        <InputForm label="Password" name="password" type="password" />
        <Button type="submit">Submit</Button>
      </Form>
    </FormContainer>
  );
}
