import React from "react";
import styled from "styled-components";
import Prism from "./images/prism/prism.png"


const TimeLine = () => {
    return (
        <TimeLineWindow>
            <TimeLineHeader>My Timeline</TimeLineHeader>
            <TimeLineRow1>
                
                <TimeLineDiv1>
                    <Img src="" alt="" />
                    <Header>High School Binary</Header>
                    {/* <DescDiv> */}
                        <Description>Yepp, binary. In high school, i took a computer engineering class and we very briefly went over binary code and the absolute basics of how computers read these patterns. This planted the seed...somewhat.</Description>
                    {/* </DescDiv> */}
                </TimeLineDiv1>
            </TimeLineRow1>
            <TimeLineRow2>
                <TimeLineDiv2>
                    <Img src="" alt="" />
                    <Header>The Reddit Ad</Header>
                    {/* <DescDiv> */}
                        <Description>It was a tuesday night, scrolling through r/Bitcoin, and this wonderful "UNCC Coding Bootcamp" advertisement grazed my screen. I knew it was a sign, i signed up the next day.</Description>
                    {/* </DescDiv> */}
                </TimeLineDiv2>
            </TimeLineRow2>
            <TimeLineRow3>
                <TimeLineDiv3>
                    <Img src="" alt="" />
                    <Header>UNCC Coding Bootcamp</Header>
                    {/* <DescDiv> */}
                        <Description>Man, this class was something else. I didnt know my 2.7 high school GPA brain could work so hard and learn so much. This group of fantastic people changed my life, for the better.</Description>
                    {/* </DescDiv> */}
                </TimeLineDiv3>
            </TimeLineRow3>
        </TimeLineWindow>
    )

}

export default TimeLine;

const TimeLineWindow = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 90vh;
    width: 100vh;
    margin-top: 6vh;
    padding: 1vh;
    padding-left: 4vh;
    padding-right: 4vh;

`

const TimeLineHeader = styled.h2`
    margin-top: 0;
    margin-bottom: 9vh;
    font-size: 5vh;
    color: #e5e5e5;
`

const TimeLineRow1 = styled.div`
    display: flex;
    height: 33.3vh;
    width: 100vh;
    margin-bottom: 3vh;
    justify-content: flex-start;

    @media (max-width: 825px) {
        justify-content: center;
    }
`
const TimeLineRow2 = styled.div`
    display: flex;
    height: 33.3vh;
    width: 100vh;
    margin-bottom: 3vh;
    justify-content: center;
`
const TimeLineRow3 = styled.div`
    display: flex;
    height: 33.3vh;
    width: 100vh;
    justify-content: flex-end;

    @media (max-width: 825px) {
        justify-content: center;
    }
`

const TimeLineDiv1 = styled.div`
    flex-direction: column;
    display: flex;
    height: 80%;
    width: 35%;
    background: url(${Prism});
    color: black;
    box-shadow: 5px 5px #6486ad, 10px 10px #61c5ee;
    align-content: center;
    justify-content: center;
    padding: 1vh;
`
const TimeLineDiv2 = styled.div`
    flex-direction: column;
    display: flex;
    height: 80%;
    width: 35%;
    background: url(${Prism});
    color: black; 
    box-shadow: 5px 5px #6486ad, 10px 10px #61c5ee;
    align-content: center;
    justify-content: center;
    padding: 1vh;
`
const TimeLineDiv3 = styled.div`
    flex-direction: column;
    display: flex;
    height: 80%;
    width: 35%;
   background: url(${Prism});
   color: black;
   box-shadow: 5px 5px #6486ad, 10px 10px #61c5ee;
    overflow: scroll;
    align-content: center;
    justify-content: center;
    padding: 1vh;
`

const Header = styled.h4`
    margin:0;
    margin-bottom: 1vh;
    color: #f09e01;
`

const Img = styled.img`
    height: 33%;
    width: 70%;
    background: grey;
    align-self: center;
    margin: 1vh;
    margin-top: 0;
`

const Description = styled.p`
    font-size: 1.55vh;
    margin: 0;
    color: #e5e5e5;
`