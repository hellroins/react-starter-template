import { TypographyOptions } from "@mui/material/styles/createTypography";

export interface TypographyEntity extends TypographyOptions {
  [key: string]: any;
}

export interface ThemeTypographyEntity {
  colors?: CSSModuleClasses;
  heading: any;
  paper?: string;
  backgroundDefault?: string;
  background: any;
  darkTextPrimary: any;
  darkTextSecondary: any;
  textDark: any;
  menuSelected?: string;
  menuSelectedBack?: string;
  divider?: string;
  customization: any;
  grey500?: any;
}