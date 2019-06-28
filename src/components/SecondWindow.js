import React, { Component } from "react";
import styled from "styled-components";
import MyWork from "./MyWork";
import Darkness from "./images/darkness/darkness.png"

class SecondWindow extends Component {
    render() {
        return (
            <SecondWindowDiv>
                <MyWork/>
            </SecondWindowDiv>
        )
    }
}

export default SecondWindow;

const SecondWindowDiv = styled.div`
display: flex;
background-image: url(${Darkness});
height: 102%;
width: 100%;
flex-direction: column;
align-items: center;
font-family: 'Lato', sans-serif;

@media (max-width: 825px) {
    padding-left: 1vh;
    padding-right: 1vh;
  }
`