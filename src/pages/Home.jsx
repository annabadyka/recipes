import SearchList from '../components/SearchList'; 
import { useLoaderData } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import '../assets/css/Home.css';

import axios from 'axios';
import SearchForm from '../components/SearchForm';

const searchRecipesQuery = (searchIngredient, searchCuisineType, searchDishType) =>{
  let url = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${import.meta.env.VITE_APP_ID}&app_key=${import.meta.env.VITE_API_KEY}&imageSize=LARGE&field=uri&field=label&field=images&field=source&field=healthLabels&field=cautions&field=ingredientLines&field=calories&field=cuisineType&field=mealType&field=dishType&q=${searchIngredient}`;
 if (searchCuisineType && searchCuisineType!=''){url+= `&cuisineType=${searchCuisineType}`;}
 if (searchDishType && searchDishType!=''){url+= `&dishType=${searchDishType}`;}
  return {
    queryKey : ['search', searchIngredient || 'all_ingred', searchCuisineType || 'all_cuisine', searchDishType || 'all_dish'], 
    queryFn: async ()=>{
      const response = await axios.get(url);
      return response.data.hits;
    }
  }
}
export const loader = (queryClient) => async({request}) => {//request form url. search form
  const url = new URL(request.url);
  const searchIngredient= url.searchParams.get('searchIngredient') || '';
  const searchCuisineType= url.searchParams.get('searchCuisineType') || '';
  const searchDishType= url.searchParams.get('searchDishType') || '';
  await queryClient.ensureQueryData(searchRecipesQuery(searchIngredient, searchCuisineType, searchDishType));//check whether the value is cache. If not, fetch
  return {searchIngredient, searchCuisineType, searchDishType};
}

const Home = ()=> {
  const {searchIngredient, searchCuisineType, searchDishType} = useLoaderData();
  const {data: hits}  = useQuery(searchRecipesQuery(searchIngredient, searchCuisineType, searchDishType)); //renamed to hits

  return(
         <>
          <section className='home_hero'>
              <div className='heading-section'>
              <h1>find best recipes</h1>
              </div>
             <SearchForm searchIngredient={searchIngredient} searchCuisineType ={searchCuisineType} searchDishType={searchDishType}/>
          </section>
          <section className='container'>
              <section className='search_results'>
              <div className='heading-section'>
                  <span>start your adventure</span>
                  <h2>Delicious recipes</h2>
              </div>
              <SearchList hits={hits}/>
              </section>
          </section>
          </>    
      );
  };
  
  export default Home;