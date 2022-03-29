import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsTrash } from "react-icons/bs";

const Container = styled.div`
  padding: 2rem;
  margin-bottom: 18px;

  @media (max-width: 960px) {
    margin-bottom: 18px;
  }
  display: grid;
  grid-template-columns: 1fr 4fr 1fr 1fr 1fr;
  gap: 10px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 4px 16px 0 rgba(44, 44, 40, 0.47);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  place-items: center;
  font-size: 1.2rem;
  > a {
    text-decoration: none;
    font-weight: bold;
    color: black;
    border-bottom: 2px solid transparent;
    transition: all 150ms ease-in-out ;
    @media (max-width: 1100px) {
      font-size: 1rem;
    }
    @media (max-width: 700px) {
      font-size: 0.9rem;
    }
    @media (max-width: 500px) {
      font-size: 0.8rem;
    }
    &:hover {
      border-bottom: 2px solid black;
    }
  }
`;

const ImageWrapper = styled.div``;

const Image = styled.img`
  width: 190%;

  @media (max-width: 700px) {
    width: 160%;
  }
  @media (max-width: 500px) {
    width: 190%;
  }
`;

const ItemName = styled.p``;

const ItemPrice = styled.p`
font-size: 1.1rem;
  @media (max-width: 700px) {
    font-size: 0.8rem;
  }
  @media (max-width: 500px) {
    font-size: 0.7rem;
  }
`;

const Select = styled.select`
  padding: 10px 16px;
  @media (max-width: 700px) {
    padding: 8px 13px;
  }
  @media (max-width: 500px) {
    padding: 6px 11px;
  }
`;

const Option = styled.option`
  padding: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const Button = styled.button`
  font-size: 1.4rem;
  padding: 5px 5px;
  color: black;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-out;
  &:hover {
    transform: scale(1.05);
  }
`;

const CartItem = ({ item, quantityChangeHandler, removeHandler }) => {
  return (
    <Container>
      <ImageWrapper>
        <Image src={item.imageUrl} alt={item.name}></Image>
      </ImageWrapper>

      <Link to={`/products/${item.product}`}>
        <ItemName>{item.name}</ItemName>
      </Link>
      <ItemPrice>${item.price}</ItemPrice>
      <Select
        value={item.quantity}
        onChange={(e) => quantityChangeHandler(item.product, e.target.value)}
      >
        {[...Array(item.countInStock).keys()].map((x) => (
          <Option key={x + 1} value={x + 1}>
            {x + 1}
          </Option>
        ))}
      </Select>
      <Button onClick={() => removeHandler(item.product)}>
        <BsTrash></BsTrash>
      </Button>
    </Container>
  );
};

export default CartItem;
