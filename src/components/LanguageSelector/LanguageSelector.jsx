import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import { icons } from "../../helpers/icons";
import { Avatar } from "@mui/material";

const flags = {
  10: icons.ukFlag,
  20: icons.esFlag,
};

export default function LanguageSelector() {
  const [flag, setFlag] = useState(10);
  console.log(flag);

  const handleChange = (event) => {
    setFlag(event.target.value);
  };

  return (
    <Box sx={{ position: "relative" }}>
      <Box sx={{ position: "absolute", height: "100%", width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Avatar src={flags[flag]} />
      </Box>
      <Select
        sx={{
          width: "60px",
          height: "50px",
          backgroundColor: "transparent",
          "& .MuiSelect-icon": {
            display: "none", // Oculta la flecha
          },
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none", // Elimina el borde
          },
        }}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={flag}
        displayEmpty
        onChange={handleChange}
      >
        {flag === 20 && (
          <MenuItem value={10}>
            <img src={flags[10]} className="w-8" />
          </MenuItem>
        )}
        {flag === 10 && (
          <MenuItem value={20}>
            <img src={flags[20]} className="w-8" />
          </MenuItem>
        )}
      </Select>
    </Box>
  );
}
