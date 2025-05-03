// src/components/auth/FacebookLoginButton.js

"use client";

import React from "react";
import { FacebookLogin } from "@react-oauth/facebook";
import { AiOutlineFacebook } from "react-icons/ai";
import { postData } from "@/lib/axios";
import { toast } from "react-toastify";

const FacebookLoginButton = ({ onSuccess }) => {
  const facebook_app_id = process.env.NEXT_PUBLIC_FACEBOOK_APP_ID;

  const handleFacebookLogin = async (response) => {
    // Log the response to check the access token
    console.log("Facebook login response:", response);

    try {
      // Send the token to your backend for authentication
      const res = await postData("/auth/facebook", {
        token: response.access_token,
      });
      console.log("Facebook login successful:", res);

      if (res.results.token) {
        toast.success("Login successful!");
        localStorage.setItem("authToken", res.results.token);
        if (onSuccess) onSuccess(res.results.token);
      }
    } catch (error) {
      toast.error("Facebook login failed");
    }
  };

  return (
    <FacebookLogin
      scope="public_profile,email" // Add the required scopes for Facebook login
      appId={facebook_app_id} // Your Facebook App ID
      onSuccess={handleFacebookLogin} // Handle the login response
      onError={(error) => {
        console.log("Error during Facebook login:", error);
        toast.error("Facebook login failed");
      }}
      render={(props) => (
        <button
          {...props}
          className="w-full flex items-center justify-center py-2 px-4 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 focus:outline-none mt-2"
        >
          <AiOutlineFacebook className="mr-2" />
          Continue with Facebook
        </button>
      )}
    />
  );
};

export default FacebookLoginButton;
