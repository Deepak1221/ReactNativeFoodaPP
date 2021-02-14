import React from 'react';

import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Platform,
    FlatList
} from 'react-native';
import MealListItem from "../components/MealListItem";
import {  useSelector} from "react-redux";



const CategoryMealScreen = props =>{
    const availableMeals = useSelector(state =>state.meals.filteredMeals )
    const listItem = props.navigation.getParam('item')
    const mealsList = availableMeals.filter(meals =>
        meals.categoryIds.indexOf(listItem.id)>=0

    )
    //console.log(mealsList)
   // alert(mealsList)

    const renderItemList = itemData =>{
        return (
            <MealListItem  item ={itemData.item}  onMealSelect={()=>{
                props.navigation.navigate({routeName : 'MealDetailScreen' , params: {
                    item: itemData.item
                  }
                })
             

            }}/>
          
        )
    }
    return(
        <FlatList
            data={mealsList}
            keyExtractor={(item , index)=>item.id }
            renderItem={renderItemList}
        />
     )
}

CategoryMealScreen.navigationOptions= navigationdata =>{
    const listItem = navigationdata.navigation.getParam('item');

    return{
        headerTitle: listItem.title,
        }
}

export default CategoryMealScreen