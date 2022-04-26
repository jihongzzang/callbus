import 'styled-components';
import { Theme } from 'src/styles/theme';

declare module 'styled-compontns' {
  export interface DefaultTheme extends Theme {
    dark: {
      mainBg: string;
      fontColor: string;
      fontColor2: string;
      borderColor: string;
      btnFontColor: string;
      btnBg: string;
      btnBg2: string;
      btnBg3: string;
      borderRadius: string;
      borderRadius2: string;
    };
    light: {
      mainBg: string;
      fontColor: string;
      fontColor2: string;
      borderColor: string;
      btnFontColor: string;
      btnBg: string;
      btnBg2: string;
      btnBg3: string;
      borderRadius: string;
      borderRadius2: string;
    };
  }
}
