import Link from "next/link";

export default function Header({ className }) {
  return (
    <div className={"bg-white dark:bg-black flex"}>
      <div>
        <ul className={"flex"}>
          <li href={"/"} className="mx-1">
            Home
          </li>
          <li href={"/"} className="mx-1">
            Pricing
          </li>
          <li href={"/about"} className="mx-1">
            About
          </li>
        </ul>
      </div>
      <a style={{ display: "none" }}>logo</a>
      <div>Signup</div>
    </div>
  );
}
