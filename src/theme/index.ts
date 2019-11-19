import 'styled-components';
import { DefaultTheme } from 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      primary: string;
      secondary: string;
    };
    background: {
      primary: string;
      secondary: string;
      special: string;
    };
    spacing: {
      micro: number;
      tiny: number;
      small: number;
      medium: number;
      large: number;
    };
  }
}

export const theme: DefaultTheme = {
  color: {
    primary: '#302f2b',
    secondary: 'rgba(0, 0, 0, 0.8)'
  },
  background: {
    primary: '#f1f1f1',
    secondary: '#e5e5e5',
    special: '#e3b022'
  },
  spacing: {
    large: 32,
    medium: 24,
    small: 16,
    tiny: 8,
    micro: 4
  }
};
