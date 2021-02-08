import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createNavigator } from "react-navigation";
import CategoryMealScreen from "../screens/CategoryMealScreen";
import CategoryScreen from "../screens/CategoryScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import { COLORS } from "../contstant/Colors";

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

export default createAppContainer(MealNavigator);