import { MdOutlineFileDownload } from "react-icons/md";
import Button from "../../../components/Button/Button";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "../Home.module.css";
import { eventChangeColor } from "../../../helpers/utils";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { LanguageContext } from "../../../context/Language";

function HomeContent() {
  const { t } = useTranslation();
  const { lang } = useContext(LanguageContext);
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-center items-center w-full py-16 lg:py-0">
      <div className="w-full lg:w-1/2 flex justify-center">
        <div>
          <div className="my-8">
            <h1 className="my-2 uppercase">{t("content.home.name")}</h1>
            <h2>{t("content.home.position")}</h2>
          </div>
          <p className={styles.summary}>{t("content.home.description")}</p>
          <div className="flex gap-5 lg:gap-10 items-center">
            <a download href={`/docs/CV Ignacio Fleming - ${lang.toUpperCase()}.pdf`}>
              <Button label={t("content.home.download-button")} icon={<MdOutlineFileDownload size={24} />} iconPosition="right" className="shadow-elevated text-black font-bold text-base bg-primary uppercase" />
            </a>
            <a href="https://github.com/IgnacioFleming" target="_blank">
              <FaGithub size={40} color="var(--primary)" className="cursor-pointer" onMouseEnter={eventChangeColor({ color: "white" })} onMouseLeave={eventChangeColor({ revert: true })} />
            </a>
            <a href="https://www.linkedin.com/in/ignacio-fleming-1b5a18114/" target="_blank">
              <FaLinkedin size={40} color="var(--primary)" className="cursor-pointer" onMouseEnter={eventChangeColor({ color: "white" })} onMouseLeave={eventChangeColor({ revert: true })} />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end p-0 sm:p-12">
        <img src="/images/profile.webp" alt="Profile image" className="w-60 h-60 sm:w-80 sm:h-80 rounded-full object-right" />
      </div>
    </div>
  );
}

export default HomeContent;
