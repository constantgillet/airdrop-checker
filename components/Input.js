export function Input({
  className = "",
  placeholder = "",
  value = "",
  block = false,
  onChange = () => {},
  align = "left",
}) {
  return (
    <input
      className={
        `rounded-sm px-3 py-3 border border-neutral-800 bg-neutral-900 focus-visible:outline-none focus:ring-primary-400 focus:ring-2 
        ${block ? "block w-full" : ""}
        ${
          align === "center"
            ? "text-center placeholder:text-center"
            : "text-left"
        }
        ` + className
      }
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
