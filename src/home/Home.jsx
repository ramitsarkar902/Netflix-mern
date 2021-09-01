import React from "react";
import "./home.scss";
import { AcUnit } from "@material-ui/icons";
import Navbar from "../components/navbar";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <img width="100%" src="https://wallpaperaccess.com/full/1087736.jpg" />
    </div>
  );
}

export default Home;
