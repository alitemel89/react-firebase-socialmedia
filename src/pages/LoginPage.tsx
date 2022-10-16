import heroVid from "../assets/video.mp4";

import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate()
  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    navigate('/');
  }

  return (
    <div className="flex flex-col justify-center mx-auto w-full h-[90vh]">
      <video
        className="object-cover h-full w-full absolute -z-10"
        src={heroVid}
        autoPlay
        loop
        muted
      />
      <div className="mx-auto text-center">
        <h2 className="text-3xl py-4 text-white">
          Welcome to the Watermelon Joy
        </h2>
        <button onClick={signInWithGoogle} className="text-white">Sign in with Google</button>
      </div>
    </div>
  );
};

export default LoginPage;
