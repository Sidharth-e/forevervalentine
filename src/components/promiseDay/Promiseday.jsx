
import Lottie from "lottie-react";
import "./Promiseday.scss";
import promise from '../../assets/promise.json'
export default function Promiseday() {
  return (
    <div className="promiseday">
      <Lottie animationData={promise}/>
    </div>
  );
}
