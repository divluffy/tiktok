import { Link } from "react-router-dom";
import { Timage, Tspan } from "./Tags";

const CardSuggested = ({ src, fn, un }) => (
  <Link to={`profile/${un}`} className="link_none">
    <div className="bowl_user_random">
      <Timage src={src} clas="img_Avatar_random" />
      <div className="titles_card_Random">
        <Tspan title={un} clas="username_title_nav" />
        <Tspan title={fn} clas="fullname_title_nav" />
      </div>
    </div>
  </Link>
);

export { CardSuggested };
