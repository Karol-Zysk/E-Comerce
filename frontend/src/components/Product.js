import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 300px;
  padding: 1rem;
  background-color: white;
  cursor: pointer;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
  margin: 8px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 1232px) {
    width: 360px;
  }
  @media (max-width: 1115px) {
    width: 330px;
  }
  @media (max-width: 1028px) {
    width: 300px;
  }
  @media (max-width: 950px) {
    width: 400px;
  }
  @media (max-width: 830px) {
    width: 330px;
  }
  @media (max-width: 700px) {
    width: 290px;
  } 
  @media (max-width: 630px) {
    width: 450px;
  } 
  @media (max-width: 500px) {
    width: 350px;
  } 
`;

const Image = styled.img`
  height: 170px;
  border-radius: 8px;
  margin-bottom: 8px;
`;

const ProductInfo = styled.div`
  > a {
    display: block;
    width: 90%;
    text-decoration: none;
    text-align: center;
    color: white;
    background-color: black;
    padding: 8px 16px;
    border: 1px solid black;
    margin-left: auto;
    margin-right: auto;
    font-size: 1rem;
    font-weight: bold;
    &:hover {
      background-color: white;
      color: black;

      transition: all 200ms;
    }
  }
  > * {
    margin-bottom: 8px;
  }
`;

const ProductName = styled.p`
  font-size: 1rem;
  overflow: hidden;
  font-weight: 500;
`;

const ProductDesc = styled.p`
  font-size: 0.8rem;
`;

const ProductPrice = styled.p`
  font-weight: bold;
`;

const Product = () => {
  return (
    <Container>
      <Image
        src="https://images.unsplash.com/photo-1564424224827-cd24b8915874?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"
        alt="Product"
      />
      <ProductInfo>
        <ProductName>Piłka do rolowania</ProductName>
        <ProductDesc>
          Piłka służy do masażu głębokich mięsni zbyt mocno spiętych. Roluj się
          z głową
        </ProductDesc>
        <ProductPrice>$10</ProductPrice>
        <Link to={`/product/${111}`}> View</Link>
      </ProductInfo>
    </Container>
  );
};

export default Product;
