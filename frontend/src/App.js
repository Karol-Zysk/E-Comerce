import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import Backdrop from "./components/Backdrop";
import Navbar from "./components/Navbar";
import SideDrawer from "./components/SideDrawer";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import Footer from "./components/Footer";

const Main = styled.main`
  background: transparent;
  padding: 5rem 2rem 2rem 2rem;
  @media (max-width: 960px) {
    padding: 3rem 1rem 1rem 1rem;
  }
`;

function App() {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      <Navbar toggle={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} toggle={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} toggle={() => setSideToggle(false)} />
      <Main>
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route exact path="/products/:id" element={<ProductScreen />} />
          <Route exact path="/cart" element={<CartScreen />} />
        </Routes>
      </Main>
      <Footer/>
    </Router>
  );
}

export default App;
