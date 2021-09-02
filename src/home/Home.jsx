import React from "react";
import "./home.scss";
import { AcUnit } from "@material-ui/icons";
import Navbar from "../components/navbar";
import Featured from "../components/featured";

function Home() {
  return (
    <div className="home">
      <Navbar />

      <Featured type="movie" />
    </div>
  );
}

export default Home;
