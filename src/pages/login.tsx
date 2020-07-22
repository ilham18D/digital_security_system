import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Redirect } from "react-router";
import { FirebaseApp, useLoginApi } from "../api";
import { useLoginStyle } from "../style";
import { Footer } from "../components";
import Alert from "@material-ui/lab/Alert";
import {
  DialogTitle,
  DialogContent,
  DialogActions,
  Dialog,
} from "@material-ui/core";

interface LoginState {
  loading: boolean;
  error?: Error;
}

export default function LoginPage() {
  const classes = useLoginStyle();
  const [state, setState] = React.useState<LoginState>({ loading: false });
  const [open, setOpen] = React.useState(false);
  const { authState } = useLoginApi();
  //Dialog reset password setstate
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const loginClick = React.useCallback(async (event) => {
    try {
      event.preventDefault();
      const email = event.target.elements.email["value"];
      const password = event.target.elements.password["value"];
      setState({ loading: true });
      await FirebaseApp.auth().signInWithEmailAndPassword(email, password);
      return <Redirect to="/" />;
    } catch (error) {
      setState({ loading: false, error: new Error(error.message) });
    }
  }, []);

  const lupaPasswordClick = React.useCallback(async (event) => {
    try {
      event.preventDefault();
      const { emailreset } = event.target.elements;
      const email = emailreset["value"];
      const auth = FirebaseApp.auth();
      setState({ loading: true });
      auth.sendPasswordResetEmail(email).then(() => {
        alert("cek email anda");
        handleClose();
        setState({ loading: false });
      });
      return;
    } catch (error) {
      setState({ loading: false, error: new Error(error.message) });
    }
  }, []);

  if (authState.user) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Container>
        <div>
          {state.error && <Alert severity="error">{state.error.message}</Alert>}
        </div>
      </Container>
      <Container
        component="main"
        maxWidth="xs"
        style={{ backgroundColor: "#fff" }}
      >
        {/* dialog reset passwword */}
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          {state.loading && <LinearProgress />}

          <form autoComplete="off" onSubmit={lupaPasswordClick}>
            <DialogTitle id="alert-dialog-title">{"Masukan Email"}</DialogTitle>
            <DialogContent>
              <TextField
                id="emailreset"
                label="Email"
                variant="filled"
                type="email"
                margin="dense"
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button type="submit" color="primary">
                send
              </Button>
            </DialogActions>
          </form>
        </Dialog>
        {/* end dialog reset*/}
        <CssBaseline />
        {state.loading && <LinearProgress />}

        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Admin Panel
          </Typography>
          <Typography component="h1" variant="h5">
            Polsek Mallawa
          </Typography>
          <form className={classes.form} noValidate onSubmit={loginClick}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              id="password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="default"
              className={classes.submit}
            >
              Masuk
            </Button>
            <Grid container>
              <Grid item xs>
                <Button color="default" onClick={handleClickOpen}>
                  Lupa Password ?
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Footer />
        </Box>
      </Container>
    </>
  );
}
