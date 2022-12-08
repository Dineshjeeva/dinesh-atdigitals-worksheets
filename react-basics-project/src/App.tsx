import { Route, Switch } from "react-router-dom";

import Calculator from "./Caluculator/Calculator";
import MainCartoon from "./Vendor/MainCartoon";
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
      <Route path="/calculator-page">
        <Calculator />
      </Route>
    </Switch>
  );
}

export default App;
