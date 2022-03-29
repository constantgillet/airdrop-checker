import Link from "next/link";
import { useRouter } from "next/router";

export default function Header({ className }) {
  return (
    <div className="bg-slate-50 dark:bg-slate flex relative justify-between max-w-5xl mx-auto mt-3 border dark:border-gray-800 rounded-md p-4">
      <div>
        <ul className={"flex"}>
          <NavItem href={"/"}>Home</NavItem>
          <NavItem href={"/#"}>Pricing</NavItem>
          <NavItem
            href={"/about"}
            className="mx-1 font-bold opacity-30 hover:opacity-100"
          >
            About
          </NavItem>
        </ul>
      </div>
      <a style={{ display: "none" }}>logo</a>
      <div>Signup</div>
    </div>
  );
}

const NavItem = ({ href, children }) => {
  const router = useRouter();

  return (
    <li
      className={`mx-1 font-bold ${
        router.pathname === href ? "opacity-100" : "opacity-30"
      } opacity-30 hover:opacity-100 transition-opacity ease-in duration-200`}
    >
      <Link href={href}>
        <a>{children}</a>
      </Link>
    </li>
  );
};
