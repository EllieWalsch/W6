const URL = "https://api.github.com/users?per_page=5";

export const getUsers = async () => {
  const response = await fetch(URL);
  // if we mark the function as async, the return value will be wrapped in a Promise
  return response.json();
};
