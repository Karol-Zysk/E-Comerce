import React from "react";
import styled from "styled-components";
import CartItem from "../components/CartItem";

const Container = styled.main`
  display: flex;
  max-width: 95%;
  margin-top: 2rem;
  
  @media (min-width: 960px) {
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 0.7;
  margin-right: 1rem;
  background-color: transparent;
  padding: 1rem;
  @media (max-width: 960px) {
    margin: 0;
  }
`;

const Title = styled.h2`
  margin-bottom: 1rem;
`;

const Right = styled.div`
  flex: 0.3;
  background-color: white;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
  height: fit-content;
  @media (max-width: 960px) {
    margin: 1rem;
  }
  > div {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding: 1rem;
  }
`;

const Info = styled.div``;

const Subtotal = styled.p`
  padding: 8px;
`;

const Price = styled.p`
  padding: 8px;
`;

const ButtonWrapper = styled.div`
  border-bottom: none;
`;

const Button = styled.button`
padding: 8px 16px;
width: 100%;
background-color: black;
color: white;
border: 1px solid black;
font-weight: bold;
cursor: pointer;
transition: all 200ms ease-in-out;
&&:hover{
    background-color: white;
color: black;
}`;

const CartScreen = () => {
  return (
    <Container>
      <Left>
        <Title>Shopping Cart</Title>
        <CartItem></CartItem>
      </Left>
      <Right>
        <Info>
          <Subtotal>Subtotal (0) items</Subtotal>
          <Price>$4.99</Price>
        </Info>
        <ButtonWrapper>
          <Button>Proceed to payment</Button>
        </ButtonWrapper>
      </Right>
    </Container>
  );
};

export default CartScreen;
