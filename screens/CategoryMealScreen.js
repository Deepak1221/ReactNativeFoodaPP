import React from 'react';

import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Platform,
    FlatList
} from 'react-native';
import { MEALS } from "../data/DummyData";
import MealListItem from "../components/MealListItem";



const CategoryMealScreen = props =>{
   
    const listItem = props.navigation.getParam('item')
    console.log(listItem)
    const mealsList = MEALS.filter(meals =>
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