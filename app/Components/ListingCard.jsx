import React, { useEffect, useState } from "react";
import { View, StyleSheet, TouchableWithoutFeedback, Text, TouchableOpacity, Dimensions } from "react-native";
import { Image } from "react-native";
import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';

function ListingCard({
  itemData,
  onPress,
  onPressFav,
  index,
  toogleBookMark
}) {

  const getMatchColor = (n) =>{
    if(n>75)
    return "#43CF51";
    if((n<=75 && n>55))
    return "#FFC727";
    else
    return "#E70000";
  }

  const renderIconsView = () =>{
    return(
      <View style={{marginTop: 2, flexDirection: "row", margin:8, justifyContent: "space-between", marginHorizontal: 20}}>
            {rendericonTemplate('usd', itemData.salary, "#43CF51")}
            {rendericonTemplate('briefcase', itemData.exp, "#585CE5")}
            {rendericonTemplate('star', itemData.rating, "#FFC727")}

        </View> 
    )
  }

  const rendericonTemplate = (icon, text, color) =>{
    return(
      <TouchableOpacity style={{flexDirection: "row", alignItems: "center"}}
    >
      <FontAwesome name={icon} size={20} color={color}/>
      <Text style={{fontSize: 16, marginLeft: 6}}>{text}</Text>
    </TouchableOpacity>
    )
  }

  const renderSkills = () =>{
    return(
      <View style={{marginTop: 2, flexDirection: "row", margin:8, marginHorizontal: 20}}>
        {itemData.skills.map(item => {
          return(
                <View style={{backgroundColor: "#FFEEE1", margin:8, padding: 4, borderRadius: 5}}>
                    <Text style={{color: 'orange'}}>{item}</Text>
                </View>
            )
        })
            
        }
        </View> 
    )
  }
  
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <View style={styles.detailsContainer}>
          <View style={styles.content_container}>
            <View style={{flex: 0.3, justifyContent: "center", alignItems: "center"}} >
              <FontAwesome5 name={"user-tie"} size={50} />
            </View>
            <View style={styles.info_container}>
              <Text style={styles.title} numberOfLines={1}>
                {itemData.name}
              </Text>
              <Text style={styles.subTitleA} numberOfLines={1}>
                {itemData.role}
              </Text>
              <View style={{backgroundColor: getMatchColor(itemData.match), width: "45%", padding: 2, justifyContent: "center", alignItems: "center", borderRadius: 5, marginTop: 8}}>
              <Text style={styles.subTitleB} numberOfLines={1}>
                {itemData.match}% Match
              </Text>
              </View>
              
            </View>
            <TouchableOpacity style={styles.fav_conatiner} activeOpacity={0.6} onPress={()=>toogleBookMark(index)}>
              {!itemData.isBookMarked ? <Ionicons name="bookmark-outline" size={24} /> : <Ionicons name="bookmark" size={24} color={"green"}/>}
              
            </TouchableOpacity> 
          </View>
        </View>
        {renderIconsView()}
        {renderSkills()}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: "#fff",
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    marginBottom: 8,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 8,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  detailsContainer: {
    padding: 12,
    flex: 1,
    flexDirection: "column",
  },
  title: {
    marginBottom: 0,
    fontSize: 18,
    color: "black",
  },
  subTitleA: {
    marginTop: 2,
    color: "grey",
    fontSize: 16,
  },
  subTitleB: {
    color: "#fff",
    marginTop: 2,
    fontSize: 16,
  },
  info_container: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 15,
  },
  content_container: {
    flex: 1,
    flexDirection: "row",
  },
  fav_conatiner: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "flex-end",
    height: "100%"
  },
  image_container: {
    flex: 0.3,
  },
});
export default ListingCard;
