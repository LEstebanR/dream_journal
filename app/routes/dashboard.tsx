import AuthenticatedLayout from "~/components/autenticatedLayout";
import Card from "~/components/ui/card";

export default function Dashboard() {
  return (
    <AuthenticatedLayout>
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p>Bienvenido a tu panel de controzzzzzl.</p>
      <Card title="Título de la card" content="Contenido de la card" />
    </AuthenticatedLayout>
  );
}
