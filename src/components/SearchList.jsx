import SearchItem from './SearchItem';
import axios from 'axios';
import {useEffect} from 'react';
import '../assets/css/SearchList.css';

const SearchList= ({hits})=> {
 if(hits.length==0){
  return (
      <div className='search_no_results'>No resuts found. Please try again.</div>        
     );
}
 
    return(
        <div className='search_cont'>
          {
            hits.map((hit, index)=>{
              return(
                <div className='search_card' key={index}>
                  <SearchItem hit={hit}/>
                </div>
              );
            })
          }    
        </div>
      );
  };
  
  export default SearchList;
 