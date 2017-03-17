export const searchChange = (term) => {
  return {
    type: "SEARCH_CHANGE",
    payload: term
  };
};

export const add_item = (id, name, src, price) => {
  return {
    type: "ADD_ITEM",
    payload: {
      id,
      name,
      src,
      price,
      DateID: Date.now()
    }
  };
};

export const remove_item = (id) => {
  return {
    type: "REMOVE_ITEM",
    payload: id
  };
};
