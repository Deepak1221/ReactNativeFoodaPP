import { Platform ,Text } from 'react-native';
import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer, createNavigator } from "react-navigation";
import CategoryMealScreen from "../screens/CategoryMealScreen";
import CategoryScreen from "../screens/CategoryScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import { COLORS } from "../contstant/Colors";
import FavouriteScreen from "../screens/FavouriteScreen";
import { Icon } from 'react-native-elements'
const MealNavigator = createStackNavigator({
    CategoryScreen: {
        screen: CategoryScreen
    },
    CategoryMealScreen: {
        screen: CategoryMealScreen
    },

    MealDetailScreen: {
        screen: MealDetailScreen
    }
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? COLORS.primary : COLORS.white
        },
        headerTintColor: Platform.OS === 'android' ? COLORS.white : ''
    }
}
);

const FavNavigator = createStackNavigator({
    Favourite: {
        screen: FavouriteScreen
    },

}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? COLORS.primary : COLORS.white
        },
        headerTintColor: Platform.OS === 'android' ? COLORS.white : ''
    }
}
);

const MealBottomTabNavigator = createBottomTabNavigator({
    Home:  { 
        screen: MealNavigator , navigationOptions:{
        //     tabBarIcon:(tabInfo)=>{
        //   return <Text> Hii</Text>
        //     }
        }
    }
     ,
    Favourite:{
        screen: FavNavigator
    }
},{tabBarOptions:{
    activeTintColor:'black',

}});

export default createAppContainer(MealBottomTabNavigator);