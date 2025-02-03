import { Button, Divider, Drawer, Link, List, ListItem, ListItemButton, ListItemText, Toolbar } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { GiHamburgerMenu } from "react-icons/gi";
import LanguageSwitch from "../../components/LanguageSelector/LanguageSwitch";

const textStyle = {
  color: "var(--primary)",
  paddingLeft: "12px",
};
const ItemStyle = {
  height: 50,
  display: "flex",
  alignItems: "center",
};

const MobileDrawer = ({ open, collapseDrawer }) => {
  const { t } = useTranslation();
  const sections = [
    { title: t("navbar.home"), path: "home" },
    { title: t("navbar.projects"), path: "projects" },
    { title: t("navbar.skills"), path: "skills" },
    { title: t("navbar.about-me"), path: "aboutMe" },
    { title: t("navbar.contact"), path: "contact" },
  ];

  return (
    <>
      <Drawer
        sx={{
          width: "65%",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: "65%",
            boxSizing: "border-box",
            backgroundColor: "var(--dark)",
          },
        }}
        variant="temporary"
        anchor="right"
        open={open}
        onClose={collapseDrawer}
      >
        <Toolbar sx={{ height: "95px" }}>
          <Button onClick={collapseDrawer}>
            <GiHamburgerMenu size={50} color="#80f0ff" />
          </Button>
        </Toolbar>
        <Divider />
        <List>
          <ListItem sx={{ paddingLeft: "28px" }}>
            <LanguageSwitch />
          </ListItem>
          {sections.map((section) => {
            return (
              <Link key={section.title} href={`#${section.path}`} underline="none">
                <ListItemButton onClick={collapseDrawer}>
                  <ListItem disablePadding sx={ItemStyle}>
                    <ListItemText
                      primary={section.title}
                      sx={textStyle}
                      primaryTypographyProps={{
                        fontSize: 24,
                        fontWeight: "medium",
                        letterSpacing: 3,
                        fontFamily: "Saira, sans-serif",
                      }}
                    />
                  </ListItem>
                </ListItemButton>
              </Link>
            );
          })}
          <Divider />
        </List>
      </Drawer>
    </>
  );
};

export default MobileDrawer;
