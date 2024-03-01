import React from "react";
import web1 from "../assets/web1.jpg"
import { useState } from "react";



function Cardm() {

  const [setShow] = useState(false);
  const handleShow = () => setShow(true);

  return(
    <>
          <div className="hover-text-one" onClick={handleShow}>
          <figure class="effect-text-three" >
          <img className="img-fluid" src={web1} alt="Site preview"/>
            <figcaption>
            <h3 className="card-h">
              Website for module building factory
            </h3>
            <div className="card-btn">
            <p>
            <a className="btn-port" href="https://modullive.vercel.app/" target="blank">
              Demo
              </a>
            </p>
            <p>
            <a className="btn-port" href="https://github.com/TangerineKing/modullive" target="blank">
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

export default Cardm;