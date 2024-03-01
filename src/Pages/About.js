
import { useState, useEffect } from "react";
import React from "react";
import { Button, Container } from "react-bootstrap";
import meImg from "../assets/123.jpg"
import Transitions from "../Components/Transitions";
import { withRouter } from 'react-router';




function About() {
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
        window.location.href = "/portfolio";
    }

return (
    <div>
        <div className="bgall">
                <Transitions>
                <Container>
                    <div className="wrapper-h">
                        <h1>About<span className="color-text"> Me</span> </h1>
                    </div>
                    <img
                    className="photoabout img-fluid" 
                    alt="Me"
                    width={1310}
                    height={650}
                    src={meImg}/>
                    <div className="brd">
                    <h3 className="about-h">Oleg Getmanskii</h3>
                    </div>
                    <div className="brd">
                        <p>Hi, my name is Oleg Getmanskii and I’m web developer. 
                            I’ve spent most of my waking hours for the last three years designing, programming and operating  websites.
                            One of my specialties is taking an idea from scratch and creating a full-fledged platform. 
                            I go beyond to produce sites with a unique, outstanding, contemporary look-and-feel. With extensive knowledge of web mechanics,
                             I’m able to optimize complex integrations to require little-to-no maintenance while running on their own for years</p>
                    </div>
                    <Button className="download" href="../assets/cv.pdf" download>Download CV</Button>
                    <div className="bg-about">
                        <h3>Programming skills</h3>
                        <div className="wrapper-skills">
                            <div className="row">
                                <div className="col">
                            <div className="progress-inner">
                                <span>
                                    <span className="label">HTML</span>
                                    <span className="number">95%</span>
                                </span>
                                <div className="background">
                                    <div className="bar">
                                        <div className="bar_in" style={{width:"95%"}}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="progress-inner">
                                <span>
                                    <span className="label">CSS</span>
                                    <span className="number">90%</span>
                                </span>
                                <div className="background">
                                    <div className="bar">
                                        <div className="bar_in" style={{width:"90%"}}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="progress-inner">
                                <span>
                                    <span className="label">JavaScript</span>
                                    <span className="number">70%</span>
                                </span>
                                <div className="background">
                                    <div className="bar">
                                        <div className="bar_in" style={{width:"70%"}}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="progress-inner">
                                <span>
                                    <span className="label">Jquery</span>
                                    <span className="number">65%</span>
                                </span>
                                <div className="background">
                                    <div className="bar">
                                        <div className="bar_in" style={{width:"65%"}}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="progress-inner">
                                <span>
                                    <span className="label">SCSS</span>
                                    <span className="number">80%</span>
                                </span>
                                <div className="background">
                                    <div className="bar">
                                        <div className="bar_in" style={{width:"80%"}}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="progress-inner">
                                <span>
                                    <span className="label">Git</span>
                                    <span className="number">70%</span>
                                </span>
                                <div className="background">
                                    <div className="bar">
                                        <div className="bar_in" style={{width:"70%"}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                        <div className="progress-inner">
                                <span>
                                    <span className="label">BootsTrap</span>
                                    <span className="number">85%</span>
                                </span>
                                <div className="background">
                                    <div className="bar">
                                        <div className="bar_in" style={{width:"85%"}}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="progress-inner">
                                <span>
                                    <span className="label">React js</span>
                                    <span className="number">55%</span>
                                </span>
                                <div className="background">
                                    <div className="bar">
                                        <div className="bar_in" style={{width:"55%"}}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="progress-inner">
                                <span>
                                    <span className="label">Figma</span>
                                    <span className="number">95%</span>
                                </span>
                                <div className="background">
                                    <div className="bar">
                                        <div className="bar_in" style={{width:"95%"}}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="progress-inner">
                                <span>
                                    <span className="label">Illustrator</span>
                                    <span className="number">80%</span>
                                </span>
                                <div className="background">
                                    <div className="bar">
                                        <div className="bar_in" style={{width:"80%"}}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="progress-inner">
                                <span>
                                    <span className="label">WordPress</span>
                                    <span className="number">60%</span>
                                </span>
                                <div className="background">
                                    <div className="bar">
                                        <div className="bar_in" style={{width:"60%"}}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="progress-inner">
                                <span>
                                    <span className="label">Vue js</span>
                                    <span className="number">30%</span>
                                </span>
                                <div className="background">
                                    <div className="bar">
                                        <div className="bar_in" style={{width:"30%"}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        </div>
                    </div>
                    
                </Container>
                </Transitions>
            </div>
    </div>
);
}

export default withRouter(About);