export interface Theme {
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
