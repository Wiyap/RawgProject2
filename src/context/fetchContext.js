import React, { createContext, useState } from 'react';
import apiKEY from 'apikey/rawgKey';

export const RawgContext = createContext()

const RawgContextProvider = (props) => {
  const [rawgData, setRawgContext] = useState()

  const fetchGameList = () => {
    let cleanUrl = window.location.pathname.substring(1).split("/")
    const setRequestUrl = (url) => {
      let finalUrl;

      if(url[0] === "games" || url[0] === ""){
        finalUrl = `https://api.rawg.io/api/games?key=${apiKEY}&page_size=27&search=${cleanUrl[cleanUrl.length-1]}`
      }else{
        finalUrl = `https://api.rawg.io/api/${cleanUrl[0]}/${cleanUrl[1]}?key=${apiKEY}&page_size=27&search=${cleanUrl[cleanUrl.length-1]}`
      }
      console.log(finalUrl)
      return finalUrl
    } 

    fetch(setRequestUrl(cleanUrl))
      .then((response) => response.json())
      .then((response) => {
        console.log(response.results)
        setRawgContext(response.results)
  })}


  return(
    <RawgContext.Provider value={{rawgData, fetchGameList}}>
        {props.children}
    </RawgContext.Provider>
  )
}

export default RawgContextProvider