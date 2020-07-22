import {
  createMuiTheme,
  makeStyles,
  createStyles,
  Theme,
} from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

//theme
export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FFD500",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#ddd",
    },
  },
});

// drawer
const drawerWidth = 240;
export const useStyleDashboard = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },

    toolbar: {
      background: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    menuButton: {
      marginRight: 36,
    },
    heroContent: {
      padding: theme.spacing(8, 0, 6),
      backgroundColor: theme.palette.background.default,
    },
    fab: {
      position: "absolute",

      right: theme.spacing(4),
    },

    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: "auto",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(1),
    },
    card: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
    cardContent: {
      flexGrow: 1,
    },
  })
);

//login
export const useLoginStyle = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
