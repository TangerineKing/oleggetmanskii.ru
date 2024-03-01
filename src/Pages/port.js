import React, { Component } from "react";
import { Button, Container } from "react-bootstrap";
import ReactTyped from "react-typed";
import {Link} from "react-router-dom"
import Transitions from "../Components/Transitions";

export default class Home extends Component {
    render() {
        return(
        <div className="bgall" style={{height:"94vh"}}>
          <Transitions>
            <Container>
                <div className="text-wrapper">
                <span className="text-first" style={{color: "#FFF",}}>HI THERE !</span>
                <h1 className="animated-text" style={{color: "#FFF",}}>
        I'M{" " }
        <ReactTyped
        className="color-text"
          strings={["OLEG", "A WEB-DEVELOPER", "A DESIGNER"]}
          typeSpeed={70}
          loop
          backSpeed={40}
          cursorChar=""
          showCursor={true}
        />
      </h1>
      <p className="text-p">I'm a Freelance UI/UX Designer and Developer. 
        I strives to build immersive and beautiful web applications through carefully crafted code and user-centric design.</p>
        <Link to="/About">
        <Button className="button-about">More about me</Button>
        </Link>
        <Link to="/Portfolio" >
        <Button className="button-portf">Portfolio</Button>
        </Link>
        </div>
            </Container>
            </Transitions>
        </div>
        )
    }
    }