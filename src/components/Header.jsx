import React from "react";
import { Schat, Ssearch, Ssender, Supload, TikTok } from "./Svg";
import { Timage, Tinput } from "./Tags";
import AVatarMe from "../assets/ava.gif";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="wrapper_nav">
      <Link to="/" className="link_none">
        <TikTok clas="section_logo" />
      </Link>

      <div className="bowl_search">
        <Tinput clas="input_search" plc="Search.." />
        <Ssearch clas="svg_Search" />
      </div>
      <div className="bowl_tool">
        <Supload />
        <Ssender />
        <Schat />
        <Timage src={AVatarMe} clas="avatar_user_nav" />
      </div>
    </div>
  );
}

export default Header;
