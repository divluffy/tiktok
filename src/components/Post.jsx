import React, { useEffect, useRef, useState } from "react";
import { Tbtn, Timage, Tspan } from "./Tags";
import { Scomments, Slove, Smute, Spause, Splay, Sshare, Svolume } from "./Svg";
import { Users } from "./Data";
import { Link } from "react-router-dom";

function Post({ post }) {
  let { username, description, likes, comments, shares, vidSrc } = post;
  const [isLove, setIsLove] = useState(false);
  const [isPlay, setIsPlay] = useState(false);
  const [isMute, setIsMute] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  let VideoRef = useRef();

  useEffect(() => {
    let InfoUser = Users.filter((el) => el.username === username)[0];
    if (InfoUser) {
      setUserInfo(InfoUser);
    }
  });

  const KFormatter = (num) => {
    let formatter = Intl.NumberFormat("en", { notation: "compact" });
    return formatter.format(num);
  };

  const playVideo = () => {
    if (isPlay) {
      VideoRef.current.pause();
      setIsPlay(false);
    } else {
      VideoRef.current.play();
      setIsPlay(true);
    }
  };

  const voiceVideo = () => {
    if (isMute) {
      setIsMute(false);
      VideoRef.current.volume = 1;
    } else {
      VideoRef.current.volume = 0;
      setIsMute(true);
    }
  };

  return (
    <div className="bowl_post">
      <div className="link">
        <Link to={`/profile/${username}`}>
          <Timage src={userInfo.avatar} clas="avatar_post" />
        </Link>
      </div>

      <div className="center_post">
        <div className="list_info_post_head">
          <div className="line_names_post">
            <Link to={`/profile/${username}`} className="link_none">
              <Tspan clas="username_post" title={"@" + username} />
            </Link>

            <Tspan clas="faullname_post" title={userInfo.fname} />
            <Tbtn title="follow" clas="btn_follow_user" />
          </div>

          <div className="bowl_description">
            {description &&
              description
                .split("\n")
                .map((line, i) => <Tspan clas="" title={line} key={i} />)}
          </div>
        </div>
        <div className="bowl_video">
          <video src={vidSrc} ref={VideoRef} />
          <div className="bar_video">
            <div className="play_pause">
              {isPlay ? (
                <Spause onClick={playVideo} clas="btn_playpuase_Vid" />
              ) : (
                <Splay onClick={playVideo} clas="btn_playpuase_Vid" />
              )}
            </div>
            <div className="mute_volume">
              {isMute ? (
                <Smute onClick={voiceVideo} clas="btn_playpuase_Vid" />
              ) : (
                <Svolume onClick={voiceVideo} clas="btn_playpuase_Vid" />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="bowl_Reacted">
        <div className="bowl_react_icon">
          <div className="cardy_reacty">
            <Slove
              clas={`bowl_svg_btn_reactyion ${isLove ? "love" : null}`}
              onClick={() => setIsLove(!isLove)}
            />
            <Tspan title={KFormatter(likes)} clas="count_activited" />
          </div>
          <div className="cardy_reacty">
            <Scomments clas="bowl_svg_btn_reactyion" />
            <Tspan title={KFormatter(comments)} clas="count_activited" />
          </div>
          <div className="cardy_reacty">
            <Sshare clas="bowl_svg_btn_reactyion" />
            <Tspan title={KFormatter(shares)} clas="count_activited" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
