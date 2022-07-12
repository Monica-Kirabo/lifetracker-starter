import "./Home.css";
import {React} from "react"

export default function Home() {
  return (
    <div className="Home">
      <div className="image">
        <img
          src="http://codepath-lifetracker.surge.sh/static/media/smartwatch-screen-digital-device.e2983a85.svg"
          alt="hero img"
        />

        <h1>Life Tracker</h1>
        <p>Helping you take back control of your world</p>
      </div>

      <div className="bottom">
        <ul className="category-menu ">
          <li className="is-active">
            <img
              src="http://codepath-lifetracker.surge.sh/static/media/icons-workout-48.4f4cdb05.svg"
              alt="fitness"
            />
            <p>Fitness</p>
          </li>
          <li>
            <img
              src="http://codepath-lifetracker.surge.sh/static/media/icons8-porridge-100.132d2715.svg "
              alt="food"
            />
            <p>Food</p>
          </li>

          <li>
            <img
              src="http://codepath-lifetracker.surge.sh/static/media/icons8-resting-100.81067336.svg "
              alt="rest"
            />
            <p>Rest</p>
          </li>
          <li>
            <img
              src="http://codepath-lifetracker.surge.sh/static/media/icons8-planner-100.997ca54c.svg "
              alt="fitness"
            />
            <p>Planner</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
