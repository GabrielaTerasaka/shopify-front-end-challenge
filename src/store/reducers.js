import {
  LOAD_IMAGES_IN_PROGRESS,
  LOAD_IMAGES_SUCCESS,
  LOAD_IMAGES_FAIL,
  TOGGLE_LIKE_IMAGE,
} from "./actions";

const initialState = {
  isLoading: false,
  data: [],
};

export const nasaImages = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_IMAGES_IN_PROGRESS: {
      return { ...state, isLoading: true };
    }
    case LOAD_IMAGES_SUCCESS: {
      const { photos } = payload;

      return {
        ...state,
        isLoading: false,
        data: photos.map((image) => ({ ...image, isLike: false })),
      };
    }
    case LOAD_IMAGES_FAIL: {
      return { ...state, isLoading: false };
    }
    case TOGGLE_LIKE_IMAGE: {
      const { id } = payload;

      return {
        ...state,
        data: state.data.map((image) => {
          if (image.id === id) {
            return { ...image, isLike: !image.isLike };
          } else {
            return image;
          }
        }),
      };
    }
    default:
      return state;
  }
};
