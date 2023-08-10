import '../assets/css/SearchForm.css';
import {Form, useNavigation } from 'react-router-dom';

const SearchForm= ({searchIngredient, searchCuisineType, searchDishType})=> {
    const navigation = useNavigation(); 
    const isFormSubmitting = navigation.state ==='submitting';
   
    return(
        <section className="search-form">
            <Form>
                <div className="inputBox">
                    <label htmlFor="searchIngredient">ingredient</label>
                    <input type="text" name="searchIngredient" id="searchIngredient" defaultValue={searchIngredient}/>
                </div>  
                <div className="inputBox">
                    <label htmlFor="searchCuisineType">Cuisine Type</label>
                    <select name="searchCuisineType" id="searchCuisineType" defaultValue={searchCuisineType}>
                          <option value="">all</option>
                          <option value="american">american</option>
                          <option value="asian">asian</option>
                          <option value="chinese">chinese</option>
                          <option value="british">british</option>
                          <option value="caribbean">caribbean</option>
                          <option value="central europe">central europe</option>
                          <option value="eastern europe">eastern europe</option>
                          <option value="french">french</option>
                          <option value="greek">greek</option>
                          <option value="indian">indian</option>
                          <option value="italian">italian</option>
                          <option value="japanese">japanese</option>
                          <option value="korean">korean</option>
                          <option value="kosher">kosher</option>
                          <option value="mediterranean">mediterranean</option>
                          <option value="mexican">mexican</option>
                          <option value="middle eastern">middle eastern</option>
                          <option value="nordic">nordic</option>
                          <option value="south american">south american</option>
                          <option value="south east asian">south east asian</option>
                    </select>
                </div>
                <div className="inputBox">
                    <label htmlFor="searchDishType">Dish Type</label>
                    <select name="searchDishType" id="searchDishType" defaultValue={searchDishType}>
                          <option value="">all</option>
                          <option value="sweets">sweets</option>
                          <option value="bread">bread</option>
                          <option value="starter">starter</option>
                          <option value="special occasions">special occasions</option>
                          <option value="soup">soup</option>
                          <option value="side dish">side dish</option>
                          <option value="seafood">seafood</option>
                          <option value="sandwiches">sandwiches</option>
                          <option value="salad">salad</option>
                          <option value="preserve">preserve</option>
                          <option value="preps">preps</option>
                          <option value="pizza">pizza</option>
                          <option value="pies and tarts">pies and tarts</option>
                          <option value="pastry">pastry</option>
                          <option value="pasta">pasta</option>
                          <option value="pancake">pancake</option>
                          <option value="cereals">cereals</option>
                          <option value="main course">main course</option>
                          <option value="ice cream and custard">ice cream and custard</option>
                          <option value="condiments and sauces">condiments and sauces</option>
                          <option value="biscuits and cookies">biscuits and cookies</option>
                          <option value="alcohol cocktail">alcohol cocktail</option>
                    </select>
                </div>
                <input type="submit" value={isFormSubmitting ? 'searching' : 'search'} disabled={isFormSubmitting} className="btn" />
            </Form>
            </section>
      );
  };
  
  export default SearchForm;