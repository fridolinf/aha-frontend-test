import api from "../../../utils/api/baseUrl";
import { Header } from "../../../utils/api/header";
import axios from "axios";

const getFollowing = async () => {
  try {
    const response = await axios.get(
      api.BASE_URL + api.ENDPOINT.following,
      Header
    );
    return response.data;
  } catch (err) {
    return err;
  }
};

const getFollower = async () => {
  try {
    const response = await axios.get(
      api.BASE_URL + api.ENDPOINT.follower,
      Header
    );
    return response.data;
  } catch (err) {
    return err;
  }
};

const getTags = async () => {
  try {
    const response = await axios.get(api.BASE_URL + api.ENDPOINT.tags, Header);
    return response.data;
  } catch (err) {
    return err;
  }
};

const searchData = async (key) => {
  try {
    const response = await axios.get(
      api.BASE_URL + api.ENDPOINT.search + key,
      Header
    );
    return response.data;
  } catch (err) {
    return err;
  }
};

export { getFollowing, getFollower, getTags, searchData };
