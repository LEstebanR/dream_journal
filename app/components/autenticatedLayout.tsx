import Sidebar from "./ui/sidebar";

type Props = {
  children: React.ReactNode;
};

export default function AuthenticatedLayout({ children }: Props) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <main className="flex-1 p-4 bg-gray-100">{children}</main>
      </div>
    </div>
  );
}
