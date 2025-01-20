import { useFormik } from "formik";
import * as Yup from "yup";
import { addDoc, collection } from "firebase/firestore";
import Swal from "sweetalert2";
import { db } from "../../../firebase.config";
import Contact from "./Contact";

const ContactoContainer = ({ fontStyles }) => {
  const { handleChange, handleSubmit, values, errors, resetForm } = useFormik({
    initialValues: { nombre: "", email: "", consulta: "" },
    onSubmit: sendQuery,
    validationSchema: Yup.object().shape({
      nombre: Yup.string().required("Please write your name here.").max(50, "Name must be 50 characters max."),
      email: Yup.string().required("Please write your email here.").email("This field must contain an email address."),
      consulta: Yup.string().required("Please write your contact message here."),
    }),
    validateOnChange: false,
  });

  async function sendQuery(data) {
    let query = { ...data, fecha: Date() };

    const queriesCollection = collection(db, "queries");
    await addDoc(queriesCollection, query);
    // .then(() => {
    //   fetch(`${import.meta.env.VITE_APP_URL_BASE}/api/sendEmail`, {
    //     method: "POST",
    //     headers: {
    //       "Content-type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       transporter: "vizcacha",
    //       subject: `Nueva consulta de ${query.nombre}`,
    //       html: emailTemplate(query.nombre, query.email, query.consulta),
    //     }),
    //   });
    Swal.fire({
      title: "Message sent!",
      text: "Your message has been sent, you will soon receive a reply in your email. Thank you!",
      position: "center",
      icon: "success",
      confirmButtonColor: "#1e4477",
    });
    // })
    // .catch(() => {
    //   Swal.fire({
    //     title: "Sorry..",
    //     text: "An error ocurred while trying to send your message, please write an email to ignacioflemings@gmail.com. Thank you!",
    //     position: "center",
    //     icon: "error",
    //     confirmButtonColor: "#1e4477",
    //   });
    // });
    resetForm();
  }

  return <Contact handleChange={handleChange} handleSubmit={handleSubmit} errors={errors} values={values} fontStyles={fontStyles} />;
};

export default ContactoContainer;
