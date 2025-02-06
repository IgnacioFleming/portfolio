import { Avatar, Box, Switch } from "@mui/material";
import { icons } from "../../helpers/icons";
import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../../context/Language";

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
  const { lang, changeLang } = useContext(LanguageContext);
  const [checked, setChecked] = useState(lang === "es");

  useEffect(() => {
    changeLang(checked ? "es" : "en");
  }, [checked]);

  const handleChange = (e) => {
    setChecked(!checked);
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
