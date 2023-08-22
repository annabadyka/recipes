import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Footer from '../components/Footer'; 
import { Outlet} from 'react-router-dom';

 
const Root = ()=> {
   return(
    <>       
        <Navbar/>
        <section className='container'>                
         <Outlet/>
        </section>
        <Banner/>
        <Footer/>    
    </>  
    );
};
export default Root;