export function Input({ className = "", placeholder = "", value = "" }) {
  return (
    <input className={className} placeholder={placeholder} value={value} />
  );
}
