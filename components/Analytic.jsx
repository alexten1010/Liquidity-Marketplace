import React from "react";

const Analytic = () => {
  return (
    <section className="bg-dotted-map">
      <div className="container">
        <div className="row medium-padding300 align-center">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <img src="img/dots.png" className="primary-dots mb30" alt="" />

            <header className="crumina-module crumina-heading heading--h2 heading--with-decoration">
              <h2 className="heading-title weight-normal">
                Life in the
                <span className="weight-bold">digital world</span>
              </h2>
              <div className="heading-text">Blockchain Technology</div>
            </header>

            <div className="counters">
              <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                <div className="crumina-module crumina-counter-item">
                  <h4 className="counter-title">Market price</h4>
                  <p className="counter-text">
                    
Market price is the current price at which an asset, good, or service can be bought or sold. It's determined by the dynamic interaction of supply and demand in the market. When demand exceeds supply, prices tend to rise, and when supply surpasses demand, prices typically fall. Market prices are crucial indicators for buyers and sellers, guiding their decisions and shaping overall economic activity.
                  </p>
                  <div className="counter-line"></div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                <div className="crumina-module crumina-counter-item">
                  <div className="counter-numbers counter">
                    <span>16</span>
                    <div className="units">mb</div>
                  </div>
                  <h4 className="counter-title">Market price</h4>
                  <p className="counter-text">
                  In the cryptocurrency market, prices are particularly volatile due to the nascent nature of the technology and the speculative nature of the assets. The limited supply of many cryptocurrencies, like Bitcoin, coupled with increasing demand, can drive prices up rapidly. However, negative news, regulatory changes, or security breaches can trigger equally swift declines. Market sentiment, often amplified by social media and online communities, also plays a significant role in cryptocurrency price movements.
                  </p>
                  <div className="counter-line"></div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                <div className="crumina-module crumina-counter-item">
                  <h4 className="counter-title">Market price</h4>
                  <p className="counter-text">
                  The decentralized nature of cryptocurrencies means there's no central authority controlling their value, making them susceptible to price manipulation and market bubbles.  Investors and traders must carefully analyze market trends, technological developments, and regulatory landscapes to navigate this volatile market.
                  </p>
                  <div className="counter-line"></div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                <div className="crumina-module crumina-counter-item">
                  <div className="counter-numbers counter">
                    <div className="units">+</div>
                  </div>
                  <h4 className="counter-title">Market price</h4>
                  <p className="counter-text">
                  Despite the risks, the potential for high returns has attracted many investors to cryptocurrencies. As the market matures and gains wider acceptance, we can expect a degree of price stabilization, but volatility will likely remain a defining feature of this evolving asset class.
                  </p>
                  <div className="counter-line"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analytic;
