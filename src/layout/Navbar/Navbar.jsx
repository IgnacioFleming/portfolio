import { useTranslation } from "react-i18next";

function Navbar({ className }) {
  const { t } = useTranslation();
  return (
    <nav className={`hidden sm:block h-24 flex items-center justify-end ${className}`}>
      <ul className="flex justify-end items-center gap-5 h-full text-lg font-semibold navbar">
        <a href="#home">
          <li>{t("navbar.home")}</li>
        </a>

        <a href="#projects">
          <li>{t("navbar.projects")}</li>
        </a>
        <a href="#skills">
          <li>{t("navbar.skills")}</li>
        </a>
        <a href="#aboutMe">
          <li>{t("navbar.about-me")}</li>
        </a>
        <a href="#contact">
          <li>{t("navbar.contact")}</li>
        </a>
      </ul>
    </nav>
  );
}

export default Navbar;
