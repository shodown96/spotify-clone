import React from "react";
import { useHistory } from "react-router";
import "../css/SidebarOption.css";

function SidebarOption({ option = "test", Icon, path="/" }) {

  const history = useHistory()
  return (
    <div className="sidebarOption" onClick={()=>history.push(path)}>
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? <h4>{option}</h4> : <p>{option}</p>}
    </div>
  );
}

export default SidebarOption;
