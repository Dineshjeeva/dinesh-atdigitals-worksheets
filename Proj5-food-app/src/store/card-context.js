import React from "react";

const CardContext = React.createContext({
  items: [],
  totals: 0,
  additem: (item) => {},
  removeitem: (id) => {},
});
export default CardContext;
