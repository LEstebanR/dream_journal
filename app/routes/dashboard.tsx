import AuthenticatedLayout from "~/components/autenticatedLayout";
import Card from "~/components/ui/card";
import { json, LoaderFunction } from "@remix-run/node";
import { requireUserId } from "~/utils/auth";

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await requireUserId(request);
  return json({ userId });
};

export default function Dashboard() {
  return (
    <AuthenticatedLayout>
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p>Bienvenido a tu panel de controzzzzzl.</p>
      <Card title="Título de la card" content="Contenido de la card" />
    </AuthenticatedLayout>
  );
}
