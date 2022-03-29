import React from "react";
import styled from "styled-components";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux'

const SideDrawerContainer = styled.div`
  width: 70%;
  height: 100vh;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(-100%)")};
  transition: all 300ms ease-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 960px) {
    display: none;
  }
`;

const SideDrawerUl = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
`;

const SideDrawerLi = styled.ul`
  display: flex;
  align-items: center;
  > * {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex: 1;
    padding: 1rem;
    text-decoration: none;
    color: black;
    font-size: 1.8rem;
    font-weight: bold;
    &:hover {
      background-color: black;
      color: white;
      transition: all 300ms;
    }
  }
`;

const SideDrawerSpan = styled.span`
  display: flex;
  align-items: center;
  margin-left: 8px;
`;

const SideDrawerBadge = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: black;
  font-size: 1.2rem;
  margin-left: 8px;
  color: white;
  ${SideDrawerLi}:hover & {
    color: black;
    background-color: white;
  }
`;

const SideDrawer = ({ show, toggle }) => {

  const cart = useSelector((state) => state.cart);

  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce(
      (quantity, item) => quantity + Number(item.quantity),
      0
    );
  };


  return (
    <SideDrawerContainer show={show}>
      <SideDrawerUl onClick={toggle}>
        <SideDrawerLi>
          <Link to="/cart">
            <AiOutlineShoppingCart />
            <SideDrawerSpan>
              Cart <SideDrawerBadge>{getCartCount()}</SideDrawerBadge>
            </SideDrawerSpan>
          </Link>
        </SideDrawerLi>
        <SideDrawerLi>
          <Link to="/">Shop</Link>
        </SideDrawerLi>
      </SideDrawerUl>
    </SideDrawerContainer>
  );
};

export default SideDrawer;
