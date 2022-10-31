import Auth from "./component/Auth";
import Counter from "./component/Counter";
import Header from "./component/Header";
import React from "react";
import UserProfile from "./component/UserProfile";
import { useSelector } from "react-redux";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthentication);
  return (
    <React.Fragment>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />
    </React.Fragment>
  );
}

export default App;
