import Header from "./Header";
import Container from "./Container";

export function MainLayout({ className, children }) {
  return (
    <>
      <div>
        <div>{children}</div>
      </div>
    </>
  );
}
