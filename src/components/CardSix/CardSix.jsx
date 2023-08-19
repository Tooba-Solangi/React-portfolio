import React from "react";
import "./CardSix.css";
import man from "../../figma-images/images/man.png";
import boy from "../../figma-images/images/boy.png";
import style from "../../figma-images/images/style.png"
import enjoy from "../../figma-images/images/enjoy.png"



const CardSix = () => {
  return (
    <div className="six-card">
      <div className="container">
        <h2 className="">Our Impressive Portfolio</h2>
        <h6 className="dm">
          We believe scaling startups require a radically different kind of agency</h6>
        {/* <div className="d-felx row row-cols-lg-2 py-5">
        
          <img width={1000} src={boy} className="img-fluid " alt="" / > 

          <img width={1000} src={man} alt="" />
        </div>

        <div className="d-felx row row-cols-lg-2">
          <img width={1000} src={style} className="img-fluid" alt="" />

          <img width={1000}  src={enjoy} alt="" />
        </div> */}

        <div className="row ">

          <div className="col-md-6">

            <img width={1000} src={boy} className="img-fluid " alt="" />
            <p className="text-center mt-2"><b> Website Design </b></p>
          </div>


          <div className="col-md-6">
            <img width={1000} src={man} className="img-fluid" alt="" />
            <p className="text-center mt-2"> <b>Dashboard Design </b></p>
          </div>

        </div>


        <div className="row ">

          <div className="col-md-6">
            <img width={1000} src={style} className="img-fluid " alt="" />
            <p className="text-center mt-2"><b> Gallery Item </b></p>
          </div>


          <div className="col-md-6">
            <img width={1000} src={enjoy} className="img-fluid" alt="" />
            <p className="text-center mt-2"> <b>Mock Up Design </b></p>
          </div>

        </div>










      </div>
    </div>
  );
};

export default CardSix;
