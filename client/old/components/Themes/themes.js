import { createTheme } from "@mui/material/styles";
const mainTheme = createTheme({
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: "#662E9B",
      },
    },
  },
  palette: {
    primary: {
      main: '#000000'
    },
    success: {
      main: '#4caf50'
    },
    navbar: {
      main: '#FFFFFF'
    },
    action: {
      main: '#FF900E'
    }
  },
});
export default createTheme(mainTheme);