import { createTheme, TextField, ThemeProvider } from "@mui/material";
import Button from "../../components/Button/Button";

const Contacto = ({ handleChange, handleSubmit, errors, values }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#f5f5f4", // Color principal (usado para el borde y el label)
      },
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#f5f5f4", // Color del borde
              },
              "&:hover fieldset": {
                borderColor: "#d4d4d4", // Color al pasar el mouse
              },
              "&.Mui-focused fieldset": {
                borderColor: "#bfbfbf", // Color cuando está enfocado
              },
            },
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: "#f5f5f4", // Color del label cuando no está enfocado
          },
          focused: {
            color: "#bfbfbf", // Color del label cuando está enfocado
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          input: {
            color: "#f5f5f4", // Color del texto dentro del input
          },
        },
      },
    },
  });
  return (
    <section className="flex justify-center">
      <div className="w-3/4">
        <h2 className="text-center">Let's Connect</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col w-1/2 gap-5">
            <ThemeProvider theme={theme}>
              <TextField className="w-1/2" color="primary" name="nombre" label="Name" value={values.nombre} onChange={handleChange} error={errors.nombre ? true : false} helperText={errors.nombre} />
              <TextField name="email" label="Email" value={values.email} onChange={handleChange} error={errors.email ? true : false} helperText={errors.email} />
              <TextField multiline rows={8} name="consulta" label="Message" value={values.consulta} onChange={handleChange} error={errors.consulta ? true : false} helperText={errors.consulta} />
            </ThemeProvider>

            <Button type="submit" label="Send" className="w-24">
              Enviar
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contacto;
