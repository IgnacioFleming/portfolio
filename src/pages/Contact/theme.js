import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#f5f5f4",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#f5f5f4",
            },
            "&:hover fieldset": {
              borderColor: "#d4d4d4",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#bfbfbf",
            },
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#f5f5f4",
        },
        focused: {
          color: "#bfbfbf",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          color: "#f5f5f4",
          "&:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0px 1000px #1e3a8a inset",
            WebkitTextFillColor: "#f5f5f4",
            transition: "background-color 5000s ease-in-out 0s",
          },
        },
      },
    },
  },
});
