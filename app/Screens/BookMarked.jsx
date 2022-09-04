import React, { useContext } from 'react';
import { FlatList, Image, SectionList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AppHeader from '../Components/AppHeader';
import SECTIONS from '../constant';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import ListingCard from '../Components/ListingCard';
import { Context } from '../Context';

const data = [
  {
    id: "1",
    name: "Nitin Malik",
    role: "React Native Developer",
    salary: "3,000/Hr.",
    exp: "Senior (3-5 yr)",
    match : 95, 
    rating: 4.5,
    skills: ['Javascript', "Redux", "Expo", "Context"]
  },
  {
    id: "2",
    name: "Nitin Malik",
    role: "React Native Developer",
    salary: "3,000/Hr.",
    exp: "Senior (3-5 yr)",
    match : 75,
    rating: 3.5,
    skills: ['Javascript', "Redux", "Expo", "Context"]

  },
  {
    id: "3",
    name: "Nitin Malik",
    role: "React Native Developer",
    salary: "3,000/Hr.",
    exp: "Senior (3-5 yr)",
    match : 45,
    rating: 2.5,
    skills: ['Javascript', "Redux", "Expo", "Context"]

  },
  {
    id: "4",
    name: "Nitin Malik",
    role: "React Native Developer",
    salary: "3,000/Hr.",
    exp: "Senior (3-5 yr)",
    match : 65,
    rating: 4,
    skills: ['Javascript', "Redux", "Expo", "Context"]
  }
]

function BookMarked({navigation}) {
  const context = useContext(Context);

  const renderItem = ({ item, index }) => (
    <ListingCard
      itemData={item}
      onPress={() => {
           alert("in Progress")    
      }}
      index={index}
      toogleBookMark={(index) =>  context.toogleBookMark(index)}

    />
  );


  return (
    <View style={styles.container}>
       <FlatList
        data={context.bookmarked}
        keyExtractor={(menuItem) => menuItem.id+"_bookMarked"}
        //ItemSeparatorComponent={ListItemSeparator}
        renderItem={renderItem}
      />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionHeader: {
    fontWeight: '800',
    fontSize: 18,
    marginTop: 20,
    marginBottom: 5,
  },
  item: {
    margin: 5,
    marginLeft: 0,
  },
  itemPhoto: {
    width: 200,
    height: 200,
  },
  itemText1: {
    marginTop: 5,
    fontSize: 18,
    color: "white"
  },
  itemText2: {
    marginTop: 3,
    fontSize: 14,
    color: "white",
  },
  button: {
    padding: 15,
    paddingLeft: 8,
    borderRadius: 5,
  },
});

export default BookMarked;





