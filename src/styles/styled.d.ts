
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      secondaryBackground: string;
      primary: string;
      title: string;
      texts: string;
      subs: string;
    };
  }
}