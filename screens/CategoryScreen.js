import React from 'react';
import {  View,Text,FlatList,StyleSheet ,Dimensions,TouchableOpacity} from "react-native";
import { CATEGORIES } from "../data/DummyData";


const CategoryScreen = props =>{
    const renderGridItem = (itemData) =>{
        return(
            <TouchableOpacity onPress={()=> props.navigation.navigate('CategoryMealScreen' , {item:itemData.item})}>
            <View style={styles.styleItemContainer}>
                <Text style={styles.styleListItem}>{itemData.item.title}</Text>
            </View>
            </TouchableOpacity>
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
