import "./App.css";

import { connect } from "react-redux";
import { loadImages } from "./store/thunks";
import { useEffect } from "react";
import localStorage from "redux-persist/es/storage";

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
      {isLoading ? <p>is loading...</p> : <p>loaded</p>}
      {images.map((image) => (
        <p>{String(image.isLike)}</p>
      ))}
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
