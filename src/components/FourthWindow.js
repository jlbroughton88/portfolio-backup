import React, { Component } from "react";
import styled from "styled-components";
import ContactMe from "./ContactMe.js"
import Darkness from "./images/darkness/darkness.png"

class FourthWindow extends Component {
    render() {
        return (
            <FourthWindowDiv>
                <ContactMe/>
            </FourthWindowDiv>
        )
    }
}

export default FourthWindow;

const FourthWindowDiv = styled.div`
display: flex;
background-image: url(${Darkness});
margin-top: -5vh;
height: 60%;
width: 100%;
flex-direction: column;
align-items: center;
font-family: 'Lato', sans-serif;

@media (max-width: 825px) {
    padding-left: 1vh;
    padding-right: 1vh;
  }
`