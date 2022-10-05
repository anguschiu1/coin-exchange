import React, { Component } from "react";
import logo from "./logo.svg";
import styled from "styled-components";
let sum = 0;
for (let number of [1, 2, 3, 4, 5]) {
  sum += number;
}

const Img = styled.img`
  height: 8rem;
  pointer-events: none;
`;
const Header = styled.header`
  background-color: #282c34;
  min-height: 20vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const H1 = styled.h1`
  font-size: 4rem;
`;

export default class ExchangeHeader extends Component {
  render() {
    return (
      <Header>
        <Img src={logo} alt="logo" />
        <H1> Coin Exchange {sum}</H1>{" "}
      </Header>
    );
  }
}
