import { SignInForm } from "@/components/forms/sign-in-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SignInPage() {
  return (
    <div className="flex flex-col items-center justify-center min- p-4 min-w-96">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Create Account</CardTitle>
        </CardHeader>
        <CardContent>
          <SignInForm />
          <div className="text-sm text-center mt-4">
            Already have an account?{" "}
            <a
              href="/login"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Log in
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
