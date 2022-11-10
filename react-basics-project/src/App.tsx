import { Route, Switch } from "react-router-dom";

import CatoonAddvendor from "./pages/cartoonvendor";
import Totalall from "./component/Totalall";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Totalall />
      </Route>
      <Route path="/cartoon-vendor">
        <CatoonAddvendor />
      </Route>
    </Switch>
  );
}

export default App;
