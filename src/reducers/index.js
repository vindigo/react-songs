import { combineReducers, bindActionCreators } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Beat Box', duration: '4:50', artist: 'Art of Noise' },
    { title: 'Push the tempo', duration: '4:28', artist: 'Fatboy Slim' },
    { title: 'Hobo Humpin Slobo Babe', duration: '3:57', artist: 'Whale' },
    { title: 'Little L', duration: '3:56', artist: 'Jamiroquai' },
    { title: 'Square Dance Rap', duration: '4:18', artist: 'Sir Mix-a-Lot' },
    { title: 'Here We Go', duration: '3:57', artist: 'Stakka Bo' },
    { title: 'Groove is in the Heart', duration: '4:50', artist: 'Deee-lite' }
  ];
};

const selectedSongReducer = ( selectedSong = null, action ) => {
  if ( action.type === 'SONG_SELECTED' ){
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer, 
  selectedSong: selectedSongReducer
});