import axios from "axios";

const setAuthToken = (token) => {
  // apply token for every request
  if (token) axios.defaults.headers.common["Authorization"] = `Token ${token}`;
  // Delete auth header
  else delete axios.defaults.headers.common["Authorization"];
};

export default setAuthToken;