// export const GET_IMAGES = "GET_IMAGES";
export const LOAD_IMAGES_IN_PROGRESS = "LOAD_IMAGES_IN_PROGRESS";
export const LOAD_IMAGES_SUCCESS = "LOAD_IMAGES_SUCCESS";
export const LOAD_IMAGES_FAIL = "LOAD_IMAGES_FAIL";
export const TOGGLE_LIKE_IMAGE = "TOGGLE_LIKE_IMAGE";
// export const UNLIKE_IMAGES = "UNLIKE_IMAGES";

// export const getImages = (images) => ({
//   type: GET_IMAGES,
//   payload: { images },
// });

export const loadImagesInProgress = () => ({
  type: LOAD_IMAGES_IN_PROGRESS,
});

export const loadImagesSuccess = (photos) => ({
  type: LOAD_IMAGES_SUCCESS,
  payload: photos,
});

export const loadImagesFail = () => ({
  type: LOAD_IMAGES_FAIL,
});

export const toggleLikeImage = (id) => ({
  type: TOGGLE_LIKE_IMAGE,
  payload: { id },
});

// export const unlikeImages = (id) => ({
//   type: UNLIKE_IMAGES,
// });
