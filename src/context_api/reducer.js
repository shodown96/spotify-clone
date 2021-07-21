export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  saved_albums:[],
  liked_tracks : [],
  search_results:[],
  query:null
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_SAVED_ALBUMS":
      return {
        ...state,
        saved_albums:action.saved_albums
      }
    case "SET_LIKED_TRACKS":
      return {
        ...state,
        liked_tracks:action.liked_tracks
      }

    case "SET_SEARCH_RESULTS":
      return {
        ...state,
        search_results:action.search_results
      }

    case "SET_QUERY":
      return {
        ...state,
        query:action.query
      }

    default:
      return state;
  }
};

export default reducer;
