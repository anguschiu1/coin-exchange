import React from "react";
// import "./Coin.css";
import { PropTypes } from "prop-types";
import styled from "styled-components";

const Td = styled.td`
  border: 1px solid #cccccc;
  width: 30vh;
`;

export default function Coin(props) {
  const handleClick = (event) => {
    // Prevent the default action of submitting the form
    event.preventDefault();
    props.handleRefresh(props.tickerId);
  };
  return (
    <tr>
      <Td>{props.name}</Td>
      <Td>{props.ticker}</Td>
      <Td>${props.price}</Td>
      {props.showBalance ? <Td>${props.balance}</Td> : null}
      <Td>
        <form action="#" method="POST">
          <button onClick={handleClick}>Refresh</button>
        </form>
      </Td>
    </tr>
  );
}
// export default class Coin extends Component {
//   handleClick = (event) => {
//     // Prevent the default action of submitting the form
//     event.preventDefault();
//     this.props.handleRefresh(this.props.tickerId);
//   };
//   render() {
//     return (
//       <tr>
//         <Td>{this.props.name}</Td>
//         <Td>{this.props.ticker}</Td>
//         <Td>${this.props.price}</Td>
//         {this.props.showBalance ? <Td>${this.props.balance}</Td> : null}
//         <Td>
//           <form action="#" method="POST">
//             <button onClick={this.handleClick}>Refresh</button>
//           </form>
//         </Td>
//       </tr>
//     );
//   }
// }

Coin.propTypes = {
  name: PropTypes.string,
  ticker: PropTypes.string,
  price: PropTypes.number.isRequired,
};
