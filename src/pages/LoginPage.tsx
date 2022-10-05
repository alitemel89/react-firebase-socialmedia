import React from "react";
import heroVid from "../assets/video.mp4";

const LoginPage = () => {
  return (
    <div className="flex flex-col justify-center mx-auto w-full h-[90vh] ">
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
      <button className="text-white">Sign in with Google</button>
      </div>
    </div>
  );
};

export default LoginPage;
