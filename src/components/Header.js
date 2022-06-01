import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Container>
            <h1>Farooq</h1>
            <Nav>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Projects</a>
                <a href="#">Experience</a>
                <a href="#">Education</a>
                <a href="#">Contact</a>
            </Nav>
        </Container>
    )
}

export default Header

const Container = styled.div`
    height : 60px;
    background : transparent;
    color : white;
    display : flex;
    justify-content : space-between;
    align-items : center;
    margin : 0 15vw;
`
const Nav = styled.div`
    display : flex;

    a{
        padding : 0 15px;
        color : white;
        text-decoration : None;
    }

    a:hover{
        color : gray;
    }

    @media screen and (max-width : 756px){
        flex-direction : column;
    }

`