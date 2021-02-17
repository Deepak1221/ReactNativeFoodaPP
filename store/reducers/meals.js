import { MEALS } from "../../data/DummyData";
import { TOGGLE_FAVORITE,SET_FILTERS } from "../actions/meals"
const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favouriteMeals: []
}

const mealReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITE:

            const existingIndex = state.favouriteMeals.findIndex(meal => meal.id === action.mealId)
            if (existingIndex >= 0) {
                const updatedFavMeals = [...state.favouriteMeals]
                updatedFavMeals.splice(existingIndex, 1);
                // state.favouriteMeals.filter(meal=> meal.id != action.mealId)
                return { ...state, favouriteMeals: updatedFavMeals }
            } else {
                const meal = state.meals.find(m => m.id === action.mealId)
                return { ...state, favouriteMeals: state.favouriteMeals.concat(meal) }
            }

            case SET_FILTERS:
                const appliedFilters = action.filters
                const filtredList = state.meals.filter(meal=>{
                    if(appliedFilters.glutenFree && !meal.isGlutenFree){
                        return false;
                    }
                    if(appliedFilters.lactoseFree && !meal.isLactoseFree){
                        return false;
                    }
                    if(appliedFilters.vegetarian && !meal.isVegetarian){
                        return false;
                    }
                    if(appliedFilters.vegan && !meal.isVegan){
                        return false;
                    }
                    return true
                })
                return {...state , filteredMeals:filtredList}

        default:
            return state;

    }
    return state;
}

export default mealReducer