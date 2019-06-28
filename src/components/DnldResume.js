import React from "react";
import styled from "styled-components";
import Prism from "./images/prism/prism.png"
import "../fonts.css"
import Resume from "./resumeForPortfolio.pdf"

const DownloadResumeButton = () => {
    
    return (
        <a href={Resume} download>
            <Button>Download Resume</Button> 
        </a>
    )
}

export default DownloadResumeButton;

const Button = styled.button`
    font-family: 'Lato', sans-serif;
    margin-bottom: 7vh;
    width: 15vw;
    height: 7vh;
    font-size: 1.5vmax;
    box-shadow: 3px 3px #6486ad, 5px 5px #61c5ee;
    text-align: center;
    background: url(${Prism});
    border-radius: 1vh;
    color: #e5e5e5;
    padding: 1vh;
    outline: none;
`