import React from "react";
import styled from "styled-components";
import Prism from "./images/prism/prism.png"
import "../fonts.css"

const AboutMe = () => {
    return (
        <AboutMeWindow>
            <AboutMeText>Hi there, my name is Jacob Broughton. I'd like to start off by thanking you for taking the time to check my portfolio out. I'm 20 years old and passionate about web development. As for hobbies of mine, i really enjoy mountain biking and hiking, something about being away from the general public, breathing fresher air... I feel that this is also where a lot of my ideas come from, from these moments of isolation. My initial career goal is to really find a group of people that i can bond with, a group that inspires eachother to create incredible things, whether that be for the company or on our own time. I really do hope to hear from you!</AboutMeText>
        </AboutMeWindow>
    )
}

export default AboutMe;

const AboutMeWindow = styled.div`
    display: flex;
    flex-direction: column;
    height: 13vh;
    width: 100vh;
    justify-content: flex-start;
    margin-bottom: 37vh;

    @media (max-width: 825px) {
        width: 90vw;
        height: 13vh;
      }

      @media (max-width: 565px) {
        margin-bottom: 45vh;

      }
`

const AboutMeText = styled.p`
font-family: 'Lato', sans-serif;
    font-size: 2.5vh;
    margin-bottom: ;
    color: #e5e5e5;
`

const Signature = styled.p`
    font-family: 'Lato', sans-serif;
    font-size: 2.3vh;
    color: #e5e5e5;

`