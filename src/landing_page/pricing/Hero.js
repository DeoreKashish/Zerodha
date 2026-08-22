import React from "react";

function Hero() {
  return (
    <div className="container text-center ">
      <div className="row p-5 mt-5 border-bottom tesxt-center">
        <h1>Pricing</h1>
        <h3 className="text-muted fs-5">
          Free equity investments and flat 20rs traday and F&O trades
        </h3>
      </div>
      <div className="row p-5 mt-5 text-center ">
        <div className="col-4 p-4">
          <img src="\Assests\pricingEquity.svg" />
          <h1 className="fs-3">Free equity delivery</h1>
          <p className="text-muted">
            All equity delivery investments(NSE, BSE), are absolutely free - 0rs
            brokerage.
          </p>
        </div>
        <div className="col-4 p-4">
          <img src="\Assests\intradayTrades.svg" />
          <h1 className="fs-3">Intraday and F&O trades</h1>
          <p className="text-muted">
            Flat RS. 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across euity, currency, and commodity trades.
          </p>
        </div>
        <div className="col-4 p-4">
          <img src="\Assests\pricingEquity.svg" />
          <h1 className="fs-3">Free direct MF</h1>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free - Rs. 0
            commission & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
