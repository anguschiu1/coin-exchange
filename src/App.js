import React from "react";

import CoinList from "./components/CoinList/CoinList";
import AccountBalance from "./components/AccountBalance/AccountBalance";
import ExchangeHeader from "./components/ExhcnageHeader/ExchangeHeader";
import styled from "styled-components";

const Div = styled.div`
  text-align: center;
  background-color: rgb(1, 25, 97);
  color: #cccccc;
`;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 10000,
      showBalance: true,
      coinData: [
        { balance: 100, name: "Bitcoin", ticker: "BTC", price: 9999.99 },
        { balance: 10, name: "Ethereum", ticker: "ETH", price: 222.99 },
        { balance: 1100, name: "Tether", ticker: "USDT", price: 1 },
        { balance: 1000, name: "Ripple", ticker: "XRP", price: 0.2 },
      ],
    };
    this.handleRefresh = this.handleRefresh.bind(this);
    this.handleBalanceVisibilityChange =
      this.handleBalanceVisibilityChange.bind(this);
  }
  handleBalanceVisibilityChange() {
    this.setState(function (oldState) {
      return {
        ...oldState,
        showBalance: !oldState.showBalance,
      };
    });
  }
  handleRefresh(valueChangeTicker) {
    const newCoinData = this.state.coinData.map(
      ({ ticker, name, price, balance }) => {
        let newPrice = price;
        if (valueChangeTicker === ticker) {
          const randomPercentage = 0.995 + Math.random() * 0.01;
          newPrice = newPrice * randomPercentage;
        }
        return {
          ticker,
          name,
          price: newPrice,
          balance,
        };
      }
    );
    this.setState({ coinData: newCoinData });
  }
  render() {
    return (
      <Div className="App">
        <ExchangeHeader />
        <AccountBalance
          amount={this.state.balance}
          showBalance={this.state.showBalance}
          handleBalanceVisibilityChange={this.handleBalanceVisibilityChange}
        />
        <CoinList
          coinData={this.state.coinData}
          handleRefresh={this.handleRefresh}
          showBalance={this.state.showBalance}
        />
      </Div>
    );
  }
}

export default App;
