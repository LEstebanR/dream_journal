type InputFormProps = {
  label: string;
  name: string;
  type?: "text" | "password" | "email";
};

const InputForm = ({ label, name, type = "text" }: InputFormProps) => {
  return (
    <div className="flex flex-col gap-2 dark:text-white">
      <label htmlFor={name}>{label}:</label>
      <input
        id={name}
        type={type}
        name={name}
        className="rounded-md border border-black p-2 dark:border-gray-400"
      />
    </div>
  );
};

export default InputForm;
