import Header from "./Header";
import Container from "./Container";

export function MainLayout({ className, children }) {
  return (
    <>
      <div>
        <Header />
        <div>{children}</div>
      </div>
    </>
  );
}
