import React from "react";
import styled from "styled-components";
import Prism from "./images/prism/prism.png"
let App = require("../App.js")

const NavBar = () => {

    const scroll = () => {
        window.scrollTo(0, 200)
        console.log(App.HomePage)

    }

    return (
        <NavBarWindow>
            <ButtonArea>
                {/* <a href=""> */}
                    <Button onClick={scroll}>About Me</Button>
                {/* </a> */}
                {/* <a href=""> */}
                    <Button onClick={scroll}>My Work</Button>
                {/* </a> */}
                {/* <a href=""> */}
                    <Button onClick={scroll}>Timeline</Button>
                {/* </a> */}
                {/* <a href=""> */}
                    <Button onClick={scroll}>Contact Me</Button>
                {/* </a> */}
            </ButtonArea>

        </NavBarWindow>
    )
}

export default NavBar;

const NavBarWindow = styled.div`
background: url(${Prism});
height: 10vh;
display: flex;
flex-direction: column;
align-items: flex-end;
justify-content: center;
font-size: calc(10px + 2vmin);

`

const ButtonArea = styled.div`
    display: flex;
    height: 100%;
    width: 30%;
    align-items: center;
`

const Button = styled.button`
    display: flex;
    margin: 1%;
    height: 5vh;
    align-self: center;
    font-size: 1.8vh;

`