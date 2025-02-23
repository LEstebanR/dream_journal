import { destroySession, getSession, logOut } from "~/utils/auth";
import Button from "./button";
import { Link, useLocation, Form } from "@remix-run/react";
import { ActionFunctionArgs, redirect } from "@remix-run/node";
import { supabase } from "~/utils/supabase";

export async function action({ request }: ActionFunctionArgs) {
  console.log("ENNNTROOOO ");
  await supabase.auth.signOut();
  const session = await getSession(request.headers.get("cookie"));

  return redirect("/", {
    headers: {
      "Set-Cookie": await destroySession(session),
    },
  });
}

export default function Header() {
  const location = useLocation();
  const { pathname } = location;

  return (
    <header className="w-full flex justify-between p-2">
      <Link to="/">
        <p>Logo</p>
      </Link>
      <div className="flex gap-2">
        {pathname !== "/log-in" && (
          <Link to="/log-in">
            <Button>Log in</Button>
          </Link>
        )}
        {pathname !== "/sign-in" && (
          <Link to="/sign-in">
            <Button>Sign in</Button>
          </Link>
        )}
        {
          <Form method="post">
            <Button type="submit">LogOut</Button>
          </Form>
        }
      </div>
    </header>
  );
}
