import { useTranslation } from "react-i18next";
import { useGetTextAboutMe } from "./textAboutMe";

function AboutMe() {
  const { t } = useTranslation();
  return (
    <section id="aboutMe" className="flex justify-center bg-primary py-24">
      <div className="w-11/12 flex flex-col lg:flex-row">
        <div className="w-full lg:w-9/12 flex flex-col items-center">
          <h1 className="text-secondary w-full">{t("content.about-me.title")}</h1>
          <div className="md:my-12 w-full lg:w-5/6">
            <div className="text-secondary">{useGetTextAboutMe()}</div>
          </div>
        </div>
        <div className="w-full lg:w-3/12 flex items-center lg:items-end justify-center">
          <img className="w-96 " src="/images/developing.webp" alt="Picture of myself programming" />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
