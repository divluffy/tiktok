import { ReactComponent as Home } from "../assets/icons/home-on.svg";
import { ReactComponent as Search } from "../assets/icons/search.svg";
import { ReactComponent as Upload } from "../assets/icons/upload.svg";
import { ReactComponent as Sender } from "../assets/icons/sender.svg";
import { ReactComponent as BOxChat } from "../assets/icons/box-chat.svg";
import { ReactComponent as Tiktok } from "../assets/tiktok.svg";
import { ReactComponent as Liveon } from "../assets/icons/live-on.svg";
import { ReactComponent as Liveout } from "../assets/icons/live-out.svg";
import { ReactComponent as Userson } from "../assets/icons/users-on.svg";
import { ReactComponent as Usersout } from "../assets/icons/users-out.svg";
import { ReactComponent as Love } from "../assets/icons/love.svg";
import { ReactComponent as Comments } from "../assets/icons/comments.svg";
import { ReactComponent as Share } from "../assets/icons/share.svg";
import { ReactComponent as Play } from "../assets/icons/play.svg";
import { ReactComponent as Pause } from "../assets/icons/pause.svg";
import { ReactComponent as Mute } from "../assets/icons/mute.svg";
import { ReactComponent as Volume } from "../assets/icons/volume.svg";

const Smute = ({ clas, onClick }) => (
  <div className={clas} onClick={onClick}>
    <Mute />
  </div>
);

const Svolume = ({ clas, onClick }) => (
  <div className={clas} onClick={onClick}>
    <Volume />
  </div>
);

const Splay = ({ clas, onClick }) => (
  <div className={clas} onClick={onClick}>
    <Play />
  </div>
);

const Spause = ({ clas, onClick }) => (
  <div className={clas} onClick={onClick}>
    <Pause />
  </div>
);

const Slove = ({ clas, onClick }) => (
  <div className={clas} onClick={onClick}>
    <Love />
  </div>
);

const Scomments = ({ clas, onClick }) => (
  <div className={clas} onClick={onClick}>
    <Comments />
  </div>
);

const Sshare = ({ clas, onClick }) => (
  <div className={clas} onClick={onClick}>
    <Share />
  </div>
);

const Suserson = ({ clas, onClick }) => (
  <div className={clas} onClick={onClick}>
    <Userson />
  </div>
);

const Susersout = ({ clas, onClick }) => (
  <div className={clas} onClick={onClick}>
    <Usersout />
  </div>
);

const Sliveon = ({ clas, onClick }) => (
  <div className={clas} onClick={onClick}>
    <Liveon />
  </div>
);

const Sliveout = ({ clas, onClick }) => (
  <div className={clas} onClick={onClick}>
    <Liveout />
  </div>
);

const TikTok = ({ clas, onClick }) => (
  <div className={clas} onClick={onClick}>
    <Tiktok />
  </div>
);

const Ssender = ({ clas, onClick }) => (
  <div className={clas} onClick={onClick}>
    <Sender />
  </div>
);

const Schat = ({ clas, onClick }) => (
  <div className={clas} onClick={onClick}>
    <BOxChat />
  </div>
);

const Supload = ({ clas, onClick }) => (
  <div className={clas} onClick={onClick}>
    <Upload />
  </div>
);

const Shome = ({ clas, onClick }) => (
  <div className={clas} onClick={onClick}>
    <Home />
  </div>
);
const Ssearch = ({ clas, onClick }) => (
  <div className={clas} onClick={onClick}>
    <Search />
  </div>
);

export {
  Shome,
  Ssearch,
  Supload,
  Ssender,
  Schat,
  TikTok,
  Sliveon,
  Sliveout,
  Suserson,
  Susersout,
  Slove,
  Scomments,
  Sshare,
  Smute,
  Svolume,
  Splay,
  Spause,
};
