import { Avatar, Box, Switch } from "@mui/material";
import { icons } from "../../helpers/icons";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const switchStyle = {
  "& .MuiSwitch-track": {
    backgroundColor: "white",
  },
  "& .Mui-checked": {
    "& .MuiSwitch-thumb": {
      backgroundColor: "#3792bc",
    },
    "& + .MuiSwitch-track": {
      backgroundColor: "#00bfff",
      opacity: 1,
    },
  },
};

function LanguageSwitch() {
  const [checked, setChecked] = useState(localStorage.getItem("lang") === "es");
  const { i18n } = useTranslation();
  useEffect(() => {
    const currentLang = localStorage.getItem("lang") || "en";
    setChecked(currentLang === "es");
    i18n.changeLanguage(currentLang);
  }, [checked]);

  const handleChange = (e) => {
    const checkLang = e.target.checked ? "es" : "en";
    setChecked(!checked);
    i18n.changeLanguage(checkLang);
    localStorage.setItem("lang", checkLang);
  };

  return (
    <Box sx={{ width: "100%", display: "flex", alignItems: "center" }}>
      <Avatar src={icons.ukFlag} sx={{ width: "40px", height: "40px", borderRadius: 0 }} />
      <Switch checked={checked} sx={switchStyle} onChange={handleChange} />
      <Avatar src={icons.esFlag} sx={{ width: "40px", height: "40px", borderRadius: 0 }} />
    </Box>
  );
}

export default LanguageSwitch;
