import "./App.scss";

import { connect } from "react-redux";
import { loadImages } from "./store/thunks";
import { useEffect } from "react";
import localStorage from "redux-persist/es/storage";
import Loading from "./components/Loading";
import ImageCard from "./components/ImageCard/ImageCard";

function App(props) {
  let { isLoading, images, loadingImages } = props;

  useEffect(() => {
    async function getImages() {
      const response = await localStorage.getItem("persist:root");
      if (!response) {
        loadingImages();
      }
    }
    getImages();
  }, [loadingImages]);

  return (
    <div className="App">
      <h1 className="App__title">Spacestagram</h1>
      <p className="App__details">
        Brought to you by NASA's Mars Rover Photos API
      </p>
      {isLoading && <Loading />}
      <div
        className={`App__images-wrapper ${
          isLoading ? "App__images-wrapper--hidden" : ""
        }`}
      >
        {images.map((image) => (
          // <p>{String(image.isLike)}</p>
          <ImageCard image={image} />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isLoading: state.nasaImages.isLoading,
  images: state.nasaImages.data,
});

const mapDispatchToProps = (dispatch) => ({
  loadingImages: () => dispatch(loadImages()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
