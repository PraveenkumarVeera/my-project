import api from "./api";

const apiUrl = process.env.REACT_APP_API_URL;

const URLS = {
  fetchUsers: "users",
};

// export const fetchUser = () => {
//   return api.get(URLS.fetchUsers, {
//     baseURL: apiUrl,
//   });
// };

export const fetchUser = () => {
  return api.get(URLS.fetchUsers);
};
// GET https://jsonplaceholder.typicode.com/users