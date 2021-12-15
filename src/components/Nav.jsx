import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CardSuggested } from "./Cards";
import { Users } from "./Data";
import { Shome, Sliveout, Susersout } from "./Svg";
import { Timage, Tspan } from "./Tags";

function Nav({ page, setPage }) {
  const [moreRandom, setMoreRandom] = useState(false);
  const [currentUsers, setCurrentUsers] = useState([]);

  useEffect(() => {
    moreRandom ? setCurrentUsers(Users) : setCurrentUsers(Users.slice(0, 5));
  }, [moreRandom]);
  return (
    <div className="content_nav">
      <Link to="/" className="link_none">
        <div
          className={`line_nav ${page === "Home" ? "active" : null}`}
          onClick={() => setPage("Home")}
        >
          <Shome />
          <Tspan title="For You" clas="title_nav_section" />
        </div>
      </Link>

      <div
        className={`line_nav ${page === "Following" ? "active" : null}`}
        onClick={() => setPage("Following")}
      >
        <Susersout />
        <Tspan title="Following " clas="title_nav_section" />
      </div>
      <div
        className={`line_nav ${page === "Live" ? "active" : null}`}
        onClick={() => setPage("Live")}
      >
        <Sliveout />
        <Tspan title="LIVE" clas="title_nav_section" />
      </div>

      <hr className="hr_line_bet" />

      <Tspan title="Suggested accounts" clas="title_head_nav" />

      {currentUsers.map(({ avatar, username, fname }, i) => (
        <CardSuggested un={username} fn={fname} src={avatar} key={i} />
      ))}
      {!moreRandom ? (
        <Tspan
          title="see more"
          clas="title_head_nav_seeall"
          onClick={() => setMoreRandom(true)}
        />
      ) : null}
    </div>
  );
}

export default Nav;
