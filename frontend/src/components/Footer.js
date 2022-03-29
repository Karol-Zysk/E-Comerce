import React from 'react';
import styled from 'styled-components';
import {FaRegCopyright} from 'react-icons/fa'

const Container = styled.footer`
width:100%;
height: 120px;
background-color: black;
display:flex;
align-items: center;
justify-content: right;
padding-right: 50px;
`

const FooterText = styled.span`
display: flex;
font-size: 1rem;
color: rgba(255,255,255, 0.9);
justify-content: center;`

const Footer = () => {
    return <Container>
        <FooterText><FaRegCopyright style={{marginRight: '8px'}}/>   2022 DevKarol - All Rights Reserved </FooterText>
    </Container>;
}



export default Footer;