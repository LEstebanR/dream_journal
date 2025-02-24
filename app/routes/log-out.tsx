import { Form, Link } from "@remix-run/react/dist/components";
import FormContainer from "~/components/forms/form-container";
import Button from "~/components/ui/button";
import { logOut } from "~/utils/auth";

import type { ActionFunction } from "@remix-run/node";

export const action: ActionFunction = async ({ request }) => {
  return logOut(request);
};

export default function LogOut() {
  return (
    <FormContainer>
      <Form method="post" className="flex flex-col gap-4 p-4 items-center">
        <h1>Log out</h1>
        <p>Are you sure you want to log out?</p>
        <div className="flex flex-col gap-4">
          <Button type="submit">Yes</Button>
          <Link to="/dashboard">Back to dashboard</Link>
        </div>
      </Form>
    </FormContainer>
  );
}
