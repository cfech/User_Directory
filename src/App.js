//Imports
import React from "react";
import Search from "./components/Search";
import Header from "./components/Header";
import TableHead from "./components/table";

import "./styles/main.css"

//what to render 
function App() {
  return (
    <div>
      <Header />
      <Search/>
      <TableHead/>
    </div>
  );
}

export default App;
