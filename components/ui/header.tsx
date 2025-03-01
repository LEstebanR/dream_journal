import { Button } from "./button";
import Link from "next/link";

export function Header() {
  return (
    <header className="flex items-center justify-between p-4 border-b">
      <Link href="/">
        <h1 className="text-2xl font-bold">Dreams Journal</h1>
      </Link>
      <div className="flex items-center gap-4">
        <Link href="/login">
          <Button>LogIn</Button>
        </Link>
        <Link href="/sign-in">
          <Button>SignUp</Button>
        </Link>
        <Button>LogOut</Button>
      </div>
    </header>
  );
}
