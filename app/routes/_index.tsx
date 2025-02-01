import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Dream journal" },
    { name: "This is a wepapp to write your dream", content: "Welcome!" },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-16">
        <p>Work in progress...</p>
        <Link to="/dashboard">Go to dashboard</Link>
      </div>
    </div>
  );
}
