import styled, { css } from "styled-components";
import { MainStyle } from "../styles/style";
import Link from "next/link";

const HeaderElement = styled.header`
  display: flex;
  justify-content: space-between;
  background: #1f1d35;
  width: 100%;
  border-radius: ${MainStyle.radius.m}px;
  padding: ${MainStyle.space.m}px;
  border: 1px solid rgba(208, 200, 216, 0.04);
  margin-top: 12px;
`;

const Navigation = styled.nav`
  ul {
    list-style: none;
    display: flex;
  }
`;

export default function Header({ className }) {
  return (
    <HeaderElement className={className}>
      <Navigation>
        <ul>
          <NavLink href={"/"}>Home</NavLink>
          <NavLink href={"/"}>Pricing</NavLink>
          <NavLink href={"/about"}>About</NavLink>
        </ul>
      </Navigation>
      <a style={{ display: "none" }}>logo</a>
      <div>Signup</div>
    </HeaderElement>
  );
}

const NavLinkElement = styled.li`
  font-size: 16px;
  font-weight: 700;
  margin-left: ${MainStyle.space.s}px;
  margin-right: ${MainStyle.space.s}px;

  a {
    color: white;
    text-decoration: none;
    opacity: 0.3;
    transition: opacity 0.3s ease-in-out;
    ${({ active }) =>
      active &&
      css`
        opacity: 1;
      `}

    &:hover {
      opacity: 1;
    }
  }
`;

const NavLink = ({ children, href }) => {
  return (
    <NavLinkElement>
      <Link href={href}>
        <a>{children}</a>
      </Link>
    </NavLinkElement>
  );
};
