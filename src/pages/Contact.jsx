import '../assets/css/Contact.css';
import ContactForm from '../components/ContactForm';

import img_contact from '../assets/imgs/img_contact.jpg';

const Contact = ()=> {
    return(
        <>
            <section className="hero-secondary">
            <div className="content">
                <h1>contact</h1>
            </div>
            </section>
            <section className="container">
                <section className="contact">
                    <div className="heading-section">
                        <span>get in touch</span>
                        <h2>contact us</h2>
                    </div>
                    <ContactForm/>
                    <div className="image">
                    <img src={img_contact} alt="" />
                    </div>
                </section>
            </section>    
        </>
      );
  };
  
  export default Contact;