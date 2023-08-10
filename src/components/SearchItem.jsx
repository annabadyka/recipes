import {Link } from 'react-router-dom';
import fallbackImage from '../assets/imgs/default_img.jpg';

const SearchItem= ({hit})=> {
    const id=hit.recipe?.uri?.split('#')[1]; 
    const handleError=(event)=>{
        event.target.src = fallbackImage;
        event.onerror = null;      
    }
    return(
       <>
             {hit.recipe?.images?.LARGE?.url && 
             <Link to={`/single/${id}`}>
             <div className="image">
               <img src={hit.recipe.images.LARGE.url} alt={hit.recipe?.label} onError={handleError}/>
                  {hit.recipe?.dishType && <div className="card-type">
                    {hit.recipe.dishType.map((type, index)=>{
                        return (
                            <span key={index}> 
                                {type}{(hit.recipe.dishType.length -1) == index ? '': ', '} 
                            </span>
                        );
                    })}
                </div>}
                {hit.recipe?.cuisineType && <div className="cuisineType">
                    {hit.recipe.cuisineType.map((type, index)=>{
                        return (
                            <span key={index}> 
                                {type}{(hit.recipe.cuisineType.length -1) == index ? '': ', '} 
                            </span>
                        );
                    })}
                </div>}
                 
                {hit.recipe?.mealType && <div className="mealType">
                    {hit.recipe.mealType.map((type, index)=>{
                        return (
                            <span key={index}> 
                                {type}{(hit.recipe.mealType.length -1) == index ? '': ', '} 
                            </span>
                        );
                    })}
                </div>}
            </div>            
            <div className="content">
                <div><p className="search_card_title">{hit.recipe?.label}</p></div>
            </div>
            </Link>
            }
       </>
      );
  };
  
  export default SearchItem;