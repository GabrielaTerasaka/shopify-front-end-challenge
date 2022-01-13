import "./Loading.scss";
import nasaLogo from "../../assets/logos/nasa-6.svg";

const Loading = () => {
  return (
    <div className="loading">
      <img src={nasaLogo} alt="NASA's logo" className="loading__image" />
    </div>
  );
};

export default Loading;
