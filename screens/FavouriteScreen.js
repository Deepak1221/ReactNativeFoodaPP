import React from 'react';
import {  View,Text,FlatList,StyleSheet ,Dimensions } from "react-native";
import {  useSelector} from "react-redux";
import MealListItem from "../components/MealListItem";

const FavouriteScreen = props =>{
    const favMeals = useSelector(state =>state.meals.favouriteMeals )

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
    if(favMeals.length===0 || !favMeals){
        return(
            <View style={styles.styelContainer}>
                <Text style={styles.styelEmptyText}>No Favourite Found</Text>
            </View>
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

const styles= StyleSheet.create({
    styelContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    
    },
    styelEmptyText:{
        fontSize:25,
        fontWeight:'bold',
    
 
    }
})
export default FavouriteScreen