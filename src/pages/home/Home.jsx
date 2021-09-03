import React from "react";
import "./home.scss";
import { AcUnit } from "@material-ui/icons";
import Navbar from "../../components/navbar";
import Featured from "../../components/featured";
import List from "../../components/list";

function Home() {
  return (
    <div className="home">
      <Navbar />

      <Featured type="movie" />
      <List />
      <List />
      <List />
      <List />
    </div>
  );
}

export default Home;
