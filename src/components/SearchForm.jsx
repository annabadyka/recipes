import '../assets/css/SearchForm.css';
import {Form, useNavigation } from 'react-router-dom';

import { cuisineType } from '../assets/data/SearchFormCats';
import { dishType } from '../assets/data/SearchFormCats';

const SearchForm= ({searchIngredient, searchCuisineType, searchDishType})=> {
    const navigation = useNavigation(); 
    const isFormSubmitting = navigation.state ==='submitting';
   
    return(
        <section className='search-form'>
            <Form>
                <div className='inputBox'>
                    <label htmlFor='searchIngredient'>ingredient</label>
                    <input type='text' name='searchIngredient' id='searchIngredient' defaultValue={searchIngredient}/>
                </div>  
                <div className='inputBox'>
                    <label htmlFor='searchCuisineType'>Cuisine Type</label>
                    <select name='searchCuisineType' id='searchCuisineType' defaultValue={searchCuisineType}>
                    {
                        cuisineType.map((type, index)=>{
                            return(
                                <option value={type.value} key={index}>{type.name}</option>
                            );
                        })
                    } 
                    </select>
                </div>
                <div className='inputBox'>
                    <label htmlFor='searchDishType'>Dish Type</label>
                    <select name='searchDishType' id='searchDishType' defaultValue={searchDishType}>
                    {
                        dishType.map((type, index)=>{
                            return(
                                <option value={type.value} key={index}>{type.name}</option>
                            );
                        })
                    } 
                    </select>
                </div>
                <input type='submit' value={isFormSubmitting ? 'searching' : 'search'} disabled={isFormSubmitting} className='btn' />
            </Form>
            </section>
      );
  };
  
  export default SearchForm;