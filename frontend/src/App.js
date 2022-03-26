import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Nav from "./components/Navbar";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

const Main = styled.main``;

function App() {
  return (
    <Router>
    <Nav/>
      <Main>
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route exact path="/product/:id" element={<ProductScreen />} />
          <Route exact path="/cart" element={<CartScreen />} />
        </Routes>
      </Main>
    </Router>
  );
}

export default App;
