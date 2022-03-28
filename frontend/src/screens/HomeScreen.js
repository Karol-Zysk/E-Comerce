import React from "react";
import styled from "styled-components";
import Product from "../components/Product";

const Container = styled.div`
  max-width: 1300px;
  margin: 1rem auto;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: black;
  margin-bottom: 1rem;
  margin-left: 8px;
`;

const Products = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  @media (max-width: 1232px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 950px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 630px) {
    grid-template-columns:  1fr;
  }
  
`;

const HomeScreen = () => {
  return (
    <Container>
      <Title>Equipment</Title>

      <Products>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </Products>
    </Container>
  );
};

export default HomeScreen;
