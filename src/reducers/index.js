import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Push the Little Daisies', duration: '2:55' },
    { title: 'Push the tempo', duration: '4:28' },
    { title: 'Hobo Humpin Slobo Babe', duration: '3:57' },
    { title: 'Close to the Edit', duration: '4:11' }
  ];
};

const selectedSongReducer = ( selectedSong = null, action ) => {
  if ( action.type === 'SELECTED_SONG' ){
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer, 
  selectedSong: selectedSongReducer
});