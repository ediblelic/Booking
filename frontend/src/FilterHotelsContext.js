import React,{useState,createContext} from 'react';
export const FilterHotelsContext = createContext();
export const FilterHotelsProvider = (props) => {
    let filterNumofPeople; 
    return(

        <FilterHotelsContext.Provider value={filterNumofPeople}>
            {console.log('iz konteksta',filterNumofPeople)}
                 {props.children}
                </FilterHotelsContext.Provider>
        )

}