type InputFormProps = {
  label: string;
  name: string;
};

const InputForm = ({ label, name }: InputFormProps) => {
  return (
    <div className="flex flex-col gap-2 dark:text-white">
      <label htmlFor={name}>{label}:</label>
      <input
        id={name}
        name={name}
        className="rounded-md border border-black p-2 dark:border-gray-400"
        type="text"
      />
    </div>
  );
};

export default InputForm;
