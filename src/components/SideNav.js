import React from "react";
import {Link} from "react-router-dom";

function SideNav() {
  return (
    <div className="collapse navbar-collapse navbar-ex1-collapse">
      <ul className="nav navbar-nav side-nav">
        <li className="active">
          {
          <Link to={"/"}>
            <i className="fa fa-fw fa-dashboard" /> Dashboard
          </Link>
          }
        </li>
        <li>
          <Link to={"/charts"}>
            <i className="fa fa-fw fa-bar-chart-o" /> Charts
          </Link>
        </li>
        <li>
          <Link to={"/tables"}>
            <i className="fa fa-fw fa-table" /> Tables
          </Link>
        </li>
        <li>
          <Link to={"/settings"}>
            <i className="fa fa-fw fa-gear" /> Settings
          </Link>
        </li>
        <li>
          <Link to={"/wall"}>
            <i className="fa fa-fw fa-home" /> Wall
          </Link>
        </li>
        <li>
          <Link to={"/profiles"}>
            <i className="fa fa-fw fa-user" /> Profiles
          </Link>
        </li>
        <li>
          <Link to={"/marquee/iloveroutes"}>
            <i className="fa fa-fw fa-heart" /> Marquee "I love routes"
          </Link>
        </li>
        <li>
          <Link to={"/marquee/reactrouterrules"}>
            <i className="fa fa-fw fa-heart" /> Marquee "React Router Rules"
          </Link>
        </li>
      </ul>
    </div>);
}

export default SideNav;

// <a href="charts.html">
//   <i className="fa fa-fw fa-bar-chart-o" /> Charts
// </a>
