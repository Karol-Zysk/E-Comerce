import styled from "styled-components";
import CartItem from "../components/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../redux/actions/cartActions";

const Container = styled.main`
  display: flex;
  max-width: 100%;

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
  font-size: 2.4rem;
  color: black;
  margin: 1rem 0rem 1rem 1.6rem;
  @media (max-width: 1232px) {
    font-size: 2.2rem;
  }
  @media (max-width: 950px) {
    font-size: 1.8rem;
  }
  @media (max-width: 630px) {
    font-size: 1.5rem;
  }
`;

const Right = styled.div`
  flex: 0.3;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 4px 16px 0 rgba(44, 44, 40, 0.47);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  height: fit-content;
  padding: 0.5rem;
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
  margin-bottom: 18px;
  font-size: 1.1rem;
`;

const Price = styled.p`
  font-size: 1.1rem;
  margin-bottom: 18px;
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
  &&:hover {
    background-color: white;
    color: black;
  }
`;

const CartScreen = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  const { cartItems } = cart;

  const quantityChangeHandler = (id, quantity) => {
    dispatch(addToCart(id, quantity));
  };

  const removeHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartCount = () => {
    return cartItems.reduce(
      (quantity, item) => Number(item.quantity) + quantity,
      0
    );
  };

  const getCartSubtotal = () => {
    return cartItems.reduce(
      (price, item) => item.price * item.quantity + price,
      0
    );
  };

  return (
    <Container>
      <Left>
        <Title>Shopping Cart</Title>
        {cartItems.length === 0 ? (
          <h3>
            Your Cart is empty <Link to="/">Go To Shop</Link>
          </h3>
        ) : (
          cartItems.map((item) => (
            <CartItem
              key={item.product}
              item={item}
              quantityChangeHandler={quantityChangeHandler}
              removeHandler={removeHandler}
            />
          ))
        )}
      </Left>
      <Right>
        <Info>
          <Subtotal>Subtotal ({getCartCount()}) items</Subtotal>
          <Price>${getCartSubtotal().toFixed(2)}</Price>
        </Info>
        <ButtonWrapper>
          <Button>Proceed to payment</Button>
        </ButtonWrapper>
      </Right>
    </Container>
  );
};

export default CartScreen;
