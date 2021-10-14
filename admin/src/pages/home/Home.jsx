import React from "react";
import Chart from "../../components/chart/Chart";
import { FeaturedInfo } from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { data } from "../../data";
import WidgetLarge from "../../components/widgetLarge/WidgetLarge";
import WidgetSmall from "../../components/widgetSmall/WidgetSmall";
import { useState, useEffect, useMemo } from "react";
import axios from "axios";
function Home() {
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  const [userStats, setUserStats] = useState([]);

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get("/users/stats", {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNDJlYmVhMzJiMGQxOGE4OTk2NDQ4NiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNDE4MTI0MiwiZXhwIjoxNjM0NjEzMjQyfQ.6LCv9-lkPgpCVV97Q8BTzHpMM9l-B9zHFGbiEr7Gkyo",
          },
        });
        res.data.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "New Users": item.total },
          ])
        );
      } catch (err) {
        console.error(err);
      }
    };
    getStats();
  }, [MONTHS]);

  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userStats} title="User Analytics" grid dataKey="New Users" />
      <div className="widgetHome">
        <WidgetSmall />
        <WidgetLarge />
      </div>
    </div>
  );
}

export default Home;
