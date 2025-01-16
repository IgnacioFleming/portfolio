import { Button, Divider, Drawer, Link, List, ListItem, ListItemButton, ListItemText, Toolbar } from "@mui/material";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

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
  const sections = [
    { title: "HOME", path: "home" },
    { title: "PROJECTS", path: "projects" },
    { title: "SKILLS", path: "skills" },
    { title: "ABOUT ME", path: "aboutMe" },
    { title: "CONTACT", path: "contact" },
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
