export default function (state='', action) {
  switch (action.type) {
    case "SEARCH_CHANGE":
      return action.payload;
    default:
      return state;
  }
}
