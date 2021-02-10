import React from 'react';
import {  View,Text,StyleSheet ,Image,ScrollView} from "react-native";



const MealDetailScreen = props =>{
    const listItem = props.navigation.getParam('item')
    console.log('Deepak',listItem)
    console.log("image:",listItem.imageUrl )

    return(
        <ScrollView style={styles.container}>
            <Image
                source={{ uri: listItem.imageUrl }}
                style={styles.imageStyle}               
            />
            <View style={styles.containerCard}>
                <Text style={styles.txtTitleStyle}>Ingredients</Text>
                <View style={styles.horizontalContainerStyle}> 
                {listItem.ingredients.map(ingredients =>{
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
 
    return {
        headerTitle: listItem.title,
        headerRight: (
            <Text>FAV</Text>
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
})
export default MealDetailScreen
