import React from "react";
import styled from "styled-components";

const BackdropContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
`;

const Backdrop = ({ show }) => {
  return show && <BackdropContainer></BackdropContainer>;
};

export default Backdrop;
