import React from "react";
import { useState, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import ReactTyped from "react-typed";
import {Link} from "react-router-dom"
import Transitions from "../Components/Transitions";
import { withRouter } from 'react-router';
import meImg from "../assets/123.jpg"

function Home() {
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);
  
  useEffect(() => {
      const handleScroll = () => {
          if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
              setIsScrolledToBottom(true);
          } else {
              setIsScrolledToBottom(false);
          }
      };
  
      document.addEventListener("scroll", handleScroll);
  
      return () => {
          document.removeEventListener("scroll", handleScroll);
      };
  });
  
  if (isScrolledToBottom) {
      // Здесь ваш код для перехода на другую страницу
      window.location.href = "/about";
  }
        return(
        <div className="bgall" style={{height:"94vh"}}>
          <Transitions>
            <Container>
                <div className="text-wrapper">
                  <div className="df">
                  <div className="bor">
                <div className="main-photo img-fluid"> </div>
                </div>
                </div>
                <p className="text-first" style={{color: "#FFF",}}>HI THERE !</p>
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
        <div className="scroll">
          <p>
          Just scroll
          </p>
        </div>
            </Container>
            </Transitions>
        </div>
        );
    }
    export default withRouter(Home);