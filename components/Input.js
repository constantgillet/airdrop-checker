export function Input({
  className = "",
  placeholder = "",
  value = "",
  block = false,
  onChange = () => {},
}) {
  return (
    <input
      className={
        `rounded-sm px-3 py-3 ${block ? "block w-full" : ""}` + className
      }
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
