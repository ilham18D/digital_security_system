import React from "react";

import { Switch } from "react-router-dom";
import { HomePage } from "./pages";

function App() {
  return (
    <div>
      <div>
        <Switch>
          <HomePage />
        </Switch>
      </div>
    </div>
  );
}

export default App;
