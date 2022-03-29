import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Product from "../components/Product";

//actions
import { getProducts as listProducts } from "../redux/actions/productActions";

const Container = styled.div`
  max-width: 1300px;
  margin: 1rem auto;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: black;
  margin-bottom: 1rem;
  margin-left: 8px;
`;

const H2 = styled.h2`
  margin-left: auto;
  margin-right: auto;
  margin-top: 3rem;
`;

const Products = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  @media (max-width: 1232px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 950px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 630px) {
    grid-template-columns: 1fr;
  }
`;

const HomeScreen = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <Container>
      <Title>Equipment</Title>

      <Products>
        {loading ? (
          <H2>Loading...</H2>
        ) : error ? (
          <H2>{error}</H2>
        ) : (
          products.map((product) => (
            <Product
              key={product._id}
              productId={product._id}
              name={product.name}
              price={product.price}
              description={product.description}
              imageUrl={product.imageUrl}
            />
          ))
        )}
      </Products>
    </Container>
  );
};

export default HomeScreen;
