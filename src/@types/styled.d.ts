import "styled-components ";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      secundary: string;

      primaryOpacity: string;
      secundaryOpacity: string;

      background: string;
      card: string;
      cardSecundary: string;

      text: string;
      disabled: string;

      white: string;
      green: string;
      greenOpacity: string;
      red: string;
      redOpacity: string;
    };
  }
}
