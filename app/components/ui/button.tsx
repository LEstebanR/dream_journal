type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  text?: boolean;
};

export default function Button({
  children,
  onClick,
  type = "button",
  text = false,
}: ButtonProps) {
  if (text) {
    return (
      <button
        onClick={onClick}
        className="underline text-primary hover:text-primaryDark"
      >
        {children}
      </button>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className="px-4 py-2 bg-primary text-white font-bold  hover:bg-primaryDark rounded-lg"
    >
      {children}
    </button>
  );
}
