import Button from "./button";
import { Link, useLocation, Form } from "@remix-run/react";

const Header = () => {
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
          <Form method="post" action="/logout">
            <Button type="submit">Log Out</Button>
          </Form>
        }
      </div>
    </header>
  );
};

export default Header;
