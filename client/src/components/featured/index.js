import React, { useState, useEffect } from "react";
import "./featured.scss";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import axios from "axios";

import { InfoOutlined } from "@material-ui/icons";
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}
const Featured = ({ type }) => {
  const [content, setContent] = useState({});
  const size = useWindowSize();
  useEffect(() => {
    const getrandomcontent = async () => {
      try {
        const res = await axios.get(`/movies/random?type=${type}`, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNDJlYmVhMzJiMGQxOGE4OTk2NDQ4NiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMTc3OTI4NiwiZXhwIjoxNjMyMjExMjg2fQ.Jp-UtHy4azjIaO-yvktppnaOTbP_Js3Bg6wAv7Lp55s",
          },
        });
        console.log(res.data);
        setContent(res.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getrandomcontent();
  }, [type]);
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img width={size.width} src={content.img} />

      <div className="info">
        <img width={size.width / 2} src={content.imgTitle} alt="show logo" />
        <span className="desc">{content.desc}</span>
        <div className="buttons">
          <button className="play">
            <PlayArrowIcon className="icon" />
            <span>Play</span>
          </button>
          <button className="more-info">
            <InfoOutlined className="icon" />
            <span>Info</span>
          </button>
        </div>
      </div>
      <div className="banner-fadrbottom" />
    </div>
  );
};

export default Featured;
