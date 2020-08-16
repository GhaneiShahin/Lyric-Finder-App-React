export const appReducer = (state, action) => {
  switch (action.type) {
    case 'SEARCH_TRACKS':
      return {
        ...state,
        trackList: action.payload,
        heading: "Search Results"
      }  
    default:
      return state
  }
}