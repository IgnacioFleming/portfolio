import { useFormik } from "formik";
import * as Yup from "yup";
import { addDoc, collection } from "firebase/firestore";
import Swal from "sweetalert2";
import { db } from "../../../firebase.config";
import Contact from "./Contact";
import { useTranslation } from "react-i18next";

const ContactoContainer = ({ fontStyles }) => {
  const { t } = useTranslation();
  const { handleChange, handleSubmit, values, errors, resetForm } = useFormik({
    initialValues: { nombre: "", email: "", consulta: "" },
    onSubmit: sendQuery,
    validationSchema: Yup.object().shape({
      nombre: Yup.string().required(t("content.contact.form.errors.name.required")).max(50, t("content.contact.form.errors.name.max")),
      email: Yup.string().required(t("content.contact.form.errors.email.required")).email(t("content.contact.form.errors.email.email")),
      consulta: Yup.string().required(t("content.contact.form.errors.message.required")),
    }),
    validateOnChange: false,
  });

  async function sendQuery(data) {
    let query = { ...data, fecha: Date() };

    const queriesCollection = collection(db, "queries");
    try {
      await addDoc(queriesCollection, query);

      await fetch("https://email-sender-nu.vercel.app/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          transporter: "portfolio",
          subject: `Tenés una oferta de ${query.nombre}`,
          html: `
          <p><strong>Nombre:</strong> ${query.nombre}</p>
          <br />
          <p><strong>Email:</strong> ${query.email}</p>
          <br />
          <p><strong>Consulta:</strong> ${query.consulta}</p>
          <br />
          `,
        }),
      });
      Swal.fire({
        title: "Message sent!",
        text: "Your message has been sent, you will soon receive a reply in your email. Thank you!",
        position: "center",
        icon: "success",
        confirmButtonColor: "#1e4477",
      });
    } catch (error) {
      Swal.fire({
        title: "Sorry..",
        text: "An error ocurred while trying to send your message, please write an email to ignacioflemings@gmail.com. Thank you!",
        position: "center",
        icon: "error",
        confirmButtonColor: "#1e4477",
      });
    }
    resetForm();
  }

  return <Contact handleChange={handleChange} handleSubmit={handleSubmit} errors={errors} values={values} fontStyles={fontStyles} />;
};

export default ContactoContainer;
