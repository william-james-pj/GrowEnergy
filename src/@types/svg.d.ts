interface IOptional extends React.FC<SvgProps> {
  focused?: boolean;
}

declare module "*.svg" {
  import { SvgProps } from "react-native-svg";
  const content: IOptional;
  export default content;
}
