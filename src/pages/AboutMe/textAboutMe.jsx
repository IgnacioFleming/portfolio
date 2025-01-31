import { useTranslation } from "react-i18next";
import { icons } from "../../helpers/icons";

export const useGetTextAboutMe = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex gap-5 my-12">
        <img src={icons.quote} alt="quote" className="h-14" />
        <p>{t("content.about-me.paragraphs.p1")}</p>
      </div>

      <div className="flex gap-5 my-12">
        <img src={icons.quote} alt="quote" className="h-14" />
        <p>{t("content.about-me.paragraphs.p2")}</p>
      </div>
      <div className="flex gap-5 my-12">
        <img src={icons.quote} alt="quote" className="h-14" />
        <div>
          <p>{t("content.about-me.paragraphs.p3")}</p>
          <p>{t("content.about-me.paragraphs.p4")}</p>
        </div>
      </div>
    </>
  );
};
