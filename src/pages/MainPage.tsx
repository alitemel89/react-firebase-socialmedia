import { getDocs, collection } from "firebase/firestore";
import Card from "../components/Card";

const MainPage = () => {
  return (
    <div className="h-screen md:mx-auto md:w-1/2 m-1">
      <h1 className="text-center text-2xl text-cyan-800 p-4">Feed</h1>
      <Card />
    </div>
  );
};

export default MainPage;
