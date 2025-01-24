import { TextField, ThemeProvider } from "@mui/material";
import Button from "../../components/Button/Button";
import { theme } from "./theme";
import { FaLinkedin } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { eventChangeColor } from "../../helpers/utils";

const Contact = ({ handleChange, handleSubmit, errors, values }) => {
  return (
    <section id="contact" className="flex justify-center py-24 bg-[url('/images/background-code.png')] bg-dark bg-cover">
      <div className="w-11/12">
        <h1>
          LET'S <br />
          CONNECT!
        </h1>
        <form onSubmit={handleSubmit} className="my-12">
          <div className="flex flex-col w-full lg:w-1/2 gap-5">
            <ThemeProvider theme={theme}>
              <TextField className="w-full md:w-1/2" color="primary" name="nombre" placeholder="NAME" value={values.nombre} onChange={handleChange} error={errors.nombre ? true : false} helperText={errors.nombre} />
              <TextField name="email" placeholder="EMAIL" value={values.email} onChange={handleChange} error={errors.email ? true : false} helperText={errors.email} />
              <TextField multiline rows={8} name="consulta" placeholder="MESSAGE" value={values.consulta} onChange={handleChange} error={errors.consulta ? true : false} helperText={errors.consulta} />
            </ThemeProvider>

            <Button type="submit" label="SEND" className="w-24 bg-primary text-secondary font-semibold text-lg" />
          </div>
        </form>
        <footer className="w-full flex justify-between">
          <div className="h-20 flex flex-col justify-between">
            <h3>EMAIL</h3>
            <a href="mailto:ignacioflemings@gmail.com" target="_blank" className="hover:underline">
              <p>ignacioflemings@gmail.com</p>
            </a>
          </div>
          <div className="h-20 flex flex-col items-center justify-between">
            <h3>MEDIA</h3>
            <div className="flex gap-3">
              <a href="https://github.com/IgnacioFleming" target="_blank" className="cursor-pointer" onMouseEnter={eventChangeColor({ color: "white" })} onMouseLeave={eventChangeColor({ revert: true })}>
                <LuGithub size={40} />
              </a>
              <a href="https://www.linkedin.com/in/ignacio-fleming-1b5a18114/" target="_blank" className="cursor-pointer" onMouseEnter={eventChangeColor({ color: "white" })} onMouseLeave={eventChangeColor({ revert: true })}>
                <FaLinkedin size={40} />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
