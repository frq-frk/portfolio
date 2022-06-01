import React from 'react'

import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

function Intro() {
    return (
        <Wrap>
            <Fade top>
                <h4>Hi there,</h4>
            </Fade>
            
            <Zoom>
                <h2>My name is Farooq Mohammad Mulla</h2>
            </Zoom>

            <Fade bottom>
                <h4>I'm a Web Developer</h4>
            </Fade>
        </Wrap>
    )
}

export default Intro

const Wrap = styled.div`

    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    line-height: 2.5rem;
    height: 100vh;

    h2{
        font-size : 30px;
    }

    h4{
        font-size : 15px;
    }

`