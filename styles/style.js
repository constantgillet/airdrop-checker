import { darken, lighten } from "polished";
import { createGlobalStyle } from "styled-components";

export const MainStyle = {
  breakpoint: {
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  },
  radius: {
    s: 4,
    m: 12,
  },
  color: {
    primary: "#146cda",
    primary80: lighten(0.2, "#146cda"),
    primary60: lighten(0.4, "#146cda"),
    primary40: lighten(0.6, "#146cda"),
    primary20: lighten(0.8, "#146cda"),
    primary10: lighten(0.9, "#146cda"),

    light: "white",

    dark: "#171629",
    dark80: "#404F61",
    dark60: "#707B89",
    dark40: "#9FA7B0",
    dark20: "#CFD3D8",
    dark10: "#E8E9EC",

    backgroundColor: "#f2f2f2",
  },
  text: {
    body: {
      fontSize: "14px",
      fontWeight: "normal",
    },
    bodyBold: {
      fontSize: "14px",
      fontWeight: "600",
    },
    subtitle: {
      fontSize: "18px",
      fontWeight: "600",
    },
    small: {
      fontSize: "12px",
      fontWeight: "normal",
    },
  },
  space: {
    none: 0,
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 48,
  },
};

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        line-height: 1.5;
        color: ${MainStyle.color.light};
        background: ${MainStyle.color.dark};
    }
    
    * {
        font-family: 'Montserrat', sans-serif !important;
    }
    
    //Import fonts
    @font-face {
      font-family: 'Montserrat';
      src: url('/fonts/Montserrat-Light.ttf') format("truetype");
      font-weight: 300;
    }
    @font-face {
      font-family: 'Montserrat';
      src: url("/fonts/Montserrat-Regular.ttf") format("truetype");
      font-style: normal;
      font-weight: normal;
    }
    @font-face {
      font-family: 'Montserrat';
      src: url("/fonts/Montserrat-SemiBold.ttf") format("truetype");
      font-weight: 600;
    }
    @font-face {
      font-family: 'Montserrat';
      src: url("/fonts/Montserrat-Bold.ttf") format("truetype");
      font-weight: 700;
    }
    @font-face {
      font-family: 'Montserrat';
      src: url("/fonts/Montserrat-ExtraBold.ttf") format("truetype");
      font-weight: 800;
    }

    #nprogress .bar {
      height: 3px;
      background: linear-gradient(137.11deg, #7A4FA3 13.71%, #638CA9 67.82%)
    }
`;
