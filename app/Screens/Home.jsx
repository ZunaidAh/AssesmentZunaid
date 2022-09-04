import React from 'react';
import { FlatList, Image, SectionList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AppHeader from '../Components/AppHeader';
import constants from '../constant';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome, Ionicons } from '@expo/vector-icons';


function Home({navigation}) {

  React.useLayoutEffect(() => {
    navigation.setOptions({
      // in your app, you can extract the arrow function into a separate component
      // to avoid creating a new one every time you update the options
      title: "",
      headerTitleStyle: {
          fontSize: 1
      },
      headerLeft: () => (
        <AppHeader navigation = {navigation} profile/>
      ),
      headerRight: () => (
        <AppHeader navigation = {navigation} notification bookmark/>
      ),
    });
  }, [navigation]);

  const ListItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate("Listing")}>
        <LinearGradient
        // Button Linear Gradient
        colors={[item.gradient1, item.gradient2, item.gradient3]}
        style={styles.button}>
        <Ionicons name={item.logo} size={26} color={'#fff'}/>
        <Text style={styles.itemText1}>{item.text1}</Text>
        <Text style={styles.itemText2}>{item.text2}</Text>
      </LinearGradient>
      </TouchableOpacity>
    );
  };

  const renderSearchBar =() =>{
    return(
        <View style={{padding: 15, paddingBottom: 2, flexDirection: "row", justifyContent: "space-between"}}>
            <View style={{flexDirection: "row", alignItems: "center", borderWidth: 0.5, borderColor: "grey", padding: 5, borderRadius: 10}}>
                <FontAwesome name="search"  color='black' size={19} />
                <TextInput
                    placeholderTextColor={"grey"}
                    style={[{width: "80%", fontSize: 16, marginLeft: 10}]}
                    //secureTextEntry={showPassowrd}
                    //onFocus={handleFocus}
                    onChangeText={(text) => console.log(text)}
                    placeholder={"Search Talent, Role and more"}
                />
            </View>
            <TouchableOpacity style={{flexDirection: "row", alignSelf: "center"}} activeOpacity={0.4} onPress={() => alert(true)}>
            <FontAwesome name="filter"  color='black' size={25} />
            </TouchableOpacity>
        </View>
    )   
  }

  return (
    <View style={styles.container}>
      {renderSearchBar()}
        <SectionList
          contentContainerStyle={{ paddingHorizontal: 10 }}
          stickySectionHeadersEnabled={false}
          sections={constants.SECTIONS}
          renderSectionHeader={({ section }) => (
            <>
              <Text style={styles.sectionHeader}>{section.title}</Text>
              {section.horizontal ? (
                <FlatList
                  horizontal
                  data={section.data}
                  renderItem={({ item }) => <ListItem item={item} />}
                  showsHorizontalScrollIndicator={false}
                />
              ) : null}
            </>
          )}
          renderItem={({ item, section }) => {
            if (section.horizontal) {
              return null;
            }
            return <ListItem item={item} />;
          }}
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

export default Home;





