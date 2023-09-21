import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL, // Your API base URL
});

const token = process.env.REACT_APP_AUTH_TOKEN;
instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;

const apiService = {
  getContacts: (params) => instance.get("/contacts.json", params),
};

export default apiService;
