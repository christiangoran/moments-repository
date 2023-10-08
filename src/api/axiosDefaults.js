import axios from "axios";

axios.defaults.baseURL =
  "https://taskmanager-heroku-5052155856ae.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;
