import React from 'react'
import styled from 'styled-components'

import { IconContext } from "react-icons";
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

function Contact() {
    return (
        <Container>
            <h1>Let's Get In Touch</h1>
            <p>As of now, I'm exploring for new job opportunities, my inbox is always open if you want to communicate
        with me. Hit me up if you have some question, want a collaboration or just play a game of chess. I'll try to get
        back to you as soon as I can.</p>

        <Links>
            <a href="#"><LinkWrap>
                <IconContext.Provider value={{color: 'white', size: 20}}>
                    <AiFillLinkedin/>
                </IconContext.Provider>
                Linkedin
            </LinkWrap></a>

            <a href="#"><LinkWrap>
                <IconContext.Provider value={{color: 'white', size: 20}}>
                    <AiFillGithub/>
                </IconContext.Provider>
                Github
            </LinkWrap></a>
        
        </Links>

        </Container>
    )
}

export default Contact

const Container = styled.div`

    width : 100%;
    height : 100vh;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;

    @media screen and (max-width : 756px){
        height : 100%;
    }

    p{
        margin : 0 15vw;
    }

`

const Links = styled.div`

    display : flex;
    justify-content : space-between;
    align-items : center;
    margin : 20px;
    a{
        text-decoration : none;
        margin : 10px;

    }

`

const LinkWrap = styled.div`

    display : flex;
    color : white;

`