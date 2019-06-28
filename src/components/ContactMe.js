import React, { Component } from "react";
import styled from "styled-components";
import Prism from "./images/prism/prism.png"
import axios from "axios";
import "../fonts.css"

const ContactMe = () => {
        return (
            <ContactMeWindow>
                <a href="mailto:jlbroughton88@gmail.com?subject=Contacting via portfolio...">
                    <Button>Contact Me!</Button>
                </a>
            </ContactMeWindow>
        )
    }


export default ContactMe;

const ContactMeWindow = styled.div`
    display: flex;
    height: 20vh;
    width: 100vh;
    padding: 3%;
    justify-content: center;
    flex-direction: column;
    margin-top: 25vh;
`

const Button = styled.button`
    text-align: center;
    height: 10vh;
    width: 25vw;
    font-size: 3vmax;
    box-shadow: 4px 4px #6486ad, 8px 8px #61c5ee;
    background: url(${Prism});
    color: #e5e5e5;
    outline: none;
    border: none;
`

const Header = styled.h1`
    margin: 0;
    margin-bottom: 6vh;
    color: #e5e5e5;
`