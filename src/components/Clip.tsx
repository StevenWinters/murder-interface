import Footage from "../assets/clips/footage.mp4";

const Clip = () => {
  return <video src={Footage} className="clip" controls></video>;
};

export default Clip;
