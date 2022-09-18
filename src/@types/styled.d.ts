import "styled-components ";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      secundary: string;

      primaryOpacity: string;

      background: string;
      card: string;

      text: string;
      disabled: string;

      white: string;
      green: string;
      red: string;
    };
  }
}
