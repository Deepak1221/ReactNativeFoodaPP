/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React ,{useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
// import { AppLoading } from "expo-app-loading";
// import * as Font  from "expo-font";
import MealNavigator from "./navigations/Mealsnavigator";

const fetchFonts =()=>{
  Font.loadAsync({
    'font_regular': require('./asserts/fonts/font_regular.ttf'),
    'font_medium': require('./asserts/fonts/font_medium.ttf'),
    'font_bold': require('./asserts/fonts/font_bold.ttf')
  })
}
const App = props => {
  // const [fontLoaded , setFontLoaded] = useState(true)

  // if (!fontLoaded) {
  //   return (
  //     <AppLoading
  //       startAsync={fetchFonts}
  //       onFinish={() => setFontLoaded(true)}
  //       onError={(err) => console.log(err)}
  //     />
  //   );
  // }
 
  return (
    <MealNavigator/>
 );
};


const styles = StyleSheet.create({
  styleTxt : {
    fontFamily:"font_bold",
    fontSize:30
  }
})
export default App;
