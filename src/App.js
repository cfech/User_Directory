import React from "react";
import Search from "./components/Search";
import Header from "./components/Header";
import TableHead from "./components/tableHead";
import TableRow from "./components/TableRow";
import "./styles/main.css"

function App() {
  return (
    <div>
      <Header />
      <Search/>
      <TableHead/>
      <TableRow name = "Connor"/>
    </div>
  );
}

export default App;
