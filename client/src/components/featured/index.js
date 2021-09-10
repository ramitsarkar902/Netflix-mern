import React, { useState, useEffect } from "react";
import "./featured.scss";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

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
  const size = useWindowSize();
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
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
      <img
        width={size.width}
        src="https://wallpaperaccess.com/full/1087736.jpg"
      />

      <div className="info">
        <img
          width={size.width / 2}
          src="https://fanart.tv/fanart/tv/270915/hdtvlogo/peaky-blinders-59fa64e7e888c.png"
          alt="show logo"
        />
        <span className="desc">{size.width}</span>
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
