import React, { useContext } from 'react';
import { FlatList, Image, SectionList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AppHeader from '../Components/AppHeader';
import SECTIONS from '../constant';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import ListingCard from '../Components/ListingCard';
import { Context } from '../Context';

function Listing({navigation}) {

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <AppHeader navigation = {navigation} bookmark/>
      ),
    });
  }, [navigation]);
  
  const context = useContext(Context);
  

  const renderItem = ({ item, index }) => (
    <ListingCard
      itemData={item}
      onPress={() => {
        alert("progress")
  
      }}
      index={index}
      toogleBookMark={(index) =>  context.toogleBookMark(index)}
    />
  );


  return (
    <View style={styles.container}>
       <FlatList
        data={context.listingData}
        keyExtractor={(menuItem) => menuItem.id+"_listing"}
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

export default Listing;





