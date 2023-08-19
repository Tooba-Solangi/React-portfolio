import React from "react";
import "./Dashboard.css";
import arrow from "../../figma-images/images/arrow.png";
import Spotify from "../../figma-images/images/Spotify .png";
import Google from "../../figma-images/images/Google .png";
import Apple from "../../figma-images/images/Apple .png";
import Amazon from "../../figma-images/images/Amazon .png";
import Airbng from "../../figma-images/images/Airbnb .png";

const Dashboard = () => {
  return (
    <div className="Card">
      <div className="container">
        <div className="mt-5">
          <h4 className="text-center dboard">Trusted by the world's best companies</h4>
        </div>

        <div>
          <img className="arrow mt-5" src={arrow} alt="" />
          <img className="Spotify mt-5" src={Spotify} alt="" />
          <img className="Google mt-5" src={Google} alt="" />
          <img className="Apple mt-5" src={Apple} alt="" />
          <img className="Amazon mt-5" src={Amazon} alt="" />
          <img className="Airbng mt-5" src={Airbng} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
