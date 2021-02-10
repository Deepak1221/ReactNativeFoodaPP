import React from 'react';

import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    TouchableNativeFeedback,
    Platform,
    Image
} from 'react-native';
import { COLORS } from '../contstant/Colors';

const MealListItem = props=>{
    const itemToRender = props.item
    let TouchContainerComp = TouchableOpacity
    if(Platform.OS==='android' && Platform.Version>=21){
        TouchContainerComp   = TouchableNativeFeedback
    }
    return(
        <View style={styles.styleContainer}>
            <TouchContainerComp   onPress={props.onMealSelect}>
                <View style={styles.styleItemContainer}>
                    <Image
                        style={styles.imageStyle}
                        source={{ uri: itemToRender.imageUrl }}
                    />
                    <View style={styles.overlayStyle}></View>
                    <View style={styles.txtContainerStyle}>
                        <Text style={styles.txtStyle} numberOfLines={1}>
                            {itemToRender.title}
                        </Text>
                    </View>
                </View>
            </TouchContainerComp>
        </View>
    )
    }

    const styles = StyleSheet.create({
        styleContainer: {
            flex: 1,
            borderRadius:10,
            height:200,
            margin:10,
        },
      styleItemContainer:{
           flex: 1,
           width:'100%',
           borderRadius:10,
           shadowColor:'blue',
           shadowRadius:8,
           shadowOpacity: 0.40,
           textShadowOffset:{width:2 , height:2},
           elevation:8 ,
           backgroundColor:'#f5f5f5',
            
        },
        imageStyle:{
           width:'100%',
           height:"100%",
           borderRadius:10
     
        },
        overlayStyle:{
            width: '100%',
            height: "100%",
            flex: 1,
            position: 'absolute',
            left: 0,
            top: 0,
            opacity: 0.5,
            backgroundColor: 'black',
            borderRadius:10,
            justifyContent:'flex-end'
      
         },
         txtStyle:{
            fontSize:20,
            color: COLORS.white,
            position:'absolute',
            padding:4,
            fontWeight:'bold',
            alignItems:'center',
            margin:8
         },
         txtContainerStyle:{
            flex: 1,
            borderRadius:10,
            justifyContent:'flex-end'
      
         },
         styleContainerHorizontal:{
            flex: 1,
            flexDirection:'column',
            justifyContent:'space-around'
      
         },
    })
    export default MealListItem