import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import Backdrop from "./components/Backdrop";
import Navbar from "./components/Navbar";
import SideDrawer from "./components/SideDrawer";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

const Main = styled.main``;

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
    </Router>
  );
}

export default App;
