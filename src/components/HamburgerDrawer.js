import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { ListItemIcon } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import categories from "../data/category";

export default function TemporaryDrawer({ setCategory }) {
  const [state, setState] = React.useState({
    left: false,
  });

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 200 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem style={{ fontWeight: "bold", fontSize: 18 }}>
          Categories
        </ListItem>
      </List>
      <Divider />
      <List>
        {categories.map((category) => (
          <ListItem key={category.category}>
            <ListItemButton
              style={{ padding: 4 }}
              onClick={() => {
                setCategory(category.category);
              }}
            >
              <ListItemIcon>{category.icon}</ListItemIcon>
              <ListItemText primary={category.category} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <React.Fragment key={"left"}>
          <Button onClick={toggleDrawer("left", true)}>
            <MenuIcon
              style={{
                color: "282A3A",
              }}
            />
          </Button>
          <Drawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>
        </React.Fragment>
      </ThemeProvider>
    </div>
  );
}
