import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Around the world", duration: "4:05" },
    { title: "I want it that way", duration: "5:03" },
    { title: "Do the Evolution", duration: "4:08" },
    { title: "Get Free", duration: "2:32" },
    { title: "How to save a life", duration: "4:18" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
