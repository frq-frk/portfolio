import React from 'react'
import styled from 'styled-components'
import Typed from 'react-typed'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function Projects() {

    const arr = ["I've always been fascinated with the idea of building Applications.",
                "So far I've worked on projects in streams of Andoid App Development, Django Framework and JavaScript Frameworks.",
                "I've worked on DataBases MySql, SQLite and Mongo DB.",
                "I've also used Google Firebase, Mongo Atlas.",
                "For deploying I've mostly used Heroku, Vercel and also Amazon EC2 instance for a while."]

    return (
        <Container>
            <h2>Projects</h2>

            <Typed
                strings = {arr}
                typeSpeed = {50}
                backSpeed = {20}
                loop
            
            />

            <Wrap>

            <Carousel showArrows={true}>
                <div>
                    <Card>
                        <Info>
                        <h3>Tesla Clone</h3>

                        <h4>Tech : React, Styled Components</h4>

                            <p>This is a clone of Tesla Official Website. This Project helped me to clearly understand how to break a project into components, use of props and react hooks.</p>
                            
                            <ButtonGroup>
                                <a href="https://github.com/frq-frk/tesla-clone" target="_blank"><LeftButton>Source Code</LeftButton></a>    
                                <a href="https://tesla-clone-ruddy-nine.vercel.app/" target="_blank"><RightButton>View Demo</RightButton></a>
                            </ButtonGroup>
                            
                            </Info>
                        <img src="files/tesla-clone.jpg"></img>
                    </Card>
                </div>
                <div>
                    <Card>
                        <Info>
                        <h3>Chat Room</h3>
                        <h4>Tech : NodeJs, ExpressJs, Socket.io</h4>
                            <p>This is a web app, which I completely focused on backend development using NodeJs and ExpressJs. This project helped me to understand how to buld a backend from scratch and also usage of sockets.io for asynchronous communication between server and the client.</p>
                            
                            <ButtonGroup>
                                <a href="https://github.com/frq-frk/node_space/tree/main/chatRoom" target="_blank"><LeftButton>Source Code</LeftButton></a>    
                                <a href="https://rocky-forest-43257.herokuapp.com/" target="_blank"><RightButton>View Demo</RightButton></a>
                            </ButtonGroup>

                            </Info>
                        <img src="files/chatRoom.jpg"></img>
                    </Card>
                </div>
                <div>
                    <Card>
                        <Info>
                        <h3>Weather Site</h3>
                        <h4>Tech : HTML,CSS,JQUERY,AJAX</h4>
                            <p>This is a site built using basic HTML, CSS. This project helped me to practice how all these basic tech can be combined to build a working site.</p>
                            <p>OpenWeatherApi has been used.</p>

                            <ButtonGroup>
                                <a href="https://github.com/frq-frk/fun/tree/main/jsPractice/weatherSite" target="_blank"><LeftButton>Source Code</LeftButton></a>    
                                <a href="https://frq-frk.github.io/fun/jsPractice/weatherSite/" target="_blank"><RightButton>View Demo</RightButton></a>
                            </ButtonGroup>

                            </Info>
                        <img src="files/weatherSite.jpg"></img>
                    </Card>
                </div>


            </Carousel>

            </Wrap>
            
        </Container>
    )
}

export default Projects

const Container = styled.div`

    height : 100vh;
    margin-top : 40px;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    @media screen and (max-width : 756px){
        height : 100%;
    }

`
const Wrap = styled.div`

    height = 80vh;
    margin : 50px;

`

const Card = styled.div`

    display : flex;
    margin : 0 80px;
    justify-content : space-around;
    align-items : center;

    img{
        max-width : 400px;
        border-radius : 20px;
        padding : 0 10px;
    }

    @media screen and (max-width : 756px){
        flex-direction : column;

        img{
            width : 80%;
        }
    }


`

const Info = styled.div`

    display = flex;
    flex-direction : column;
    margin : 0px 20px;

`

const ButtonGroup = styled.div`

    display : flex;
    margin-bottom : 20px;
    @media (max-width : 768px){
        flex-direction : column;
    }

    a{
        text-decoration : none;
    }
`

const LeftButton = styled.div`

    height : 30px;
    width : 100px;
    border : 1px solid white;
    display : flex;
    justify-content : center;
    align-items : center;
    border-radius : 100px;
    opacity : 0.85;
    text-transform : uppercase;
    font-size : 12px;
    font-weight : bolder;
    color : white;
    cursor : pointer;
    margin : 3px;
    transition : all 0.2s ease-in-out;

    &:hover{
        transform : translateY(-5px);
    }
`

const RightButton = styled(LeftButton)`

    background : white;
    opacity : 0.55;
    color : black;

`