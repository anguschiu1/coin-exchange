import React from "react";

import CoinList from "./components/CoinList/CoinList";
import AccountBalance from "./components/AccountBalance/AccountBalance";
import ExchangeHeader from "./components/ExhcnageHeader/ExchangeHeader";
import styled from "styled-components";
import axios from "axios";
const Div = styled.div`
  text-align: center;
  background-color: rgb(1, 25, 97);
  color: #cccccc;
`;

const COIN_COUNT = 10;
const formatPrice = (price) => parseFloat(Number(price).toFixed(4));
class App extends React.Component {
  state = {
    balance: 10000,
    showBalance: true,
    coinData: [
      // { balance: 100, name: "Bitcoin", ticker: "BTC", price: 9999.99 },
      // { balance: 10, name: "Ethereum", ticker: "ETH", price: 222.99 },
      // { balance: 1100, name: "Tether", ticker: "USDT", price: 1 },
      // { balance: 1000, name: "Ripple", ticker: "XRP", price: 0.2 },
    ],
  };
  componentDidMount = async () => {
    console.log("component mounted.");
    const response = await axios.get("https://api.coinpaprika.com/v1/coins");
    const coinIds = response.data.slice(0, COIN_COUNT).map((coin) => coin.id);
    const tickerUrl = "https://api.coinpaprika.com/v1/tickers/";
    const promises = coinIds.map((id) => axios.get(tickerUrl + id));
    const coinData = await Promise.all(promises);
    const coinPriceData = coinData.map(function (response) {
      const coin = response.data;
      return {
        key: coin.id,
        name: coin.name,
        ticker: coin.symbol,
        balance: 0,
        price: parseFloat(Number(coin.quotes.USD.price).toFixed(4)),
      };
    });
    this.setState({ coinData: coinPriceData });
  };
  handleBalanceVisibilityChange = () => {
    this.setState(function (oldState) {
      return {
        ...oldState,
        showBalance: !oldState.showBalance,
      };
    });
  };
  handleRefresh = async (valueChangeId) => {
    const tickerUrl = `https://api.coinpaprika.com/v1/tickers/${valueChangeId}`;
    const response = await axios.get(tickerUrl);
    debugger;
    const newPrice = formatPrice(response.data.quotes.USD.price);
    const newCoinData = this.state.coinData.map((values) => {
      let newValues = { ...values };
      if (valueChangeId === values.key) {
        newValues.price = newPrice;
      }
      return newValues;
    });
    this.setState({ coinData: newCoinData });
  };
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
