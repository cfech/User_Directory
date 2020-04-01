import React from "react";
import Search from "./components/Search";
import Header from "./components/Header";
import TableHead from "./components/table";

import "./styles/main.css"

function App() {
  return (
    <div>
      <Header />
      <Search/>
      <TableHead/>
      {/* <TableRow name = "Connor"/> */}
    </div>
  );
}

export default App;
