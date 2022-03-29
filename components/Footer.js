import Container from "./Container";
import Link from "next/link";

export function Footer({ className }) {
  return (
    <footer className={className}>
      <Container>
        <hr className="border-top border-gray-600" />
        <div className="grid grid-cols-12 gap-x-8 my-10">
          <div className="col-span-6 flex flex-col justify-between">
            <div>Logo</div>
            <div className="text-gray-600">
              *We don’t collect datas, no privacy no freedom.
            </div>
          </div>
          <nav className="col-span-3">
            <h4 className="font-bold text-lg">Usefull links</h4>
            <ul>
              <NavItem>Login</NavItem>
              <NavItem>Help center</NavItem>
              <NavItem>Contact us</NavItem>
              <NavItem>CGU</NavItem>
            </ul>
          </nav>
          <nav className="col-span-3">
            <h4 className="font-bold text-lg">Contact us</h4>
            <ul>
              <NavItem>Twitter</NavItem>
              <NavItem>Email</NavItem>
              <NavItem>Instagram</NavItem>
            </ul>
          </nav>
        </div>
        <hr className="border-top border-gray-600" />
        <div className="text-gray-600 py-2 text-center">
          © 2022 Copyright - EasyDrop.com
        </div>
      </Container>
    </footer>
  );
}

export function NavItem({ children, href = "#", title = "" }) {
  return (
    <li className="my-2">
      <Link href={href}>
        <a
          title={title}
          className="font-bold transition-opacity opacity-30 hover:opacity-100"
        >
          {children}
        </a>
      </Link>
    </li>
  );
}
