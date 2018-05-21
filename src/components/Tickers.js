import React,  { Component } from 'react';
import Cryptocurrency from './Cryptocurrency';
import './Tickers.css'

class Tickers extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
            id: "bitcoin",
            name: "Bitcoin",
            symbol: "BTC",
            price_usd: "1",
            percent_change_1h: "0",
            percent_change_24h: "0",
            percent_change_7d: "0",
        },
        {
          id: "ethereum",
          name: "ethereum",
          symbol: "ETH",
          price_usd: "1",
          percent_change_1h: "0",
          percent_change_24h: "0",
          percent_change_7d: "0",
        },
        {
          id: "litecoin",
          name: "Litecoin",
          symbol: "LTC",
          price_usd: "1",
          percent_change_1h: "0",
          percent_change_24h: "0",
          percent_change_7d: "0",
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
