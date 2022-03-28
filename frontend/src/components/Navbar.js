import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

const NavbarContainer = styled.nav`
  width: 100%;
  height: 110px;
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1rem;
  z-index: 50;
`;

const NavbarLogo = styled.div`
  color: white;
  font-size: 1.4rem;
  cursor: pointer;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

const H1 = styled.h1``;

const NavbarLinks = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  @media (max-width: 960px) {
    display: none;
  }
`;

const Li = styled.li`
  padding-left: 1.5rem;
  color: white;
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
  font-size: 1rem;
`;
const HamburgerMenu = styled.div`
  width: 30px;
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

const CartLink = styled.a`
  background: #333;
  padding: 10px;
  border-radius: 8px;
  transition: 300ms ease;

  &&:hover {
    background-color: #dd219e;
    transition: 300ms ease;
    cursor: pointer;
  }
`;

const HamburgerItem = styled.div`
  width: 100%;
  height: 3px;
  background-color: white;
  &&:hover {
    background: #dd219e;
  }
`;

const Navbar = ({ toggle }) => {
  return (
    <NavbarContainer>
      <NavbarLogo>
        <H1>GymEQ</H1>
      </NavbarLogo>

      <NavbarLinks>
        <Li>
          <CartLink to="/cart" style={{}}>
            <AiOutlineShoppingCart />
            <CartSpan>
              Cart
              <CartBadge>0</CartBadge>
            </CartSpan>
          </CartLink>
        </Li>

        <Li>
          <Link to="/">Shop</Link>
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
