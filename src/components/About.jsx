import "./nav.css"
import image from "../images/img2.jpg";

const About = () => {
    return (
        <div className="div2">
             <h1>This is About page</h1>
             <div>
                 <img src={image}  width="100%" height="500px" />
             </div>
        </div>
       
    );
  };
  
  export default About;