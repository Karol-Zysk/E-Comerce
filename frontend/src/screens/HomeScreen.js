import React from "react";
import styled from "styled-components";
import Product from "../components/Product";

const Container = styled.main`
max-width: 1300px;
margin: 1rem auto;
`;

const Title = styled.h2`
font-size: 1.5rem;
color: black;
margin-bottom: 1rem;
margin-left: 8px;
`

const Products = styled.div`
display: grid;
`



const HomeScreen = () => {
  return <Container>
  <Title>Equipment</Title>

  <Products>
    <Product/>
  </Products>
  </Container>;
};

export default HomeScreen;
