
import { Direction } from "@mui/material/styles";

export interface CustomizationModel {
  [key: string]: any;
}

export interface ThemeOptionsModel {
  direction: Direction;
  palette: any;
  mixins: object;
  typography: any;
}