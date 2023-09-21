import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.dev.pastorsline.com/api", // Your API base URL
});

const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjU2MCwiZXhwIjoxNzI2NTY3MTc5LCJ0eXBlIjoiYWNjZXNzIiwidGltZXN0YW1wIjoxNjk1MDMxMTc5fQ.0y7NtuVDCvcPvmWbliMs1q02sov2oFC6u2Hi6H4A2W4";
instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;

const apiService = {
  getContacts: (params) => instance.get("/contacts.json", params),
};

export default apiService;
