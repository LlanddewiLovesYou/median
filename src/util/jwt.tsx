export const setJWT = (token) => {
  window.localStorage.setItem("MEDIAN_JWT", token);
};

export const getJWT = () => {
  return window.localStorage.getItem("MEDIAN_JWT");
};
