import React from "react";
import { Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./components";
import { useLoginApi } from "./api";
import { PageLogin, HomePage } from "./pages";
import { LinearProgress } from "@material-ui/core";

function App() {
  const { authState } = useLoginApi();
  return (
    <div>
      {authState.loading && <LinearProgress />}
      {!authState.loading && (
        <div>
          <Switch>
            <Route exact path="/login">
              <PageLogin />
            </Route>
            <PrivateRoute akun={authState.user} path="/">
              <HomePage />
            </PrivateRoute>
          </Switch>
        </div>
      )}
    </div>
  );
}

export default App;
