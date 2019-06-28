import React from "react";
import styled from "styled-components"
import Calculator from "./images/calculator.png";
import Portfolio from "./images/portfolioPic.png"
import GuessingGame from "./images/guessingGame.png"
import LoneSoldier from "./images/loneSoldier.png"
import Prism from "./images/prism/prism.png"
import "../fonts.css"

const MyWork = () => {
    return (
        <MyWorkWindow>

            <Heading>My Work</Heading>

            <BottomDiv>
                <Section>
                <a href="https://jlbroughton88.github.io/Lone-Soldier-Game/"><Photo src={LoneSoldier} alt=""/></a>
                    <Name>Lone Soldier</Name>
                    <DescriptionDiv>
                        <Description>It might not be the next triple-A title, but it taught me a whole lot. Created with HTML, CSS, and Javascript.</Description>
                    </DescriptionDiv>

                </Section>

                <Section>
                    <a href="https://jlbroughton88.github.io/Bike-Guessing-Game/">
                    <Photo src={GuessingGame} alt=""/>
                    </a>
                
                    <Name>Guessing</Name>
                    <DescriptionDiv>
                        <Description>I've always been super into mountain biking, this little guessing game taught me alot of fundementals but also was a mini passion-project for me. Created with HTML, CSS and Javascript.</Description>
                    </DescriptionDiv>

                </Section>

                <Section>
                <a href="https://jlbroughton88.github.io/Calculator/">
                <Photo src={Calculator} alt=""/>
                </a>
                
                    <Name>Calculator</Name>
                    <DescriptionDiv>
                        <Description>This calculator was one of my first real projects, yeah everyone does it but i believe it helps drill some of the JS basics in. Created with HTML, CSS, and Javascript.</Description>
                    </DescriptionDiv>
                </Section>

                <Section>
                <a href="https://jlbroughton88.github.io/Portfolio/">
                <Photo src={Portfolio} alt=""/>
                </a>

                    <Name>Portfolio</Name>
                    <DescriptionDiv>
                        <Description>Well, you're looking at it now. This portfolio has taught me so much. Being constructed from about 90% React, including the CSS and JS. I was able to create inline CSS with the styled-components NPM. This project also has taught me routing and launching sites.</Description>
                    </DescriptionDiv>
                </Section>

            </BottomDiv>

        </MyWorkWindow>
    )
}

export default MyWork;

const MyWorkWindow = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 52vh;
    width: 100vh;
    padding: 2%;
    padding-top: 1%;
    margin-top: 42vh;
    box-shadow: 5px 5px #6486ad, 10px 10px #61c5ee;
    background: url(${Prism});

    @media (max-width: 825px) {
        width: 90vw;
        height: 52vh;
      }
`
const Heading = styled.h3`
    font-family: 'Lato', sans-serif;
    margin: 0;
    margin-top: 2vh;
    margin-bottom: 2vh;
    font-size: 4vh;
    color: #e5e5e5;

`
const BottomDiv = styled.div`
    display: flex;
    height: 100%;
    padding-top: 3%;
    justify-content: center;
`

const Section = styled.div`
    width: 20vw;
    height: 15vh;
    margin: 1%;
    margin-top: -2%;
`

const Photo = styled.img`   
    max-width: 90%;
    height: auto;
    width: 80%;
`

const Name = styled.h4`
font-family: 'Lato', sans-serif;
    margin: 0;
    margin-top: 1.5vh;
    font-size: 3vh;
    color: #e5e5e5;
    text-shadow: 1px;
    @media (max-height: 455px) {
        font-size: 3vh;
    }

    @media (max-height: 600px) {
        font-size: 2.5vh;
    }

    @media (max-height: 700px) {
        font-size: 3.0vh;
    }
    @media (max-width: 590px) {
        font-size: 2.6vh;
    }

    
`

const DescriptionDiv = styled.div`
    width: 100%;
    height: 22vh;
    overflow: auto;
    overflow-x: hidden;
`

const Description = styled.p`
    font-family: 'Lato', sans-serif;
    margin: 0;
    margin-left: -3%;
    margin-right: -3%;
    margin-top: 2vh;
    font-size: 2vh;
    color: #e5e5e5;

    @media (max-height: 455px) {
        font-size: 2.4vh;
    }

    @media (max-width: 605px) {
        font-size: 2.2vh;
    }

`