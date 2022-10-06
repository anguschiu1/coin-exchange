import React from "react";
import Coin from "../Coin/Coin";
import styled from "styled-components";

const Table = styled.table`
  margin: 50px auto 50px auto;
  display: inline-block;
  font-size: 1.4rem;
`;

export default function CoinList(props) {
  return (
    <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Ticker</th>
          <th>Price</th>
          {props.showBalance ? <th>Balance</th> : null}
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.coinData.map(
          (
            { key, name, ticker, price, balance } // Use {} to destruct value
          ) => (
            <Coin
              key={key} // Cannot read it from props
              handleRefresh={props.handleRefresh}
              name={name}
              ticker={ticker}
              balance={balance}
              price={price}
              showBalance={props.showBalance}
              tickerId={key} // pass coin.id (a.k.a. key) to Coin
            />
          )
        )}
      </tbody>
    </Table>
  );
}
