import { createContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const LanguageContext = createContext();

function LanguageContextProvider({ children }) {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(localStorage.getItem("lang") || "en");

  const changeLang = (lang) => {
    setLang(lang);
    localStorage.setItem("lang", lang);
  };

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  return <LanguageContext.Provider value={{ lang, changeLang }}>{children}</LanguageContext.Provider>;
}

export default LanguageContextProvider;
