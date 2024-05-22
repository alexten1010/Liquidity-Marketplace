import React from "react";

const App = () => {
  return (
    <section className="medium-padding120 responsive-align-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <header className="crumina-module crumina-heading heading--h2 heading--with-decoration">
              <div className="heading-sup-title">Top-5 Cryptocurrency</div>
              <h2 className="heading-title weight-normal">
                Statistics of Currencies on{" "}
                <span className="weight-bold">All Your Devices</span>
              </h2>

              <div className="heading-text">
                
The diversity of currencies held on devices reflects the increasing globalization and digitalization of finance. From major currencies like the US Dollar and Euro to emerging cryptocurrencies like Bitcoin and Ethereum, devices now serve as wallets for a wide array of assets. This trend is driven by factors such as international travel, cross-border e-commerce, and the growing popularity of decentralized finance (DeFi) platforms. As technology continues to advance, we can expect even greater diversification of currencies held on devices, with potential implications for traditional banking systems and global financial markets.
              </div>
            </header>

            <p>
            
Cryptocurrency markets exhibit a wide range of price fluctuations, with statistics revealing both extreme volatility and significant growth potential. Market capitalization, a key metric, reflects the total value of a cryptocurrency, while trading volume indicates the level of market activity. 
            </p>

            <div className="btn-market-wrap mt60">
              <a
                href="#"
                className="btn btn--market btn--apple btn--with-icon btn--icon-left"
              >
                <svg className="woox-icon icon-apple">
                  <use xlinkHref="#icon-apple"></use>
                </svg>

                <div className="text">
                  <span className="sup-title">download on</span>
                  <span className="title">Apple Store</span>
                </div>
              </a>
              <a
                href="#"
                className="btn btn--market btn--apple btn--with-icon btn--icon-left"
              >
                <svg className="woox-icon icon-if-59-play-843782">
                  <use xlinkHref="#icon-if-59-play-843782"></use>
                </svg>

                <div className="text">
                  <span className="sup-title">download on</span>
                  <span className="title">Google Play</span>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 mt30">
            <img className="responsive-width-50" src="img/phone.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
