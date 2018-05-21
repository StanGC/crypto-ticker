import React,  { Component } from 'react';
import './Tickers.css'

class Tickers extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
            id: "bitcoin",
            price: "1"
        },
        {
          id: "ethereum",
          price: "1"
        },
        {
          id: "litecoin",
          price: "1"
        }
      ]
    };
  }

  render() {
    var tickers = this.state.data.map((currency) =>
      <li key={currency.id}>
        <h3>{currency.id}</h3>
        <h4>{currency.price} USD</h4>
      </li>
    );
    return (
      <div className="tickers-container">
        <ul className="tickers">{tickers}</ul>
        <p>Information updated every minute courtesy of coinmarketcap.com</p>
      </div>
    );
  }
}

export  default Tickers;
