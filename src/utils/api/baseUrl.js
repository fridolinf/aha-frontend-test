const BASE = "https://avl-frontend-exam.herokuapp.com";

const ENDPOINT = {
  following: "/api/users/friends?page=1&pageSize=51",
  follower: "/api/users/all?pageSize=100&page=1",
  search: "/api/users/all?page=1&pageSize=100&keyword=",
  tags: "/api/tags",
};

let BASE_URL = BASE;

const api = {
  BASE_URL: BASE_URL,
  ENDPOINT: ENDPOINT,
};

export default api;
