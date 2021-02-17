import React ,{useEffect, useCallback}from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {  View,Text,StyleSheet ,Image,ScrollView,TouchableOpacity} from "react-native";
import {toggleFavorite } from '../store/actions/meals'
import { ICONS } from "../contstant/icons";
import { COLORS } from "../contstant/Colors";


const MealDetailScreen = props =>{
    const availableMeals = useSelector(state=> state.meals.meals)
    const listItem = props.navigation.getParam('item')
    const mealId = listItem.id
    const isFav = useSelector(state => 
        state.meals.favouriteMeals.some(m=> m.id === mealId)
        );
    const selectedMeal = availableMeals.find(meal => meal.id == mealId)
    console.log(availableMeals +" : "+listItem+" : "+mealId+" : "+selectedMeal)

    const dispatch = useDispatch();
    const togglefavouriteHandler=useCallback(()=>{
     dispatch(toggleFavorite(mealId));
    },[dispatch,mealId])
  
    useEffect( () =>{
    //  props.navigation.setParams({mealTitle: selectedMeal.title});
    props.navigation.setParams({toggleFav: togglefavouriteHandler })
    },[togglefavouriteHandler])

useEffect(()=>{
    props.navigation.setParams({isFav: isFav});
},[isFav])
    return(
        <ScrollView style={styles.container}>
            <Image
                source={{ uri: selectedMeal.imageUrl }}
                style={styles.imageStyle}               
            />
            <View style={styles.containerCard}>
                <Text style={styles.txtTitleStyle}>Ingredients</Text>
                <View style={styles.horizontalContainerStyle}> 
                {selectedMeal.ingredients.map(ingredients =>{
                    return (
                        <Text style={styles.itemTxtStyle} key={ingredients}>{ingredients}</Text>
                    )
                })
                }
                </View>
            </View>

            <View style={styles.containerCard}>
                <Text style={styles.txtTitleStyle}>Steps</Text>
                <View style={styles.horizontalContainerStyle}> 
                {listItem.steps.map((steps ,index) =>{
                    return (
                        <Text style={styles.itemTxtStyle} key={steps}>{(index+1+") " ) +steps}</Text>
                    )
                })
                }
                </View>
            </View>

          
        </ScrollView>
    );
};

MealDetailScreen.navigationOptions = navigationdata => {
    const listItem = navigationdata.navigation.getParam('item');
    const mealTitle = navigationdata.navigation.getParam('mealTitle');
    const toggleFavorite = navigationdata.navigation.getParam('toggleFav')
    const isFav = navigationdata.navigation.getParam('isFav')
 
    return {
        headerTitle: mealTitle,
        headerRight: (
            <TouchableOpacity onPress={toggleFavorite}>
                <Image
                source= {isFav ? ICONS.heartSelected:ICONS.heartUnSelected}
                resizeMode="contain"
                style={styles.favIconStyle}
                />
        
            </TouchableOpacity>
          ),
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1 
    },
    imageStyle:{
        width:'100%',
        height:200,
     
     } ,
     txtTitleStyle:{
         fontSize:18,
         fontWeight:'bold',
         marginBottom:10,
         marginTop:10

     }
     ,
     horizontalContainerStyle:{
         flexDirection:'row',
          
         flexWrap: 'wrap'        

     },
     itemTxtStyle:{
         fontSize:15,
         borderColor:"#cccccc",
         borderRadius:50,
         paddingLeft:13,
         paddingTop:9,
         paddingRight:13,
         paddingBottom:9,
         margin:4,
         borderWidth:1

     },
     containerCard:{
        
        margin:10 ,
        backgroundColor:"#ffffff",
        padding:10,
        borderTopEndRadius:30,
        borderTopStartRadius:30,
        

    },
    favIconStyle:{
        width: 25,
        height: 25,
        marginRight:10,
        tintColor:COLORS.white
    }
})
export default MealDetailScreen
