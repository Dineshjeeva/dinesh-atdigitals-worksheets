import { Route, Switch } from "react-router-dom";

import Designer from "./Designer/Designer";
import MainCartoon from "./pages/MainCartoon";
import TotalDesigner from "./Designer/TotalDesigner";
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
      <Route path="/designer-page">
        <TotalDesigner />
      </Route>
    </Switch>
  );
}

export default App;
