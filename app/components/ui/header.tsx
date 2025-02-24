import { logOut } from "~/utils/auth";
import Button from "./button";
import { Link, useLocation } from "@remix-run/react";
import { ActionFunctionArgs } from "@remix-run/node";

export async function action({ request }: ActionFunctionArgs) {
  logOut(request);
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
          <Link to="/log-out">
            <Button>Logout</Button>
          </Link>
        }
      </div>
    </header>
  );
}
