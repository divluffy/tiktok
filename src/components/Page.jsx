import { useParams } from "react-router-dom";
import { Posts } from "./Data";
import Post from "./Post";

function Page() {
  const { id } = useParams();
  return (
    <div>
      <Post post={Posts.find((el) => el.id === Number(id))} />
    </div>
  );
}

export default Page;
