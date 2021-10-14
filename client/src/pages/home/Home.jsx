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
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNDJlYmVhMzJiMGQxOGE4OTk2NDQ4NiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNDE4MTI0MiwiZXhwIjoxNjM0NjEzMjQyfQ.6LCv9-lkPgpCVV97Q8BTzHpMM9l-B9zHFGbiEr7Gkyo",
            },
          }
        );
        //console.log(res.data);
        setLists(res.data);
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
      {lists.map((list, index) => {
        const { _id } = list;
        return <List key={_id} list={list} />;
      })}
    </div>
  );
}

export default Home;
