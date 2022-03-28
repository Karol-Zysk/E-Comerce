import React from "react";
import styled from "styled-components";

const Container = styled.main`
  max-width: 1300px;
  margin: 1rem auto;
  display: flex;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  display: flex;
  flex: 0.8;
  @media (max-width: 960px) {
    flex-direction: column;
    flex: 1;
  }
`;

const LeftImageWrapper = styled.div`
  margin: 1rem;
  flex: 0.6;
  @media (max-width: 960px) {
    flex: 1;
  }
`;

const LeftInfo = styled.div`
  margin: 1rem;
  flex: 0.4;
  background-color: white;
  height: fit-content;
  font-size: 0.9rem;
  @media (max-width: 960px) {
    flex: 1;
  }
`;

const LeftName = styled.p`
  font-weight: bold;
  font-size: 1.3rem;
  padding: 1rem;
`;
const Price = styled.p`
  padding: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;
const Desc = styled.p`
  padding: 1rem;
  border-bottom: none;
`;

const Image = styled.img`
  width: 100%;
`;

const Right = styled.div`
  flex: 0.2;
  @media (max-width: 960px) {
    flex: 1;
    padding: 1rem;
  }
`;

const RightInfo = styled.div`
  width: 250px;
  margin: 1rem;
  background-color: white;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
  @media (max-width: 960px) {
    width: 100%;
    margin: 0;
  }
  > p {
    padding: 1rem;
    font-size: 0.8rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Status = styled.p`
  padding: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const Span = styled.span``;

const Quantity = styled.p`
  padding: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const Select = styled.select`
  padding: 10px 16px;
`;

const Option = styled.option`
  padding: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const ButtonWrapper = styled.p`
  padding: 1rem;
  border: none;
`;

const Button = styled.button`
  grid-column: 1/ -1;
  padding: 10px 16px;
  background-color: black;
  color: white;
  border: 1px solid black;
  font-weight: bold;
  cursor: pointer;
  transition: all 200ms ease-in-out;
&&:hover{
    background-color: white;
color: black;}
`;

const ProductScreen = () => {
  return (
    <Container>
      <Left>
        <LeftImageWrapper>
          <Image
            src="https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1463&q=80"
            alt="productImage"
          />
        </LeftImageWrapper>
        <LeftInfo>
          <LeftName>Product 1</LeftName>
          <Price>Price: $5.99</Price>
          <Desc>
            JBL Flip 4 is the next generation in the award-winning Flip series;
            it is a portable Bluetooth speaker that delivers surprisingly
            powerful stereo sound. This compact speaker is powered by a 3000mAh
            rechargeable Li-ion battery that offers up to 12 hours of
            continuous, high-quality audio playtime.
          </Desc>
        </LeftInfo>
      </Left>
      <Right>
        <RightInfo>
          <Price>
            Price: <Span>$4.99</Span>
          </Price>
          <Status>
            Status: <Span>In Stock</Span>
          </Status>
          <Quantity>
            <Select>
              <Option value="1">1</Option>
              <Option value="2">2</Option>
              <Option value="3">3</Option>
              <Option value="4">4</Option>
              <Option value="5">5</Option>
              <Option value="6">6</Option>
            </Select>
          </Quantity>
          <ButtonWrapper>
            <Button>Add to cart</Button>
          </ButtonWrapper>
        </RightInfo>
      </Right>
    </Container>
  );
};

export default ProductScreen;
