import React, { useContext } from "react";

import Login from "./Component/Login/Login";
import Home from "./Component/Home/Home";
import MainHeader from "./Component/MainHeader/MainHeader";
import AuthContext from "./Store/auth-context";

function App() {
  const ctx = useContext(AuthContext);

  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;
