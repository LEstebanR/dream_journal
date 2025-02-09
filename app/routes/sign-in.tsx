import { json, ActionFunctionArgs } from "@remix-run/node";
import CreateAccountForm from "~/components/forms/create-account";
import Button from "~/components/ui/button";
import { loginUser } from "~/utils/auth";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    const user = await loginUser(email, password);
    console.log(user);
  } catch (error: unknown) {
    return json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 400 }
    );
  }
}

export default function SignInPage() {
  return (
    <div className="w-full max-w-xs mx-auto mt-20 flex flex-col gap-4 items-center">
      <CreateAccountForm data={null} />
      <p>
        Already have an account?
        <Button text>Log In</Button>
      </p>
    </div>
  );
}
