import { Route, Switch } from "react-router-dom";

import MainCartoon from "./pages/MainCartoon";
import Totalall from "./component/Totalall";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Totalall />
      </Route>
      <Route path="/cartoon-vendor">
        <MainCartoon />
      </Route>
    </Switch>
  );
}

export default App;
