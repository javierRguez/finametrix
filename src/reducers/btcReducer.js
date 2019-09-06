export default (state = {}, action) => {
  switch (action.type) {
    case "btcChange":
      return {
        ...state,
        ...action
      };
    default:
      return state;
  }
};
