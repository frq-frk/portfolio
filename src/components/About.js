import React from 'react'
import styled from 'styled-components'
import Zoom from 'react-reveal/Zoom';

import {DiJava, DiPython, DiJavascript, DiHtml5,DiReact,DiDjango,DiCss3, DiBootstrap, DiMongodb} from 'react-icons/di'
import {SiNodedotjs} from 'react-icons/si'
import { IconContext } from "react-icons";

function About() {
    return (

        <Zoom>
            <Container>
                <Wrap>

                    <img src = "files/Profile.jpg"></img>

                    <Info>

                        <h2>About</h2>

                        <p>
                            I'm Farooq, I'm a Web Developer, Coder.</p><p>I graduated in year 2021.</p><p>I love logical
                            thinking and
                            problem solving as much as I love building solutions for real time problems.</p><p>My Other Interests are
                            Penetration Testing and App Development</p>
                     

                        <h2>Skills and Technologies</h2>

                    </Info>

                </Wrap>

                <Skills>
                    <Card>
                        <IconContext.Provider value={{color: 'white', size: 70}}>
                        <DiJava/>
                        </IconContext.Provider>
                        <h4>Java</h4>
                    </Card>

                    <Card>
                        <IconContext.Provider value={{color: 'white', size: 70}}>
                        <DiJavascript/>
                        </IconContext.Provider>
                        <h4>Javascript</h4>
                    </Card>

                    <Card>
                        <IconContext.Provider value={{color: 'white', size: 70}}>
                        <DiPython/>
                        </IconContext.Provider>
                        <h4>Python</h4>
                    </Card>

                    <Card>
                        <IconContext.Provider value={{color: 'white', size: 70}}>
                        <SiNodedotjs/>
                        </IconContext.Provider>
                        <h4>Node JS</h4>
                    </Card>

                    <Card>
                        <IconContext.Provider value={{color: 'white', size: 70}}>
                        <DiReact/>
                        </IconContext.Provider>
                        <h4>React JS</h4>
                    </Card>

                    <Card>
                        <IconContext.Provider value={{color: 'white', size: 70}}>
                        <DiDjango/>
                        </IconContext.Provider>
                        <h4>Django</h4>
                    </Card>

                    <Card>
                        <IconContext.Provider value={{color: 'white', size: 70}}>
                        <DiHtml5/>
                        </IconContext.Provider>
                        <h4>HTML</h4>
                    </Card>

                    <Card>
                        <IconContext.Provider value={{color: 'white', size: 70}}>
                        <DiCss3/>
                        </IconContext.Provider>
                        <h4>CSS</h4>
                    </Card>

                    <Card>
                        <IconContext.Provider value={{color: 'white', size: 70}}>
                        <DiBootstrap/>
                        </IconContext.Provider>
                        <h4>BootStrap</h4>
                    </Card>

                    <Card>
                        <IconContext.Provider value={{color: 'white', size: 70}}>
                        <DiMongodb/>
                        </IconContext.Provider>
                        <h4>MongoDB</h4>
                    </Card>

                </Skills>
            </Container>
        </Zoom>
    )
}

export default About

const Container = styled.div`

    width : 100%;
    height : 100vh;
    display : flex;
    flex-direction : column;
    justify-content : center;

    @media screen and (max-width : 756px){
        height : 100%;
    }

`

const Wrap = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 2.5rem;
    height: 60%;
    margin : 0 80px;

    p{
        margin : 0;
    }

    img{
        border-radius : 100%;
        padding : 20px;
        width : 230px;
    }

    @media screen and (max-width : 756px){
        flex-direction : column;
        text-align : center;
        height : 100%;
    }

`

const Info = styled.div`

    flex-basis : 70%;
    padding : 30px;
    display : flex;
    flex-direction : column;

`

const Skills = styled.div`

    display : flex;
    flex-wrap : wrap;
    height : 40%;
    padding : 0 80px;
    margin-bottom : 40px;
    justify-content : space-around;

    @media screen and (max-width : 756px){
        height : 100%;
        padding : 0 50px;
        padding-bottom : 20px;
    }

`

const Card = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
    margin : 0 70px;
    margin-bottom : 20px;
    border-radius : 10px;
    &:hover {
        box-shadow : 1px 1px 1px 1px lightgray;
    }

    @media screen and (max-width : 756px){
        margin : 0 40px;
    }
`
