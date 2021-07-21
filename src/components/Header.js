import React from "react";
import "../css/Header.css";
import { useStateValue } from "../context_api/StateProvider";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { dummyAvatarURL } from "../spotify";
import { useHistory } from "react-router";

function Header() {
  const [{ user, spotify }, dispatch] = useStateValue();
  const history = useHistory()

  const handleChange = e => {
    history.push("/search")
    const { value } =  e.target;
    if(value !== ""){
      spotify.search(value, ["track", "album", "artist"])
    .then(r => {
      
      dispatch({
        type: "SET_SEARCH_RESULTS",
        search_results: r,
      });

      dispatch({
        type: "SET_SEARCH_QUERY",
        query: value,
      });
      
    })
    }
  }
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input
          placeholder="Search for Songs, Albums or Artists "
          type="text"
          className="header__searchInput"
          onChange={handleChange}
        />
      </div>
      <div className="header__right">
        <Avatar alt={user?.display_name} src={user?.images.length > 0 ? user.images[0].url : dummyAvatarURL} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
