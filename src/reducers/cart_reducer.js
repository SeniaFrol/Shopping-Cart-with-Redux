export default function(state=[], action) {
  switch (action.type) {
    case "REMOVE_ITEM":
      return state.filter(item => {
        if(item.DateID !== action.payload) { return true; }});
    case "ADD_ITEM":
      return [...state, action.payload ];
    default:
      return state;
  }
}
