import React from "react";
import "../css/Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useStateValue } from "../context_api/StateProvider";

function Sidebar() {
  const [{ playlists, saved_albums }] = useStateValue();

  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SidebarOption Icon={HomeIcon} option="Home"/>
      <SidebarOption Icon={SearchIcon} option="Search" path="/search"/>
      <SidebarOption Icon={LibraryMusicIcon} option="Your Library" path="/library" />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.slice(0,5).map((playlist, i) => (
        <SidebarOption option={playlist.name} key={i} />
      ))}
      {saved_albums?.items?.slice(0,10).map((album, i) => (
        <SidebarOption option={album.album.name} key={i} />
      ))}
      <br />
    </div>
  );
}

export default Sidebar;
