import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";

const NavbarContainer = styled.nav`
  width: 100%;
  height: 110px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1rem;
  @media (max-width: 800px) {
    padding-left: 0rem;
  }
  z-index: 50;
  box-shadow: 0 8px 32px 0 rgba(44, 44, 40, 0.47);
`;

const NavbarLogo = styled.div`
  color: black;
  font-size: 1.4rem;
  cursor: pointer;
  margin-left: 3rem;

  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

const H1 = styled.h1`
  font-size: 3rem;
  font-weight: 300;
`;

const NavbarLinks = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  margin-right: 3rem;
  @media (max-width: 960px) {
    display: none;
  }
`;

const Li = styled.li`
  padding-left: 1.5rem;
  color: black;
  > a {
    text-decoration: none;
    color: black;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
  }
`;

const CartSpan = styled.span`
  display: flex;
  align-items: center;
  margin-left: 8px;
`;

const CartBadge = styled.span`
  width: 30px;
  height: 30px;
  background: white;
  border-radius: 50%;
  margin-left: 8px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.3rem;
`;
const HamburgerMenu = styled.div`
  width: 40px;
  height: 30px;
  display: none;

  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  @media (max-width: 960px) {
    display: flex;
  }
  &&:hover {
    > * {
      background-color: #dd219e;
    }
  }
`;

const CartLink = styled.div`
  background: white;
  padding: 10px;
  transition: 300ms ease;
  display: flex;
  border: solid 2px transparent;
  margin-right: 15px;

  &&:hover {
    border-bottom: solid 2px black;
    transition: 300ms ease;
    cursor: pointer;
  }
`;

const HamburgerItem = styled.div`
  width: 100%;
  height: 4px;
  background-color: black;
  &&:hover {
    background: #dd219e;
  }
`;

const Navbar = ({ toggle }) => {
  const cart = useSelector((state) => state.cart);

  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce(
      (quantity, item) => quantity + Number(item.quantity),
      0
    );
  };

  return (
    <NavbarContainer>
      <NavbarLogo>
        <H1>
          Gym<b>EQ</b>
        </H1>
      </NavbarLogo>

      <NavbarLinks>
        <Li>
          <Link to="/cart">
            <CartLink>
              <AiOutlineShoppingCart style={{ fontSize: "1.8rem" }} />
              <CartSpan>
                Cart
                <CartBadge>{getCartCount()}</CartBadge>
              </CartSpan>
            </CartLink>
          </Link>
        </Li>

        <Li>
          <Link style={{ fontSize: "2rem" }} to="/">
            Shop
          </Link>
        </Li>
      </NavbarLinks>

      <HamburgerMenu onClick={toggle}>
        <HamburgerItem></HamburgerItem>
        <HamburgerItem></HamburgerItem>
        <HamburgerItem></HamburgerItem>
      </HamburgerMenu>
    </NavbarContainer>
  );
};

export default Navbar;
