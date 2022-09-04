import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from './HeaderButtons';

const AppHeader = props =>{  
    return(
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            {props.profile && (
               <Item title="profile" iconName="person-circle-outline" onPress={() =>props.navigation.navigate("Profile")}  />
            )}
          {props.notification && <Item title="notification" iconName="notifications-outline" onPress={() => props.navigation.navigate("Notifications")}/>}
          
          {props.bookmark && <Item title="bookmark" iconName="bookmark-outline" onPress={() => props.navigation.navigate("BookMark")}/> }
        </HeaderButtons>
    )
}

export default AppHeader;