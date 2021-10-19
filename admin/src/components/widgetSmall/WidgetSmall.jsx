import React, { useEffect, useState } from "react";
import { Visibility } from "@material-ui/icons";
import axios from "axios";
import "./widgetSmall.css";

function WidgetSmall() {
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get("/users?new=true", {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNDJlYmVhMzJiMGQxOGE4OTk2NDQ4NiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNDE4MTI0MiwiZXhwIjoxNjM0NjEzMjQyfQ.6LCv9-lkPgpCVV97Q8BTzHpMM9l-B9zHFGbiEr7Gkyo",
          },
        });
        setNewUsers(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    getUsers();
  }, []);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Members</span>
      <ul className="widgetSmList">
        {newUsers.map((user, index) => (
          <li key={index} className="widgetSmListItem">
            <img
              src={
                user.profilePic ||
                "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
              }
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}

        {/* map will be used later when we have data */}
      </ul>
    </div>
  );
}

export default WidgetSmall;
