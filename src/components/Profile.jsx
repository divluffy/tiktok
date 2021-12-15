import React from "react";
import { Link, useParams } from "react-router-dom";
import { Posts, Users } from "./Data";
import { Tbtn, Timage, Tspan } from "./Tags";

function Profile() {
  const { username } = useParams();
  let { avatar, fname, followers, following, likes, bio } = Users.filter(
    (el) => el.username === username
  )[0];

  let videos = Posts.filter((e) => e.username === username);
  const KFormatter = (num) => {
    let formatter = Intl.NumberFormat("en", { notation: "compact" });
    return formatter.format(num);
  };
  return (
    <div className="bowl_proifle">
      <div className="head_profile">
        <Timage src={avatar} clas="avatar_profile" />
        <div className="side_info_profile">
          <Tspan title={username} clas="username_profile" />
          <Tspan title={fname} clas="title_name_prof" />
          <Tbtn title="Follow" clas="btn_to_follow_prof" />
        </div>
      </div>

      <div className="analyisis">
        <Tspan
          title={KFormatter(following) + " Following"}
          clas="title_analyas"
        />
        <Tspan
          title={KFormatter(followers) + " Followers"}
          clas="title_analyas"
        />
        <Tspan title={KFormatter(likes) + " Likes"} clas="title_analyas" />
      </div>
      <div className="bowl_bio">
        {bio.split("\n").map((line, i) => (
          <Tspan title={line} clas="title_analyas" key={i} />
        ))}
      </div>

      <div className="bowl_list_Video">
        {videos.map((vid, i) => {
          return (
            <Link to={`/post/${vid.id}`} className="card_post_vid_link" key={i}>
              <Timage src={vid.banar} clas="card_post_vid" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Profile;
