import React, {useEffect, useState} from 'react';
import constant from '../constant';

export const Context = React.createContext({bookmarked: [], listingData: []});

const AppStore = (props) => {
    const [bookmarked, setbookMarked] = useState([]);
    const [listingData, setlistingData] = useState(constant.listingData);

    const toogleBookMark = (n) =>{
        let dataArray = listingData;
        dataArray[n].isBookMarked = !dataArray[n].isBookMarked
        updatebookmark(n);
        setlistingData([...dataArray]);
    }
    const updatebookmark = (n) =>{
        const tempBookMarked = bookmarked;
        const index = bookmarked.findIndex(object => object.id === constant.listingData[n].id);
        if (index === -1) 
        bookmarked.push(constant.listingData[n]);
        else
        bookmarked.splice(index, 1);
        console.log(bookmarked);
        if(bookmarked.length === 0)
        setbookMarked([]);
        else
        setbookMarked(bookmarked);

    }
   
    return (
        <Context.Provider value = {{
            bookmarked: bookmarked, 
            toogleBookMark: (index) => toogleBookMark(index),
            listingData: listingData
            }}>
        {props.children}
        </Context.Provider>
    )
}
	
export default AppStore;
        