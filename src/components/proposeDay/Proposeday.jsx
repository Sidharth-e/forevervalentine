import React  from "react";
import './Proposeday.scss';
import Lottie from "lottie-react";
import Propose from '../../assets/proposal.json'
import { Link } from "react-router-dom";

export default function Proposeday() {
  return (
    <div className="proposeday">
      <Lottie style={{ height: 500 }} animationData={Propose} />
      <button>
        <Link to="/propose">Click me</Link>
      </button>
    </div>
  );
}
