import React, { useState, useEffect } from "react";
import "./home.scss";
import { AcUnit } from "@material-ui/icons";
import Navbar from "../../components/navbar";
import Featured from "../../components/featured";
import List from "../../components/list";
import axios from "axios";

function Home({ type }) {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`
        );
        console.log(res);
        /* setLists(res.data); */
      } catch (error) {
        console.log(error);
      }
    };
    getRandomLists();
  }, [type, genre]);
  return (
    <div className="home">
      <Navbar />

      <Featured type={type} />
      <List />
      <List />
      <List />
      <List />
    </div>
  );
}

export default Home;
