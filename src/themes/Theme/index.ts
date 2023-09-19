import { createTheme, Theme } from '@mui/material/styles';

// Import theme variable from SCSS
import colors from '../../assets/scss/_themes-vars.module.scss';

// Import componentStyleOverrides, themePalette, and themeTypography as needed
import componentStyleOverrides from '../StyleOverreide';
import themePalette from '../Palette';
import themeTypography from '../Typography';
import { CustomizationModel, ThemeOptionsModel } from './entities';


export const createCustomTheme = (customization: CustomizationModel): Theme => {
  const color = colors;

  const themeOption = {
    colors: color,
    heading: color.grey900,
    paper: color.paper,
    backgroundDefault: color.paper,
    background: color.primaryLight,
    darkTextPrimary: color.grey700,
    darkTextSecondary: color.grey500,
    textDark: color.grey900,
    menuSelected: color.primaryDark,
    menuSelectedBack: color.primaryLight,
    divider: color.grey200,
    customization,
  };

  const themeOptions: ThemeOptionsModel = {
    direction: 'ltr',
    palette: themePalette(themeOption),
    mixins: {
      toolbar: {
        minHeight: '48px',
        padding: '16px',
        '@media (min-width: 600px)': {
          minHeight: '48px',
        },
      },
    },
    typography: themeTypography(themeOption),
  };

  const theme = createTheme(themeOptions);
  theme.components = componentStyleOverrides(themeOption);

  return theme;
};

export default createCustomTheme;
