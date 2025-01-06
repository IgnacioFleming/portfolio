import Button from "../../components/Button/Button";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Home() {
  return (
    <section className="flex justify-center h-full py-40">
      <div className="flex justify-between w-3/4 h-3/5 items-center">
        <div>
          <img src="https://previews.123rf.com/images/yupiramos/yupiramos1705/yupiramos170514531/ 77987158-dise%C3%B1o-gr%C3%A1fico-del-ejemplo-del-vector-del-icono-del-perfil-del-hombre-joven.jpg" alt="Profile image" className="w-80 h-96" />
        </div>
        <div className="w-2/5">
          <h1>Ignacio Fleming</h1>
          <h1>Full Stack Development</h1>
          <p>Hi there! I'm passionate about creating innovative solutions through web development. With years of experience as a Product Owner, I bring a unique perspective to software creation, blending technical skills with business insights. Whether it's building seamless user experiences or tackling back-end challenges, I thrive on delivering value through code.</p>
          <div className="my-5 flex gap-10 items-center">
            <Button label="Download Resume" icon={<MdOutlineFileDownload size={24} />} iconPosition="right" className="shadow-elevated" />
            <FaGithub size={35} color="var(--cyan)" className="cursor-pointer" />
            <FaLinkedin size={35} color="var(--cyan)" className="cursor-pointer" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
