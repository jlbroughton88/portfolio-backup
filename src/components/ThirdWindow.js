import React, { Component } from "react";
import styled from "styled-components";
import TimeLine from "./TimeLine.js"
import Darkness from "./images/darkness/darkness.png"

class ThirdWindow extends Component {
    render() {
        return (
            <ThirdWindowDiv>
                <TimeLine/>
            </ThirdWindowDiv>
        )
    }
}

export default ThirdWindow;

const ThirdWindowDiv = styled.div`
display: flex;
background-image: url(${Darkness});
height: 80%;
width: 100%;
flex-direction: column;
align-items: center;
font-family: 'Lato', sans-serif;

@media (max-width: 825px) {
    padding-left: 1vh;
    padding-right: 1vh;
  }
`