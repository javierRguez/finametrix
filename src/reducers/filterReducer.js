const initialState = {
  text: "",
  sortBy: "marketCap"
};
export default function filterReducer(state = initialState, action) {
  switch (action.type) {
    case "FILTER_TEXT":
      return {
        ...state,
        text: action.text
      };

    case "SORT_BY":
      return {
        ...state,
        sortBy: action.sortType
      };

    default:
      return state;
  }
}
