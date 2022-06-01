import React from 'react'

import styled from 'styled-components'

import Intro from './Intro'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'

function Home() {
    return (
        <Container>
            <Intro/>
            <About/>
            <Projects/>
            <Contact/>
        </Container>
    )
}

export default Home

const Container = styled.div`
    height : 100%;

`