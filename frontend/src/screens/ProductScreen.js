import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getProductDetails } from "../redux/actions/productActions";
import { useParams } from "react-router-dom";
import { addToCart } from "../redux/actions/cartActions";
import { useNavigate } from "react-router-dom";

const Container = styled.main`
  max-width: 100%;
  gap: 2rem;
  display: flex;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  display: flex;
  flex: 0.8;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 4px 16px 0 rgba(44, 44, 40, 0.47);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
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

const ProductName = styled.p`
  font-size: 1.2rem;
  overflow: hidden;
  font-weight: 600;
`;

const ProductDesc = styled.p`
  font-size: 0.9rem;
  margin-bottom: 18px;
`;

const ProductPrice = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
  text-align: right;
  margin: 22px;
`;

const Price = styled.p`
  font-weight: bold;
  font-size: 1rem;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 2px 8px 0 rgba(44, 44, 40, 0.47);
`;

const Right = styled.div`
  flex: 0.2;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 4px 16px 0 rgba(44, 44, 40, 0.47);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
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
  &&:hover {
    background-color: white;
    color: black;
  }
`;

const H2 = styled.h2`
  margin-left: auto;
  margin-right: auto;
  margin-top: 3rem;
`;

const ProductScreen = ({ history }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, product } = productDetails;

  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    if (product && id !== product._id) {
      dispatch(getProductDetails(id));
    }
  }, [dispatch, product, id]);

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, quantity));
    navigate("/cart");
  };

  return (
    <Container>
      {loading ? (
        <H2>Loading...</H2>
      ) : error ? (
        <H2>{error}</H2>
      ) : (
        <>
          <Left>
            <LeftImageWrapper>
              <Image src={product.imageUrl} alt={product.name} />
            </LeftImageWrapper>
            <LeftInfo>
              <ProductName>{product.name}</ProductName>
              <ProductPrice>Price: ${product.price}</ProductPrice>
              <ProductDesc>{product.description}</ProductDesc>
            </LeftInfo>
          </Left>
          <Right>
            <RightInfo>
              <Price>
                Price: <Span>${product.price}</Span>
              </Price>
              <Status>
                Status:{" "}
                <Span>
                  {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                </Span>
              </Status>
              <Quantity>
                <Select
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                >
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <Option key={x + 1} value={x + 1}>
                      {x + 1}
                    </Option>
                  ))}
                </Select>
              </Quantity>
              <ButtonWrapper>
                <Button onClick={addToCartHandler}>Add to cart</Button>
              </ButtonWrapper>
            </RightInfo>
          </Right>
        </>
      )}
    </Container>
  );
};

export default ProductScreen;
