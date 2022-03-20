import styled from "styled-components";
import { MainStyle } from "../styles/style";

const ContainerElement = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: ${MainStyle.breakpoint.sm}px) {
    max-width: 540px;
  }
  @media (min-width: ${MainStyle.breakpoint.md}px) {
    max-width: 720px;
  }
  @media (min-width: ${MainStyle.breakpoint.lg}px) {
    max-width: 960px;
  }

  @media (min-width: ${MainStyle.breakpoint.xl}px) {
    max-width: 1140px;
  }
`;

export default function Container({ children, className }) {
  return <ContainerElement className={className}>{children}</ContainerElement>;
}
