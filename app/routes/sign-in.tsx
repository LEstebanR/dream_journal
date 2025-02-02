import { json, redirect, ActionFunctionArgs } from "@remix-run/node";
import { useEffect, useState } from "react";
import CreateAccountForm from "~/components/forms/create-account";
import LogInForm from "~/components/forms/log-in-form";
import Button from "~/components/ui/button";
import { loginUser } from "~/utils/auth";
import { getSession, commitSession } from "~/utils/session";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    const user = await loginUser(email, password);

    // Crear sesión
    const session = await getSession();
    session.set("userId", user.id);

    return redirect("/dashboard", {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    });
  } catch (error: unknown) {
    return json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 400 }
    );
  }
}

export default function LoginPage() {
  const [createAccount, setCreateAccount] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Verificar si estamos en el cliente
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="w-full max-w-xs mx-auto mt-20 flex flex-col gap-4 items-center">
      {createAccount ? <CreateAccountForm /> : <LogInForm />}
      <p>
        {createAccount
          ? "Already have an account?"
          : "Don't have an account yet?"}{" "}
        {isClient && (
          <Button text onClick={() => setCreateAccount(!createAccount)}>
            {createAccount ? "Log In" : "Create an account"}
          </Button>
        )}
      </p>
    </div>
  );
}
