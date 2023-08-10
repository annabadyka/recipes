import '../assets/css/Banner.css';
import {FaQuoteLeft, FaQuoteRight} from "react-icons/fa6";


const Banner= ()=> {
    return(
        <section className="banner">
            <div className="banner-section">
                <p>
                    <i className="quote"><FaQuoteLeft/></i>
                    <span className="quote_phrase">Let food be thy medicine and medicine be thy food.</span>
                    <i className="quote"><FaQuoteRight/></i>
                </p> 
                <p className="quote_author">Hippocrates</p>                                    
            </div>
        </section>
      );
  };
  
  export default Banner;