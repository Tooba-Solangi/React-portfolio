import "./header.css";
import React from "react";
import pic from "../../figma-images/images/pic.png";
import lady from "../../figma-images/images/lady.png";

const Header = () => {
  return (
    <div className="nav">
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 ">
          <div className="col-md-3 mb-2 mb-md-0">
            <img className="wf-font" src={pic} alt="" /> <b> Warkinon </b>
          </div>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="#" className="nav-color nav-link px-2 0 wf-font">
                Home{" "}
              </a>
            </li>
            <li>
              <a href="#" className="nav-color nav-link px-2 wf-font">
                Case Studies
              </a>
            </li>
            <li>
              <a href="#" className="nav-color nav-link px-2 wf-font">
                Blog{" "}
              </a>
            </li>
            <li>
              <a href="#" className="nav-color nav-link px-2 wf-font">
                Services{" "}
              </a>
            </li>
            <li>
              <a href="#" className="nav-color nav-link px-2 ">
                Contact
              </a>
            </li>
          </ul>

          <div className="col-md-3 text-end">
            <button type="button" className="  rounded-5 px-3 btnn ">
              Contact
            </button>
          </div>
        </header>

        <div className=" row">
          <div className="col-md-7 h1-setup ">
            <h1 className="mt-5 heading-one heading-one">
              <b>
                {" "}
                The Better Way <br></br> To{" "}
                <span className="word">Success </span>In<br></br> Your Business
              </b>
            </h1>
            <p className="">
              I seek to push the limits of creativity to create high-engaging,
              <br></br> user-friendly, and memorable interactive experiences.
            </p>
            <button type="button" className=" px-4 rounded-5 btnn">
              Hire Me
            </button>
          </div>
          <div className="col-md-5">
            <img
              className="bd-placeholder-imf-lg featurette-image img-fluid mx-auto "
              height={380}
              width={450}
              src={lady}
              alt="girl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
