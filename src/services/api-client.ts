import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e0175dd2e2164b01bf2a855363401050",
  },
});
