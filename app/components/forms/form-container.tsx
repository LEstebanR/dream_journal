import { ReactNode } from "react";

type FormContainerProps = {
  children: ReactNode;
};

const FormContainer = ({ children }: FormContainerProps) => {
  return (
    <div className="w-full max-w-md mx-auto rounded border border-black bg-formBg dark:bg-formBgDark dark:border-gray-300 flex flex-col ">
      {children}
    </div>
  );
};

export default FormContainer;
