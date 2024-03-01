import React, { Component } from "react";
import { Button, Col, Container, FormControl, Row } from "react-bootstrap";
import Transitions from "../Components/Transitions";
import {FiPhoneCall} from "react-icons/fi";
import {FiAtSign} from "react-icons/fi";
import {BiLogoTelegram} from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
/** 
import whatsapp from "../assets/whatsapp.png"
import behance from "../assets/behance.png"

<ul class="social-icons">
                <li><a href="https://wa.me/+79032381301" target="_blank"><img src={whatsapp} alt="whatsapp"/></a></li>
                <li><a href="https://www.behance.net/oleggetmanskii" target="_blank"><img src={behance} alt="behance"/></a></li>
            </ul>
            */

export default class Contacts extends Component {
    
    render() {
        return(
            <div className="bgall" style={{height:"94vh"}}>
                <Transitions>
                <Container>
                <div className="wrapper_text">
                        <h1>GET <span className="color-text">IN TOUCH</span></h1>
                        <p className="mt-2">I’M ALWAYS OPEN TO DISCUSSING PRODUCT DESIGN WORK OR PARTNERSHIPS.</p>
                    </div>
                    <Row className="mt-5">
                        <Col md={5}>
                            <p  className="f-contact"><FiPhoneCall className="me-2"/>Phone 
                            <br></br><a href="tel:89032381301" className=" s-contact">8 903 238 13 01</a></p>
                            <p  className="f-contact"><FiAtSign className="me-2"/>Email 
                            <br></br><a href="mailto:olegetm@mail.ru" className=" s-contact">olegetm@mail.ru</a></p>
                            <p  className="f-contact"><BiLogoTelegram className="me-2"/>Telegram 
                            <br></br><a href="https://t.me/oleggetm" className=" s-contact">@oleggetm</a></p>
                            <p  className="f-contact"><FaWhatsapp className="me-2"/>Whatsapp 
                            <br></br><a href="https://wa.me/+79032381301" className=" s-contact">tap me</a></p>
                        </Col>
                        <Col md={6}>
                            <div className="form_wrapper">
                                <p>
                                If you have any suggestion, project or even you want to say Hello.. please fill out the form below and I will reply you shortly.
                                </p>
                                <Row className="justify-content-between">
                                <FormControl className="form" placeholder="Name">

                                </FormControl>
                                <FormControl className="form" placeholder="Phone">

                                </FormControl>
                                
                                <textarea class="form-control mt-3 control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                                <Button className="btn_contact mt-3">SEND MESSAGE</Button>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
                </Transitions>
            </div>
        )
    }
    }