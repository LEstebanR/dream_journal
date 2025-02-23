import AuthenticatedLayout from "~/components/autenticatedLayout";
import Card from "~/components/ui/card";
import { LoaderFunction, redirect } from "@remix-run/node";
import { getSession } from "~/utils/auth";
import { useLoaderData } from "@remix-run/react/dist/components";

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  const user = session.get("user");

  if (!user) {
    return redirect("/login");
  }
  return user ? { user } : null;
};
export default function Dashboard() {
  const {
    user: {
      user_metadata: { name },
    },
  } = useLoaderData<typeof loader>();

  return (
    <AuthenticatedLayout>
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p>Bienvenido {name || "Usuario"} a tu panel de control.</p>
      <Card title="Título de la card" content="Contenido de la card" />
    </AuthenticatedLayout>
  );
}
