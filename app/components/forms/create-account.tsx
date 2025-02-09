import { Form } from "@remix-run/react";
import Button from "../ui/button";
import InputForm from "./input-form";
import FormContainer from "./form-container";

type CreateAccountFormProps = {
  data: {
    name: string;
    email: string;
    password: string;
  } | null;
};

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
};

const CreateAccountForm = ({ data, onInputChange }: CreateAccountFormProps) => {
  return (
    <FormContainer>
      <Form className="flex flex-col gap-4  p-4">
        <InputForm label="Name" name="name" value={data.name} />
        <InputForm label="Email" name="email" value={data.email} />
        <InputForm label="Password" name="password" value={data.password} />
        <Button type="submit">Submit</Button>
      </Form>
    </FormContainer>
  );
};

export default CreateAccountForm;
