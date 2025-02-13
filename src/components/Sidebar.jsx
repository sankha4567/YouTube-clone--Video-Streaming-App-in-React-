import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen=useSelector(store => store.app.isMenuOpen);
  if(!isMenuOpen)return null;
  return (
    <div className="shadow-lg p-5 w-44">
      <ul>
        <li><Link to ="/"> Home </Link></li>
        <li>Shorts</li>
        <li>Video</li>
        <li>Live</li>
      </ul>
      <h1 className="font-bold pt-4">You..</h1>
      <ul>
        <li>History</li>
        <li>Playlists</li>
        <li>Your Videos</li>
        <li>Watch later</li>
        <li>Liked videos</li>
      </ul>
      <h1 className="font-bold pt-4">Subscription</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold pt-5">Watch Later
      </h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>

    </div>
  );
};

export default Sidebar;
