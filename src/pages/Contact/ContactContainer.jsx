import Contacto from "./Contact";
import { useFormik } from "formik";
import * as Yup from "yup";
import { addDoc, collection } from "firebase/firestore";
import Swal from "sweetalert2";
import { db } from "../../../firebase.config";
import { emailTemplate } from "../../assets/templates/emailTemplate";

const ContactoContainer = ({ fontStyles }) => {
  const { handleChange, handleSubmit, values, errors, resetForm } = useFormik({
    initialValues: { nombre: "", email: "", consulta: "" },
    onSubmit: sendQuery,
    validationSchema: Yup.object().shape({
      nombre: Yup.string().required("Debe colocar su nombre y apellido").max(50, "El nombre y apellido debe tener entre 1 y 50 caracteres"),
      email: Yup.string().required("Debe colocar su email").email("Este campo debe ser un email"),
      consulta: Yup.string().required("Por favor, ingrese su consulta"),
    }),
    validateOnChange: false,
  });

  async function sendQuery(data) {
    let query = { ...data, fecha: Date() };

    const queriesCollection = collection(db, "queries");
    await addDoc(queriesCollection, query)
      .then(() => {
        fetch(`${import.meta.env.VITE_APP_URL_BASE}/api/sendEmail`, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            transporter: "vizcacha",
            subject: `Nueva consulta de ${query.nombre}`,
            html: emailTemplate(query.nombre, query.email, query.consulta),
          }),
        });
        Swal.fire({
          title: "Consulta Enviada!",
          text: "Hemos registrado correctamente su consulta, serás contactado en breve. Muchas gracias",
          position: "center",
          icon: "success",
          confirmButtonColor: "#1e4477",
        });
      })
      .catch(() => {
        Swal.fire({
          title: "Lo sentimos",
          text: "No hemos podido registrar su consulta. Por favor, vuelva a intentarlo. Muchas gracias",
          position: "center",
          icon: "error",
          confirmButtonColor: "#1e4477",
        });
      });
    resetForm();
  }

  return <Contacto handleChange={handleChange} handleSubmit={handleSubmit} errors={errors} values={values} fontStyles={fontStyles} />;
};

export default ContactoContainer;
