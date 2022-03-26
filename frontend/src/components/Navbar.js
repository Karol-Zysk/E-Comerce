import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = styled.nav`
  width: 100%;
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
`;

const H1 = styled.h1`
  
`;

const NavbarLinks = styled.ul`
display:flex;
list-style: none;
align-items: center;`;

const Li  = styled.li`
padding-left: 1.5rem;
color: white;
`;

const CartBadge = styled.span``;

const HamburgerMenu = styled.div``;

const Nav = () => {
  return (
    <Navbar>
      <NavbarLogo>
        <H1>#GymEQ</H1>
      </NavbarLogo>

      <NavbarLinks>
        <Li>
          <Link to="/cart">
            <AiOutlineShoppingCart />
            Cart
            <CartBadge>0</CartBadge>
          </Link>
        </Li>

        <Li>
          <Link to="/">Shop</Link>
        </Li>
      </NavbarLinks>

      <HamburgerMenu>
        <div></div>
        <div></div>
        <div></div>
      </HamburgerMenu>
    </Navbar>
  );
};

export default Nav;
