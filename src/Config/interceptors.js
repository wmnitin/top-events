import axios from "axios";
import { toast } from "react-toastify";

axios.interceptors.request.use(
  (config) => {
    document.body.classList.add("spinner");
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    document.body.classList.remove("spinner");
    return response;
  },
  (error) => {
    if (error.response && error.response.data) {
      const errorData = error.response.data;
      let errorTobeShown = null;
      switch (errorData.error_type) {
        case "NOT_FOUND":
        case "EVENT_NOT_FOUND":
          errorTobeShown = "404, Data not found !";
          break;
        default:
          errorTobeShown =
            errorData.data?.description || "Something went wrong";
      }
      toast.error(errorTobeShown);
    }
    document.body.classList.remove("spinner");
    return Promise.reject(error);
  }
);

export { axios };
