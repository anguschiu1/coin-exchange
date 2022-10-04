import React, { Component } from "react";
// import "./Coin.css";
import { PropTypes } from "prop-types";
import styled from "styled-components";

const Td = styled.td`
  border: 1px solid #cccccc;
  width: 30vh;
`;

export default class Coin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: this.props.price,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  // componentDidMount() {
  //   const callback = () => {
  //     //set state to new random value
  //     const randomPercentage = 0.995 + Math.random() * 0.01;

  //     // DON'T DO THIS:
  //     // this.state.price *= randomPercentage
  //     //Not preferred, may cause concurrency issue as states depending on each others may collides
  //     // this.setState({ price: oldState.price * randomPercentage });
  //     this.setState(function (oldState) {
  //       return {
  //         price: oldState.price * randomPercentage,
  //       };
  //     });
  //   };
  //   setInterval(callback, 1000);
  // }
  handleClick(event) {
    // Prevent the default action of submitting the form
    event.preventDefault();

    const randomPercentage = 0.995 + Math.random() * 0.01;
    this.setState(function (oldState) {
      return {
        price: oldState.price * randomPercentage,
      };
    });
  }
  render() {
    return (
      <tr>
        <Td>{this.props.name}</Td>
        <Td>{this.props.ticker}</Td>
        <Td>${this.state.price}</Td>
        <Td>
          <form action="#" method="POST">
            <button onClick={this.handleClick}>Refresh</button>
          </form>
        </Td>
      </tr>
    );
  }
}

Coin.propTypes = {
  name: PropTypes.string,
  ticker: PropTypes.string,
  price: PropTypes.number.isRequired,
};
