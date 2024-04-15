const LOCAL_STORAGE_KEY = "task";


// LocalStorage methods to get & set the items.
export const setItems = (obj) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(obj));
};

export const getItems = () => {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
};
