import React from 'react';
import {  View,Text,FlatList,StyleSheet ,Dimensions } from "react-native";
import {  useSelector} from "react-redux";
import MealListItem from "../components/MealListItem";

const FavouriteScreen = props =>{
    const favMeals = useSelector(state =>state.meals.meals )

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
            data={favMeals}
            keyExtractor={(item , index)=>item.id }
            renderItem={renderItemList}
        />
     )
}

export default FavouriteScreen