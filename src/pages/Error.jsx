import '../assets/css/Error.css';
import error_img from '../assets/imgs/error_img.jpg';
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Footer from '../components/Footer'; 

import { useRouteError } from "react-router-dom";

import img_contact from '../assets/imgs/error_img.jpg';


const Error = ()=> {
    const error = useRouteError();
    return(
        <>
        <Navbar/>
        <section className="hero-secondary">
            <div className="content">
                <h1 className="error-colored">Oops!</h1>
            </div>
        </section>
        <section className="container">
            <section className="error">
                <div className="heading-section">
                      <h2>Sorry, an unexpected error has occurred.</h2>
                      <h3>
                            {error.statusText || error.message}
                      </h3>
                      <p><Link to={'/'} className="btn">back home</Link></p>
                </div>
                <div className="image">
                <img src={img_contact} alt="" />
                </div>   
            </section>
        </section> 
        <Banner/>
        <Footer/>     
    </>
      );
  };
  
  export default Error;