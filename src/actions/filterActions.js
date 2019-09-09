export const filterText = (text = "") => ({
  type: "FILTER_TEXT",
  text
});

export const sortBy = sortType => ({
  type: "SORT_BY",
  sortType
});
