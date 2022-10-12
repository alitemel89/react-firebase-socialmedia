import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import { db } from "../config/firebase";

export interface Post {
  id: string;
  title: string;
  description: string;
  userId: string;
  username: string;
}

const MainPage = () => {
  const [postsLists, setPostsLists] = useState<Post[] | null>(null);
  const postsRef = collection(db, "posts");

  const getPosts = async () => {
    const data = await getDocs(postsRef);
    setPostsLists(
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Post[]
    );
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="h-screen md:mx-auto md:w-1/2 m-1">
      <h1 className="text-center text-2xl text-cyan-800 p-4">Feed</h1>
      <div className="grid grid-cols-1 gap-5">
        {postsLists?.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
