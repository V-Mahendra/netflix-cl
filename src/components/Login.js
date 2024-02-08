import React, { useRef, useState } from "react";
import Header from "./Header";

import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, SetIsSignInForm] = useState(true);
  const [errormessage, SetErrormessage] = useState(null);

  // const fullname = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const HandleButton = () =>{


   const message = checkValidData(email.current.value , password.current.value);

   SetErrormessage(message)

  }

  const toggleForm = () => {
    SetIsSignInForm(!isSignInForm);
  };

  return (
    <div className="w-[100vh]">
      <Header />

      <div className="absolute">
        <img
          className=""
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_large.jpg
       "
          alt=""
        />
      </div>

      <form onSubmit={(e) => e.preventDefault()} className=" w-3/12 absolute my-36 mx-auto right-0 left-0 p-12 bg-black text-white rounded-lg bg-opacity-85">
        <h1 className="font-bold text-3xl mx-2 py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
          // ref={fullname}
            type="text"
            placeholder="Full Name"
            className="p-4 ml-2 m-4 rounded-sm w-full bg-gray-700 "
          />
        )}
        <input
        ref = {email}
          type="text"
          placeholder="Email address"
          className="p-4 ml-2 m-4 rounded-sm w-full bg-gray-700 "
        />
        <input
        ref = {password}
          type="Password"
          placeholder="Password"
          className="p-4 ml-2 m-4 rounded-sm w-full bg-gray-700 "
        />
        <p className="text-red-600 text-sm   px-2 mt-0">{errormessage}</p>
        <button className="p-4 ml-2 m-4 bg-red-800  w-full rounded-md" onClick={HandleButton}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="p-4 ml-2 m-4 cursor-pointer " onClick={toggleForm}>
          {isSignInForm ? "New to netflix? " : " Already ragistered ?"}&nbsp;{" "}
          <span className="underline font-semibold">
            {isSignInForm ? "Sign up" : "Sign In"}
          </span>
        </p>

      </form>
    </div>
  );
};


export default Login;