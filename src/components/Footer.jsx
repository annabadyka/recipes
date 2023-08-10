import '../assets/css/Footer.css';
import { FaGithub, FaLinkedinIn} from "react-icons/fa6";
import edamam_logo from '../assets/imgs/edamam_logo.svg';

const Footer = ()=> {
    return(
        <section className="container">
            <section className="footer">
                <div className="box-container">  
                    <a href="https://github.com/annabadyka" className="fab fa-instagram" target="_blank" ><FaGithub/></a>
                    <a href="https://www.linkedin.com/in/anna-badyka-karpenko/" className="fab fa-linkedin" target="_blank" ><FaLinkedinIn/></a>
                </div>
                <div className="box-container">
                    &copy; World of Recipes. 2023 | All rights reserved.
                </div>
                <div className="sponsor_logo">                
                    <a href="http://developer.edamam.com" target="_blank"><img src={edamam_logo}/></a>                 
                </div>                
            </section>
        </section>
      );
  };
  
  export default Footer;