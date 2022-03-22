import Link from "next/link";

export default function Header({ className }) {
  return (
    <div className="bg-slate-50 dark:bg-slate-800 flex relative justify-between max-w-5xl mx-auto mt-3 border border-cyan-800 rounded-xl p-4">
      <div>
        <ul className={"flex"}>
          <li href={"/"} className="mx-1 font-bold">
            Home
          </li>
          <li href={"/"} className="mx-1 font-bold">
            Pricing
          </li>
          <li href={"/about"} className="mx-1 font-bold">
            About
          </li>
        </ul>
      </div>
      <a style={{ display: "none" }}>logo</a>
      <div>Signup</div>
    </div>
  );
}
