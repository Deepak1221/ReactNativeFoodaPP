import React ,{useState, useEffect,useCallback}from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {  View,Text,StyleSheet ,Image,ScrollView,TouchableOpacity, Switch, Platform} from "react-native";
 
import { ICONS } from "../contstant/icons";
import { COLORS } from "../contstant/Colors";
import {  setFilters } from "../store/actions/meals";
 
 const FilterSwitch = props => {
    return (
      <View style={styles.filterContainer}>
        <Text>{props.label}</Text>
        <Switch
          trackColor={{ true: COLORS.black , false: 'grey'}}
          thumbColor={Platform.OS === 'android' ? COLORS.primary : ''}
          value={props.state}
          onValueChange={props.onChange}
        />
      </View>
    );
  };
  
  const FilterScreen = props => {
    const { navigation } = props;
  
    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);
    const dispatch = useDispatch();
    
    const saveFilters = useCallback(() => {
      const appliedFilters = {
        glutenFree: isGlutenFree,
        lactoseFree: isLactoseFree,
        vegan: isVegan,
        isVegetarian: isVegetarian
      };
  
      dispatch(setFilters(appliedFilters));
    }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian,dispatch]);
  
    useEffect(() => {
      navigation.setParams({ save: saveFilters });
    }, [saveFilters]);
  
    return (
      <View style={styles.screen}>
        <Text style={styles.title}>Available Filters / Restrictions</Text>
        <FilterSwitch
          label="Gluten-free"
          state={isGlutenFree}
          onChange={newValue => setIsGlutenFree(newValue)}
        />
        <FilterSwitch
          label="Lactose-free"
          state={isLactoseFree}
          onChange={newValue => setIsLactoseFree(newValue)}
        />
        <FilterSwitch
          label="Vegan"
          state={isVegan}
          onChange={newValue => setIsVegan(newValue)}
        />
        <FilterSwitch
          label="Vegetarian"
          state={isVegetarian}
          onChange={newValue => setIsVegetarian(newValue)}
        />
      </View>
    );
  };
  
  FilterScreen.navigationOptions = navData => {
    return {
      headerTitle: 'Filter Meals',
      headerLeft: (
        <TouchableOpacity onPress={()=>{
            navData.navigation.toggleDrawer()
            }}>
            <Image
            source= {ICONS.menu}
            resizeMode="contain"
            style={styles.favIconStyle}
            />
    
        </TouchableOpacity>
      ),
      headerRight: (
         <TouchableOpacity   onPress={navData.navigation.getParam('save')}>        
            <View>
            <Text style={styles.titleSave
            }>
                SAVE
            </Text>
        </View>
         </TouchableOpacity>
          )
      
   
    };
  };
  
  const styles = StyleSheet.create({
    screen: {
      flex: 1,
      alignItems: 'center'
    },
    title: {
      fontFamily: 'font_bold',
      fontSize: 22,
      margin: 20,
      textAlign: 'center'
    },
    filterContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '80%',
      marginVertical: 15
    },
    favIconStyle:{
        width: 22,
        height: 22,
        marginLeft:10,
        tintColor:COLORS.white
    },
    titleSave: {
      fontFamily: 'font_bold',
      fontSize: 16,
      marginRight: 10,
      textAlign: 'center',
      color:COLORS.white
    }
  });
  
  export default FilterScreen;