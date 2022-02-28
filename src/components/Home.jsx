import React from "react";
import image from "../images/img1.jpg";
import "./nav.css"



const Home = () => {
  return (
    <div  className="div1">
       <h1>This is Home page</h1>
       <div>
         <img src={image}  width="100%" height="500px" />
       </div>
    </div>
       
  );
};

export default Home;