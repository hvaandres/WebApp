import React from "react";
import profilePicture from "../../../static/assets/images/bio/headshot.jpg";

export default function() {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "left"
        }}
      />
      <div className="right-column">
        My name is Alan Andres Haro, I am a UX Developer with a passion for solving issues.
        I currently have some experience as a Software and Web Developer, User Experience and User Interface Designer. Also, I love to work hard and put a lot of effort into things that I do not know yet. 
        For the same reason, I always like to become part of every problem to be able to be part of the solution. 

        If you have a project that you would like to build or if you are looking for someone to hire, please contact me and I will get in touch with you as soon as possible.

      </div>
    </div>
  );
}
