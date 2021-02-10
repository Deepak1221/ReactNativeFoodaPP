import React from 'react';
import { HeaderButton } from "react-navigation-header-buttons";
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS } from "../contstant/Colors";
import {  Platform} from "react-native";

const CustomHeaderButtom = props =>{
return <HeaderButton  {...props}
 IconComponent={Ionicons}
 iconSize={23}
 color= {Platform.OS==='android'? COLORS.white : COLORS.primary}
  />
}

export default CustomHeaderButtom