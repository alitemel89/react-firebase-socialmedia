import { GoLocation } from "react-icons/go";
import { Post as IPost } from "../pages/MainPage";
import { BsCalendarDate } from "react-icons/bs";
import moment from "moment";

interface PostProps {
  post: IPost;
}

const Card = (props: PostProps) => {
  const { post } = props;

  console.log(moment(post.timestamp.toDate()).format('LLLL'));
  
  
  return (
    <div
      className="bg-white text-gray-700 w-full min-h-[5rem]
     rounded-md overflow-hidden
     shadow-lg border-2"
    >
      <div className="flex justify-between items-center mt-1 px-3">
        <div className="flex items-center">
          <img
            src={post.userImage || ""}
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <span className="p-3 text-xl font-bold">{post.username}</span>
        </div>
        <span className="flex items-center rounded-md text-sm">
          <GoLocation size={20} className="mr-2" />
          {post.location}
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

        <div className="text-gray-500 flex items-center space-x-2 py-2">
          <BsCalendarDate />
          <span>{moment(post.timestamp.toDate()).format('LLLL')}</span>
        </div>


        <h2 className="font-semibold text-2xl overflow-ellipsis 
        overflow-hidden whitespace-nowrap border-t-2 border-gray-200 pt-4">
          {post.title}
        </h2>
        <p>{post.description}</p>
      </div>
    </div>
  );
};

export default Card;
