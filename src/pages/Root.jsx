import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Footer from '../components/Footer'; 
import { Outlet, useNavigation } from 'react-router-dom'; 
 
const Root = ()=> {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';
   return(
    <>       
        <Navbar/>        
        {isPageLoading ? (
        <section className='loading_container'><div className='loading'></div></section>
        ) : (
          <section className='container'> 
          <Outlet/>
          <Banner/>
          <Footer/> 
          </section>          
        )} 
         
    </>  
    );
};
export default Root;