import axios from "axios";

import {
  loadImagesInProgress,
  loadImagesFail,
  loadImagesSuccess,
} from "./actions";

const API_KEY = "v6a1ebDmSP8DIwSiZLsR1JtbXml7IzBHX154lHmH";

export const loadImages = () => async (dispatch) => {
  try {
    dispatch(loadImagesInProgress());

    const images = await axios.get(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${API_KEY}`
    );

    dispatch(loadImagesSuccess(images.data));
  } catch (e) {
    console.log(e);
    dispatch(loadImagesFail());
  }
};
