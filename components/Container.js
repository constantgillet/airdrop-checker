export default function Container({ className, children }) {
  return <div className={`max-w-5xl ${className} mx-auto`}>{children}</div>;
}
