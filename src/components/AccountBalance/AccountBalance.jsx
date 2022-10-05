import React, { Component } from "react";
import PropTypes from "prop-types";
// import "./AccountBalance.css";
import styled from "styled-components";

const Section = styled.section`
  font-size: 2rem;
  text-align: left;
  padding: 1.5rem 0 1.5rem 5rem;
`;
export default class AccountBalance extends Component {
  render() {
    let buttonText = this.props.showBalance ? "Hide Balance" : "Show Balance";
    let toggleBalance = this.props.showBalance ? (
      <> Balance: ${this.props.amount}</>
    ) : null;
    return (
      <Section className="accountBalance">
        {toggleBalance}
        <button onClick={this.props.handleBalanceVisibilityChange}>
          {buttonText}
        </button>
      </Section>
    );
  }
}

AccountBalance.propTypes = {
  amount: PropTypes.number.isRequired,
};
