import React from 'react';

import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Platform
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';



const CategoryMealScreen = props =>{
    const listItem = props.navigation.getParam('item')
    return(
        <View>
            <Text>{listItem.title}</Text>
        </View>
    )
}

CategoryMealScreen.navigationOptions= navigationdata =>{
    const listItem = navigationdata.navigation.getParam('item');

    return{
        headerTitle: listItem.title,
        }
}

export default CategoryMealScreen