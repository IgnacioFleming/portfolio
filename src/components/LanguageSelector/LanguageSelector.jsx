import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useContext, useState } from "react";
import { icons } from "../../helpers/icons";
import { Avatar } from "@mui/material";
import { LanguageContext } from "../../context/Language";

const selectStyle = {
  height: "40px",
  width: "60px",
  backgroundColor: "transparent",
  "& .MuiSelect-icon": {
    display: "none",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
};

const flags = {
  10: { icon: icons.ukFlag, lang: "en" },
  20: { icon: icons.esFlag, lang: "es" },
};

export default function LanguageSelector() {
  const { lang, changeLang } = useContext(LanguageContext);
  const [flag, setFlag] = useState(lang === flags[20].lang ? 20 : 10);

  const handleChange = (event) => {
    const newLang = event.target.value;
    setFlag(newLang);
    return changeLang(flags[newLang].lang);
  };

  return (
    <Box sx={{ position: "relative" }}>
      <Box sx={{ position: "absolute", height: "100%", width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Avatar src={flags[flag].icon} sx={{ width: "28px", height: "28px", borderRadius: 0 }} />
      </Box>
      <Select sx={selectStyle} labelId="demo-simple-select-label" id="demo-simple-select" value={flag} onChange={handleChange} autoWidth MenuProps={{ disableScrollLock: true }}>
        {flag === 20 && (
          <MenuItem value={10} sx={{ padding: 1, height: 24 }}>
            <img src={flags[10].icon} className="w-7 h-7" />
          </MenuItem>
        )}
        {flag === 10 && (
          <MenuItem value={20} sx={{ padding: 1, height: 24 }}>
            <img src={flags[20].icon} className="w-7 h-7" />
          </MenuItem>
        )}
      </Select>
    </Box>
  );
}
