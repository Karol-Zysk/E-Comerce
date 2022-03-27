import React from 'react';
import styled from 'styled-components';

const SideDrawerContainer = styled.div`
width: 70%;
height: 100vh;
background-color: white;
position: fixed;
top: 0;
left: 0;
z-index: 200;

`

const SideDrawer = ({show}) => {

const SideDrawerClass = ['sidedrawer']

if (show) {
    SideDrawerClass.push("show")
}

    return <SideDrawerContainer  className={(props)=> props.sideDrawerClass.join('')} ></SideDrawerContainer>;
}


export default SideDrawer;