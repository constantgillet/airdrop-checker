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
        `rounded-sm px-3 py-3
         ${block ? "block w-full" : ""}
         ${type === "primary" ? "bg-primary" : "bg-primary"}` +
        " " +
        className
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
}
