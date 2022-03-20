import Header from "./Header";
import Container from "./Container";

export function MainLayout({ className, children }) {
  return (
    <>
      <Container>
        <Header />
        <div>{children}</div>
      </Container>
    </>
  );
}
