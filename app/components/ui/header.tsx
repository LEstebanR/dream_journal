import Button from "./button";
import { Link, useLocation } from "@remix-run/react";

const click = () => console.log("clicked");

const Header = () => {
  const Location = useLocation();
  const { pathname } = Location;

  return (
    <header className="w-fulll flex justify-between p-2">
      <Link to="/">
        <p>Logo</p>
      </Link>
      {pathname !== "/sign-in" ? (
        <Link to="/sign-in">
          <Button onClick={click}>Sign in</Button>
        </Link>
      ) : null}
    </header>
  );
};

export default Header;
