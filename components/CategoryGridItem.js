import React from 'react';

import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    TouchableNativeFeedback,
    Platform
} from 'react-native';

const CategoryGridItem = props=>{
    let TouchContainerComp = TouchableOpacity
    if(Platform.OS==='android' && Platform.Version>=21){
        TouchContainerComp   = TouchableNativeFeedback
    }
    return(
        <View style={styles.styleContainer}>
            <TouchContainerComp  onPress={props.onSelect}>
                <View style={{ ...{ backgroundColor: props.item.color }, ...styles.styleItemContainer }}>
                    <Text style={styles.styleListItem}>{props.item.title}</Text>
                </View>
            </TouchContainerComp>
          </View>
    )
    }

    const styles = StyleSheet.create({
        styleContainer: {
            flex: 1,
            borderRadius:8,
            height:150,
            margin:10,
        },
        styleListItem:{
        fontSize:25,
        flex: 1,
        margin:10,
        textAlign:'right'
       },
        styleItemContainer:{
           flex: 1,
           borderRadius:8,
           shadowColor:'blue',
           shadowRadius:8,
           shadowOpacity: 0.40,
           textShadowOffset:{width:2 , height:2},
           elevation:8,
           padding:10,
           justifyContent:'flex-end',
           alignItems:'flex-end'   
        }
    })
    export default CategoryGridItem