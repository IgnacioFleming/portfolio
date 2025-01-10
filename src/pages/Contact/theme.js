import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#80f0ff",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#80f0ff",
              borderWidth: 3,
            },
            "&:hover fieldset": {
              borderColor: "#fff",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#fff",
              borderWidth: 3,
            },
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          color: "#80f0ff",
          fontWeight: 600,
          "&:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0px 1000px inset",
            WebkitTextFillColor: "var(--primary)",
            transition: "background-color 5000s ease-in-out 0s",
          },
          "&:hover": {
            color: "#fff",
          },
        },
      },
    },
  },
});
