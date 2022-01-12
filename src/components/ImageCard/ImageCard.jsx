import { createDispatchHook } from "react-redux";
import "./ImageCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import { toggleLikeImage } from "../../store/actions";
import { connect } from "react-redux";

const ImageCard = (props) => {
  const { img_src, id, camera, rover, earth_date, isLike } = props.image;
  const { toggleLikePress } = props;

  return (
    <article className="card">
      <img src={img_src} alt="" className="card__image" />
      <div className="card__wrapper">
        <p className="card__details">
          <span className="card__details--span">{camera.full_name}</span>
        </p>
        <p className="card__details">
          Rover <span className="card__details--span">{rover.name}</span>
        </p>
        <div className="card__inner-wrapper">
          <p className="card__date">{earth_date}</p>
          <FontAwesomeIcon
            icon={faHeart}
            className={`card__like-icon ${
              isLike ? "card__like-icon--like" : ""
            }`}
            onClick={() => {
              toggleLikePress(id);
            }}
          />
        </div>
      </div>
    </article>
  );
};

const mapDispatchToState = (dispatch) => ({
  toggleLikePress: (id) => dispatch(toggleLikeImage(id)),
});

export default connect(null, mapDispatchToState)(ImageCard);
