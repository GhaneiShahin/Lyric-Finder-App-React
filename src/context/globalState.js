import React, { createContext, useEffect, useState, useReducer } from 'react';
import axios from 'axios';
import { appReducer } from './appReducer';

//create context
export const GlobalContext = createContext({});

//provider component
export const GlobalProvider = ({ children }) => {
  const [trackList, setTrackList] = useState([]);
  const [heading, setHeading] = useState('Top 10 Tracks');

  const [dispatch] = useReducer(appReducer);

  const getData = async () => {
    await axios
      .get(
        `/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then((res) => {
        setTrackList(res.data.message.body.track_list);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        trackList,
        heading,
        setTrackList,
        setHeading,
        dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
