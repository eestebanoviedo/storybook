import { createTheme } from "@material-ui/core/styles"

const theme = createTheme({
  palette: {
    primary: {
      main: "#3E984C",
    },
    secondary: {
      main: "#019966",
    },
  },
  overrides: {
    MuiOutlinedInput: {
      root: {
        "& $notchedOutline": {
          borderColor: "grey",
        },
      },
    },
  },
})

export default theme
