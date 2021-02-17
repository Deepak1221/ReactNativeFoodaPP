import React from 'react';
import {  View,Text,FlatList,StyleSheet ,Dimensions,TouchableOpacity,Image} from "react-native";
import { CATEGORIES } from "../data/DummyData";
import CategoryGridItem from "../components/CategoryGridItem";
import { ICONS } from "../contstant/icons";
import { COLORS } from "../contstant/Colors";

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
        headerTitle:"Category",
        headerLeft: (
            <TouchableOpacity onPress={()=>{
                navigationData.navigation.toggleDrawer()
                }}>
                <Image
                source= {ICONS.menu}
                resizeMode="contain"
                style={styles.favIconStyle}
                />
        
            </TouchableOpacity>
          ),
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
       
  

    },
    favIconStyle:{
        width: 22,
        height: 22,
        marginLeft:10,
        tintColor:COLORS.white
    }
})

export default CategoryScreen
