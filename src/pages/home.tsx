import React from "react";

import Drawer from "@material-ui/core/Drawer";

import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import { Switch, Route } from "react-router-dom";
import { useStyleDashboard } from "../style";
import { Apps } from "@material-ui/icons";

import { DashboardPage } from "./homePage";
import { MenuListItemLink } from "../components";
import { Divider } from "@material-ui/core";

export default function HomePage() {
  const classes = useStyleDashboard();
  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar}>
          <label>
            <img
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              width={"60%"}
              height={"50%"}
              src={"/logo192.png"}
              alt={"img"}
            />
          </label>
        </div>
        <div className={classes.drawerContainer}>
          <List>
            <MenuListItemLink icon={<Apps />} to="/" text="Dashboard" />
          </List>
          <Divider />
          <List>
            {/* <MenuListItemButton
              text="Keluar"
              onClick={async () => {
                await FirebaseApp.auth().signOut();
              }}
            /> */}
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <Switch>
          <Route exact path="/">
            <DashboardPage />
          </Route>
        </Switch>
      </main>
    </div>
  );
}
