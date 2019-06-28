import React from "react";
import styled from "styled-components";
import linkedIn from "./socialMediaIcons/linkedin.png";
import gitHub from "./socialMediaIcons/githubLogoBlack.png";
import faceBook from "./socialMediaIcons/facebook.png";
import email from "./socialMediaIcons/email.png";
import MeInBoone from "./meInBooneCopy.JPG"
import Prism from "./images/prism/prism.png"
import "../fonts.css"


const QuickView = () => {
    return (
        <QuickViewWindow>
            <TopSection>
                <LeftArea>
                    <ProfileImgDiv>
                        <ProfileImg src={MeInBoone} alt="" />
                    </ProfileImgDiv>
                </LeftArea>
                <RightArea>
                    <InfoSection>
                        <HeaderSection>
                            <H2>Jacob Broughton</H2>
                            <H3>Developer</H3>
                        </HeaderSection>

                        <ParaSection>
                            <Para><Bold>Age:</Bold>&nbsp;20</Para>
                            <Para><Bold>Address:</Bold>&nbsp; Matthews, NC</Para>
                            <Para><Bold>Email:</Bold> &nbsp;JacobBroughton88@gmail.com</Para>
                            <Para><Bold>Phone:</Bold> &nbsp;704-770-8371</Para>
                        </ParaSection>

                    </InfoSection>
                </RightArea>
            </TopSection>

            <Footer>
                <FooterDiv>
                    <a href="https://www.linkedin.com">
                        <Img src={linkedIn} alt="" />
                    </a>
                    <a href="https://www.github.com">
                        <Img src={gitHub} alt="" />
                    </a>
                    <a href="mailto:jlbroughton88@gmail.com?subject=Contacting via portfolio...">
                        <Img src={email} alt="" />
                    </a>
                    <a href="https://www.facebook.com">
                        <Img src={faceBook} alt="" />
                    </a>




                </FooterDiv>

            </Footer>

        </QuickViewWindow>
    )
}

export default QuickView;

const QuickViewWindow = styled.div`
    display: block;
    flex-direction: column;
    background: url(${Prism});
    margin-top: 58vh;
    margin-bottom: 10vh;
    height: 60vh;
    width: 100vh;
    box-shadow: 4px 4px #6486ad, 8px 8px #61c5ee;
    font-family: 'Lato', sans-serif;

    @media (max-width: 825px) {
        width: 90vw;
        height: 60vh;
      }
`;

const TopSection = styled.div`
    height: 85%;
    width: 100%;
    display: flex;
`;


// LEFT SECTION
const LeftArea = styled.div`
    height: 94%;
    width: 34%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 1%;
    padding-top: 1.3%;
`;

const ProfileImgDiv = styled.div`
display: flex;
height: 80%;
width: 80%;
justify-content: center;
align-items: center;
align-content: center;
`

const ProfileImg = styled.img`
margin-top: 15%;
max-width: 100%;
height: auto;
width: 90%;
align-self: center;

@media (max-height: 500px) {
    margin-top: 15%;
    width: 90%;
}

@media (max-height: 400px) {
    margin-top: 15%;
    width: 75%;
}


@media (max-height: 365px) {
    margin-top: 15%;
    width: 70%;
}

@media (max-height: 330px) {
    margin-top: 10%;
    width: 65%;
}

@media (max-width: 583px) {
    margin-left: 10%;
    width: 100%;
}




@media (max-height: 310px) {
    margin-top: 5%;
    width: 60%;
}

`


// RIGHT SECTION
const RightArea = styled.div`
    width: 66%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Bold = styled.span`
text-shadow: 0px 0px 1.3px black;
font-weight: bold;
    float: left;
`

const HeaderSection = styled.div`
    height: 30%;
`;

const InfoSection = styled.div`
    height: 70%;
    width: 80%;
    padding-top: 3%;
    color: #e5e5e5;
`;

const ParaSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 65%;
    justify-content: flex-start;
    padding-top: 2%;
    border-top: 1px solid rgba(0, 0, 0, .3);

`;

const H2 = styled.h2`
    font-size: 2.8vh;
    margin-top: 0;
`

const H3 = styled.h3`
    font-size: 2.6vh;
`;

const Para = styled.p`
    font-size: 2.5vh;
    width: 90%;
    margin: 0.5em;
    text-align: left;
    margin-left: 6%;
    
    @media (max-width: 782px) {
        font-size: 2.3vh;
      }

    @media (max-width: 535px) {
        font-size: 2vh;
        margin-bottom: 2vh;
    }

`;

// FOOTER 
const Footer = styled.div`
    height: 1%;
    width: 100%;
    align-content: center;
    display: flex;
    justify-content: center;
`;
const FooterDiv = styled.div`
    height: 50%;
    width: 70%;
    align-self: center;
`;

const Img = styled.img`
    width: 3.7vw;
    height: 4.7vh;
    max-width: 36px;
    max-height: 36px;
    border-radius: 50%;
    margin: 5%;
    margin-top: 0;
    margin-bottom: 0;

    @media (max-height: 630px) {
        width: 3.3vw;
        height: 4.5vh;
      }

      @media (max-height: 580px) {
        width: 3.2vw;
        height: 4.5vh;
      }

      @media (max-height: 505px) {
        width: 2.4vw;
        height: 4vh;
      }

      @media (max-height: 405px) {
        width: 2.0vw;
        height: 3.8vh;
      }

`