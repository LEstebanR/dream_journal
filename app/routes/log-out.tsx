import { ActionFunction, redirect } from "@remix-run/node";
import { LogoutUser } from "~/utils/auth";

export const action: ActionFunction = async ({ request }) => {
  const { headers } = await LogoutUser(request);
  return redirect("/log-in", { headers });
};
