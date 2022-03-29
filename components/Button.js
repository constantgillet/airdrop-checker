export function Button({
  className = "",
  block = false,
  onClick = () => {},
  children,
  type = "primary",
}) {
  return (
    <button
      className={
        `rounded-sm px-3 py-3 transition-colors border
         ${block ? "block w-full" : ""}
         ${
           type === "primary"
             ? "bg-primary-600 hover:bg-primary-700 border-primary-500 hover:border-primary-600"
             : "bg-primary-600"
         }` +
        " " +
        className
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
}
