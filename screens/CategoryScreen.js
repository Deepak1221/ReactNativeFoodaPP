import React from 'react';
import {  View,Text,FlatList,StyleSheet ,Dimensions} from "react-native";
import { CATEGORIES } from "../data/DummyData";
import CategoryGridItem from "../components/CategoryGridItem";


const CategoryScreen = props =>{
    const renderGridItem = (itemData) =>{
        return( <CategoryGridItem item= { itemData.item} onSelect={()=> {
            props.navigation.navigate('CategoryMealScreen' , {item:itemData.item})
        }}/>
        )
        }

    return(
        <FlatList
        data={CATEGORIES}
        keyExtractor={(item,index)=>item.id}
        renderItem= {renderGridItem}
        numColumns={2}
        />
    )
};

CategoryScreen.navigationOptions = (navigationData)=> {
    return{
        headerTitle:"Category"
     }
    
}
const styles = StyleSheet.create({
    styleListItem:{
    fontSize:25,
    justifyContent:'center',
    alignItems:'center',
    flex: 1,
    height:150,
    margin:10,
    backgroundColor:"#cccccc",
    textAlignVertical:'center'
     
    },
    styleItemContainer:{
        flex: 1,
       width: Dimensions.get('window').width/2,
       justifyContent:'center',
       alignItems:'center',
       
  

    }
})

export default CategoryScreen
