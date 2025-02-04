import { Form, useFetcher } from "@remix-run/react";
import Button from "../ui/button";
import InputForm from "./input-form";
import FormContainer from "./form-container";
import { loginUser } from "~/utils/auth";

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget); // Obtiene los datos del formulario
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  console.log(email, password);
  loginUser(email, password);
  // // Aquí puedes enviar los datos a la acción de Remix
};

const LogInForm = () => {
  const fetcher = useFetcher();
  return (
    <FormContainer>
      <fetcher.Form
        className="flex flex-col gap-4  p-4"
        onSubmit={handleSubmit}
      >
        <InputForm label="Email" name="email" type="email" />
        <InputForm label="Password" name="password" type="password" />
        <Button type="submit"> Submit</Button>
      </fetcher.Form>
    </FormContainer>
  );
};

export default LogInForm;
