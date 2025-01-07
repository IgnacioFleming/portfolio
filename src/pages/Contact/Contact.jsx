import { TextField, ThemeProvider } from "@mui/material";
import Button from "../../components/Button/Button";
import { theme } from "./theme";

const Contacto = ({ handleChange, handleSubmit, errors, values }) => {
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
