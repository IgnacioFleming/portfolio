import { MdOutlineFileDownload } from "react-icons/md";
import Button from "../../../components/Button/Button";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "../Home.module.css";
import { eventChangeColor } from "../../../helpers/utils";

function HomeContent() {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="w-1/2 flex justify-center">
        <div>
          <div className="my-8">
            <h1 className="font-bold my-2">IGNACIO FLEMING</h1>
            <h2 className="font-bold">Full Stack Dev</h2>
          </div>
          <p className={styles.summary}>Hi there! I'm passionate about creating innovative solutions through web development. With years of experience as a Product Owner, I bring a unique perspective to software creation, blending technical skills with business insights. Whether it's building seamless user experiences or tackling back-end challenges, I thrive on delivering value through code.</p>
          <div className="flex gap-10 items-center">
            <Button label="Download Resume" icon={<MdOutlineFileDownload size={24} />} iconPosition="right" className="shadow-elevated" />
            <FaGithub size={35} color="var(--cyan)" className="cursor-pointer" onMouseEnter={eventChangeColor({ color: "white" })} onMouseLeave={eventChangeColor({ revert: true })} />
            <FaLinkedin size={35} color="var(--cyan)" className="cursor-pointer" onMouseEnter={eventChangeColor({ color: "white" })} onMouseLeave={eventChangeColor({ revert: true })} />
          </div>
        </div>
      </div>
      <div className="w-1/2 flex justify-end">
        <img src="https://previews.123rf.com/images/yupiramos/yupiramos1705/yupiramos170514531/ 77987158-dise%C3%B1o-gr%C3%A1fico-del-ejemplo-del-vector-del-icono-del-perfil-del-hombre-joven.jpg" alt="Profile image" className="w-80 h-80 rounded-full" />
      </div>
    </div>
  );
}

export default HomeContent;
