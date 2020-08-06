import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import { Switch, Route } from "react-router-dom";
import { useStyleDashboard } from "../style";
import { Apps } from "@material-ui/icons";
import PagePolisi from "./polisi";
import PageLaporan from "./laporan";
import LaporanDarurat from "./laporanDarurat";
import {
  MenuListItemLink,
  MenuListItemButton,
  MenuSubListItem,
} from "../components";
import { Divider } from "@material-ui/core";
import { useLoginApi } from "../api/useLogin";
import { FirebaseApp } from "../api";

export function initializePush() {
  const messaging = FirebaseApp.messaging();
  messaging
    .requestPermission()
    .then(() => {
      return messaging.getToken();
    })
    .catch((error) => {
      if (error.code === "messaging/permission-blocked") {
        console.log("Please Unblock Notification Request Manually");
      } else {
        console.log("Error Occurred", error);
      }
    });
  messaging.onMessage((payload) => {
    const notificationTitle = payload.notification.title;
    const notificationBody = payload.notification.body;
    // const notificationOptions = {
    //   body: payload.notification.body,
    //   icon: payload.notification.icon
    // };

    alert(notificationTitle + notificationBody);
    // console.log("Notification Received", payload);
    //this is the function that gets triggered when you receive a
    //push notification while you’re on the page. So you can
    //create a corresponding UI for you to have the push
    //notification handled.
  });
}

export default function HomePage() {
  const { logout } = useLoginApi();
  const classes = useStyleDashboard();
  React.useEffect(() => {
    initializePush();
  });
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
              width={"80%"}
              height={"90%"}
              src={"/LOGOPOLSEKMALLAWA.png"}
              alt={"img"}
            />
          </label>
        </div>
        <div className={classes.drawerContainer}>
          <Divider />
          <List>
            <MenuListItemLink icon={<Apps />} to="/" text="Admin SIPD" />
          </List>
          <Divider />

          <MenuSubListItem text="Layanan Masyarakat">
            <Divider />
            <MenuListItemLink
              icon={<Apps />}
              to="/laporanDarurat"
              text="Laporan Darurat"
            />
            <MenuListItemLink icon={<Apps />} to="/laporan" text="Pengaduan" />
          </MenuSubListItem>

          <Divider />
          <List>
            <MenuListItemButton
              text="Keluar"
              onClick={async () => {
                await logout();
              }}
            />
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <Switch>
          <Route exact path="/">
            <PagePolisi />
          </Route>

          <Route exact path="/laporanDarurat">
            <LaporanDarurat />
          </Route>
          <Route exact path="/laporan">
            <PageLaporan />
          </Route>
        </Switch>
      </main>
    </div>
  );
}
