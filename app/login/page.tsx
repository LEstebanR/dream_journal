import { LoginForm } from "@/components/forms/login-form";
import { Card } from "@/components/ui/card";
import { Background } from "@/components/ui/background";

export default function LoginPage() {
  return (
    <>
      <Background />
      <div className="flex-1 w-full flex items-center justify-center p-4">
        <Card className="w-full max-w-sm p-6">
          <h1 className="text-2xl font-bold mb-6 text-center">Welcome Back</h1>
          <LoginForm />
        </Card>
      </div>
    </>
  );
}
