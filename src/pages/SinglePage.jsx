import '../assets/css/Single.css';
import { FaChevronLeft, FaRegPenToSquare, FaCarrot, FaHeartPulse, FaFire, FaEarthEurope} from "react-icons/fa6";
import { useLoaderData, Navigate } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';

import axios from 'axios';

import fallbackImage from '../assets/imgs/default_img.jpg';
 
const singleRecipeQuery = (id) =>{
    return {
        queryKey: ['recipe', id], 
        queryFn: async () => {
            const {data} = await axios.get(`https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=${import.meta.env.VITE_APP_ID}&app_key=${import.meta.env.VITE_API_KEY}&field=uri&field=label&field=images&field=source&field=healthLabels&field=cautions&field=ingredientLines&field=calories&field=cuisineType&field=mealType&field=dishType`);//url
            return data;
        }
    }
}
export const loader= (queryClient) =>async({params})=>{
  const {id} = params;//id recipe in the params object
  await queryClient.ensureQueryData(singleRecipeQuery(id));//check whether the value is cache. If not, fetch
  return {id};
}

const SinglePage = ()=> { 
   const {id} = useLoaderData();
   const {data} =useQuery(singleRecipeQuery(id));
   if (!data) return <Navigate to='/' />;
    const singleRecipe=data.recipe;

    const handleError=(event)=>{
        event.target.src = fallbackImage;
        event.onerror = null;      
    }
    const handleBackHome =()=>{
        window.history.back();
    }
    return(
           <>
            <section className="single-secondary">
                  <div className="heading-section">
                    <h2>{singleRecipe?.label}</h2>
                    </div>
            </section>
            <section className="container">                
                <section className="single">                    
                   <section className="single-top-cont">                   
                        <p className="btn_link_cont">
                            <button className="btn_link" onClick={handleBackHome}><i className="fa fa-angle-right"><FaChevronLeft/></i> back to search </button>
                        </p>
                    </section>
                    
                   <section className="single-calories">
                        <div className="calories-info"><div><i><FaCarrot/></i> </div> <div>{singleRecipe?.calories.toFixed(2)} <span>K</span></div></div> 
                        <div className="source-info"><div><i><FaEarthEurope/></i></div><div><span>By </span>{singleRecipe?.source}</div></div>
                  </section>
                    <div className="single-top">                         
                            <div className="image_cont">
                                <img src={singleRecipe?.images?.LARGE?.url} alt={singleRecipe?.label} onError={handleError} /> 
                                {singleRecipe?.dishType && <div className="card-type">
                                    {singleRecipe.dishType.map((type, index)=>{
                                        return (
                                            <span key={index}> 
                                                {type}{(singleRecipe.dishType.length -1) == index ? '': ', '} 
                                            </span>
                                        );
                                    })}   
                                    </div> 
                                }                        
                                {singleRecipe?.cuisineType && <div className="cuisineType">
                                    {singleRecipe.cuisineType.map((type, index)=>{
                                        return (
                                            <span key={index}> 
                                                {type}{(singleRecipe.cuisineType.length -1) == index ? '': ', '} 
                                            </span>
                                        );
                                    })}   
                                    </div>                                   
                                } 
                                {singleRecipe?.mealType && <div className="mealType">
                                    {singleRecipe.mealType.map((type, index)=>{
                                        return (
                                            <span key={index}> 
                                                {type}{(singleRecipe.mealType.length -1) == index ? '': ', '} 
                                            </span>
                                        );
                                    })}   
                                    </div>                                   
                                }                                 
                            </div> 
                        
                        
                        <div className="ingredients-info">
                            <h3>Ingredients</h3>
                            <div className="ingredients-info-spec">
                                {                                     
                                    singleRecipe?.ingredientLines?.map((ingred, index)=>{
                                        return(
                                            <p key={index}><i><FaRegPenToSquare/></i> {ingred}</p> 
                                        );
                                    })                                                                   
                                } 
                            </div>
                        </div> 
                    </div>
                    <div className="single-bottom">
                    {(singleRecipe?.healthLabels && singleRecipe?.healthLabels.length > -1 )&& <div className="health-info">
                            <h3>Health Labels</h3>
                            <div className="health-info-spec">
                            {                                     
                                    singleRecipe?.healthLabels?.map((label, index)=>{
                                        return(
                                            <span key={index}><i><FaHeartPulse/></i> {label}</span> 
                                        );
                                    })                                                                     
                                }  
                            </div>                              
                        </div> 
                    }  
                    
                    {(singleRecipe?.cautions && singleRecipe?.cautions.length > -1 ) && <div className="caution-info">
                            <h3>Caution</h3>
                            <div className="caution-info-spec">
                            {                                     
                                singleRecipe?.cautions?.map((caution, index)=>{
                                    return(
                                        <span key={index}><i><FaFire/></i> {caution}</span> 
                                    );
                                })                                                                   
                            } 
                            </div>
                        </div>
                    }     
                    </div>                   
                </section>
            </section>
        </>
      );
  };
  
  export default SinglePage;