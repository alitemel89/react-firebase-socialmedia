import { useAuthState } from "react-firebase-hooks/auth";
import { BiCurrentLocation } from "react-icons/bi";
import { auth } from "../config/firebase";
import { Post as IPost } from "../pages/MainPage";

interface PostProps {
  post: IPost;
}

const Card = (props: PostProps) => {
  const { post } = props;
  const [user] = useAuthState(auth);
  return (
    <div
      className="bg-white text-gray-700 w-full min-h-[5rem]
     rounded-md overflow-hidden
     shadow-lg border-2"
    >
      <div className="flex justify-between items-center mt-1 px-3">
        <div className="flex items-center">
          <img
            src={user?.photoURL || ""}
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <span className="p-3 text-xl font-bold">{post.username}</span>
        </div>
        <span className="flex items-center rounded-md text-sm">
          <BiCurrentLocation size={20} className="mr-2" />
          Antalya, Turkey
        </span>
      </div>
      <img src={post.postImage} alt="product" className="w-full object-fill" />
      <div className="p-4 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full text-xs bg-gray-100">
            #react
          </span>
          <span className="px-3 py-1 rounded-full text-xs bg-gray-100">
            #firebase
          </span>
        </div>

        <h2 className="font-semibold text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap">
          {post.title}
        </h2>
        <p>{post.description}</p>
      </div>
    </div>
  );
};

export default Card;
