import Button from "./button";
import { Link } from "@remix-run/react";

const click = () => console.log("clicked");

const Header = () => {
  return (
    <header className="w-fulll flex justify-between p-2">
      <Link to="/">
        <p>Logo</p>
      </Link>
      <Link to="/sign-in">
        <Button onClick={click}>Sign in</Button>
      </Link>
    </header>
  );
};

export default Header;
