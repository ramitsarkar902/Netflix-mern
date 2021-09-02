import React from "react";
import "./featured.scss";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

import { InfoOutlined } from "@material-ui/icons";
const Featured = ({ type }) => {
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
      <img src="https://wallpaperaccess.com/full/1087736.jpg" />

      <div className="info">
        <img
          src="https://fanart.tv/fanart/tv/270915/hdtvlogo/peaky-blinders-59fa64e7e888c.png"
          alt="show logo"
        />
        <span className="desc">
          ibguwg 23hg2ngu2uwofmwoehg g h9gwURHGW GWNGUOR EGHWNv h H
          RGNGU9RGNURHGNener 9ghw giw nnbgwr9u gwvne fu9whgwengwweu9gwehg
          bwe9ugjwg wev giuwig u owhvnew gwh gw gh
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrowIcon />
            <span>Play</span>
          </button>
          <button className="more-info">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
