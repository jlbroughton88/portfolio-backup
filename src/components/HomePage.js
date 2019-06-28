import React, { Component } from "react";
import styled from "styled-components";
import QuickView from "./QuickView";
import AboutMe from "./AboutMe"
import DownloadResumeButton from "./DnldResume";
import Darkness from "./images/darkness/darkness.png"

class HomePage extends Component {
    render() {
        return (
            <HomePageWindow>
                <QuickView />
                <DownloadResumeButton/>
                <AboutMe/>
            </HomePageWindow>
        )
    }
}

export default HomePage;

const HomePageWindow = styled.div`
    display: flex;
    height: 80%;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(${Darkness});
    font-family: 'Lato', sans-serif;

    @media (max-width: 825px) {
        padding-left: 1vh;
        padding-right: 1vh;
      }
`