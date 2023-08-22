import '../assets/css/About.css';
import img_about from '../assets/imgs/img_about.jpg';
import edamam_logo from '../assets/imgs/edamam_logo.svg';
import { ScrollRestoration } from 'react-router-dom';

const About = ()=> {
    return(
        <>
          <ScrollRestoration />
            <section className='hero-secondary'>
                <div className='content'>
                <h1>about</h1>
                </div>
            </section>
            <section className='container'>
                <section className='about'>
                    <div className='image'>
                        <img src={img_about} alt='' />
                    </div>
                    <div className='heading-section'>
                        <span>start your adventure</span>
                        <h2>find best recipes</h2>
                        <p>Find best recipes on our site. We have a collection of recipes worldwide.</p>
                        <p>This site is powered by Edamam B2B API. </p>                     
                    </div>
                </section>
            </section>
        </>
      );
  };
  
  export default About;