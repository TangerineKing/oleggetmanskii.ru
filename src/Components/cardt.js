import React from "react";
import web1 from "../assets/web5.jpg"
import { useState } from "react";




function Cardt() {

  const [ setShow] = useState(false);
  const handleShow = () => setShow(true);

  return(
    <>
          <div className="hover-text-one" onClick={handleShow}>
          <figure class="effect-text-three" >
          <img className="img-fluid" src={web1} alt="Site preview"/>
            <figcaption>
            <h3 className="card-h">
              Website blog about travel
            </h3>
            <div className="card-btn">
            <p>
            <a className="btn-port" href="google.com">
              Demo
              </a>
            </p>
            <p>
            <a className="btn-port" href="google.com">
              Github
              </a>
            </p>
            </div>
            </figcaption>
            </figure>
          </div>
       
        </>
  );
}

export default Cardt;