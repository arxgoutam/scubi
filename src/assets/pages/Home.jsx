import AOS from "aos";
import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const data = {
  rows: [
    {
      title: "What are Scubi's vision and goals?",
      content: `Scubi builds the largest web3 game publishing platform on the TON blockchain.
$SCUBI builds an innovative web3 game publishing platform on the Ton blockchain platform. Where game designers and web3 game studios can release their games to the community the fastest and with the fewest resources, attracting the largest number of users in the shortest amount of time.`,
    },
    {
      title: "How is Scubi's community orientation determined?",
      content:
        "35% $SCUBI is the native token of Scubi that will be released to the community through a fair launch program on tonraffles.app. Additionally, 5% of $SCUBI will be airdropped to the community who most actively promote this project.",
    },
    {
      title: "What is the Scubi fair launch program?",
      content: `The Scubi project will release a one-time total supply of 35% of $SCUBI tokens to the community through a fair launch program on tonraffles.app. The official opening date of the fair will be announced later, please visit our official website regularly for updated information.`,
    },
    {
      title: "What is the Scubi NFT Collection?",
      content: `Scubi releases a collection 10,000 characters NFT. These are characters in Scubi's web3 game ecosystem, the owners of these potential NFT characters will be used for exchange on the marketplace.`,
    },
    {
      title: "I am a VC; how can I get involved with Scubi?",
      content: `For potential VC Partners, please contact our team to schedule an informational session and meet them. For companies interested in investment, please apply here!`,
    },
  ],
};

const styles = {
  // bgColor: 'white',
  titleTextColor: "blue",
  rowTitleColor: "blue",
  // rowContentColor: 'grey',
  // arrowColor: "red",
};

const config = {
  // animate: true,
  // arrowIcon: "V",
  // tabFocus: true
};

const Home = () => {
  return (
    <div>
      {/* ---------Hero Section----------  */}
      <div className="background-container">
        <div className="background-animation"></div>
      </div>
      <section className="hero">
        <div className="container">
          <div className="nav" data-aos="fade-up">
            <div className="logo">
              <a href="/">
                <img src="/images/logo-2.png" alt="logo" />
              </a>
            </div>
            <div className="nav-right">
              <div className="socials">
                <a href="https://twitter.com/ScubiWeb3" target="_blank">
                  <img src="/images/social-1.png" alt="X" />
                </a>
                <a href="https://t.me/scubiweb3game" target="_blank">
                  <img src="/images/social-2.png" alt="Telegram" />
                </a>
              </div>
              <button className="primary-btn">Buy Scubi</button>
            </div>
          </div>
          <div className="hero-container" data-aos="fade-up">
            <div className="hero-left">
              <h3>Fair Launch on Tonraffles</h3>
              <h1>SCUBI</h1>
              <p>
                The largest platform publishing web3 games on the TON blockchain
              </p>
              <button className="primary-btn join-fair-btn">
                Join Fair Launch
              </button>
              <div className="contract-box">
                <h3>Contract on TON</h3>
                <div className="address">
                  <p>UQATzkXLFVXFg2E5BCOmfEbr0KnAiyrI_4voXyutJW38TR45</p>
                  <button
                    onClick={() =>
                      navigator.clipboard.writeText(
                        "UQATzkXLFVXFg2E5BCOmfEbr0KnAiyrI_4voXyutJW38TR45"
                      )
                    }
                  >
                    Copy
                  </button>
                </div>
                <p>
                  Please double check the smart contract address before sending
                  Ton tokens
                </p>
              </div>
            </div>
            <div className="hero-right">
              <img src="/images/hero-img.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* ---------How To Buy Section----------  */}
      <section className="how-to-buy">
        <div className="container">
          <div className="how-to-buy-box" data-aos="fade-up">
            <div className="info">
              <h2>How to buy Scubi?</h2>
              <p>
                $Scubi is the native token of Scubi. Offered for sale only once
                through the Fair Launch sale program on the Tonraffles platform.
              </p>
              <a href="">Click here to watch the video guide</a>
            </div>
            <div className="btn-group">
              <button className="market-btn">Markets</button>
              <button className="primary-btn">Buy on Tonraffle</button>
            </div>
          </div>
          <div className="how-to-buy-con">
            <div className="buy-box" data-aos="fade-up">
              <img src="/images/buy-1.png" alt="" />
              <div className="buy-box-info">
                <h3>Step 1: Create a Tonkeeper Wallet</h3>
                <p>
                  Download and create a TON wallet address using Tonkeeper.
                  Download Tonkeeper here.
                </p>
              </div>
            </div>
            <div className="buy-box" data-aos="fade-up">
              <img src="/images/buy-2.png" alt="" />
              <div className="buy-box-info">
                <h3>Step 2: Transfer TON Tokens to wallet</h3>
                <p>
                  You can buy and transfer TON Tokens from the bybit exchange to
                  your newly created Tonkeeper wallet
                </p>
              </div>
            </div>
            <div className="buy-box" data-aos="fade-up">
              <img src="/images/buy-3.png" alt="" />
              <div className="buy-box-info">
                <h3>Step 3: Buy $SCUBI tokens</h3>
                <p>
                  The $SCUBI token will be offered for sale only once on April
                  10, 2024. For details on time and quantity, please see details
                  on the tonraffles platform.
                </p>
                <p>
                  The fair launch sale will sell 35% of the total supply, there
                  will be no more public sales in the future.
                </p>
              </div>
            </div>
            <div className="buy-box" data-aos="fade-up">
              <img src="/images/buy-4.png" alt="" />
              <div className="buy-box-info">
                <h3>Step 4: Listing $SCUBI token</h3>
                <p>
                  The $SCUBI token will be listed on the dex Ston.fi exchange
                  for mass trading immediately after the fair launch program
                  ends.
                </p>
                <p>
                  The total supply of 35% of the fair launch program will be
                  divided among participants who purchase the fair launch
                  program according to the contribution ratio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ---------NFT Slider Section----------  */}
      <section className="nft-slider">
        <div className="slides">
          <div className="slide">
            <img src="/images/nft/1.png" alt="" />
            <img src="/images/nft/2.png" alt="" />
            <img src="/images/nft/3.png" alt="" />
            <img src="/images/nft/4.png" alt="" />
            <img src="/images/nft/5.png" alt="" />
            <img src="/images/nft/6.png" alt="" />
            <img src="/images/nft/7.png" alt="" />
          </div>
          <div className="slide">
            <img src="/images/nft/8.png" alt="" />
            <img src="/images/nft/9.png" alt="" />
            <img src="/images/nft/10.png" alt="" />
            <img src="/images/nft/11.png" alt="" />
            <img src="/images/nft/12.png" alt="" />
            <img src="/images/nft/13.png" alt="" />
            <img src="/images/nft/14.png" alt="" />
          </div>
          <div className="slide">
            <img src="/images/nft/15.png" alt="" />
            <img src="/images/nft/16.png" alt="" />
            <img src="/images/nft/17.png" alt="" />
            <img src="/images/nft/18.png" alt="" />
            <img src="/images/nft/19.png" alt="" />
            <img src="/images/nft/20.png" alt="" />
            <img src="/images/nft/21.png" alt="" />
          </div>
          <div className="slide">
            <img src="/images/nft/22.png" alt="" />
            <img src="/images/nft/23.png" alt="" />
            <img src="/images/nft/24.png" alt="" />
            <img src="/images/nft/25.png" alt="" />
            <img src="/images/nft/26.png" alt="" />
            <img src="/images/nft/27.png" alt="" />
            <img src="/images/nft/28.png" alt="" />
          </div>
        </div>
      </section>
      {/* ---------Boxes Section----------  */}
      <section className="boxes">
        <div className="container">
          <div className="boxes-con" data-aos="flip-up" data-aos-delay="500">
            <div className="left">
              <img src="/images/scubi-name-image.png" alt="" />
            </div>
            <div className="right">
              <h3>Scubi’s Token Features</h3>
              <h4>Community Driven</h4>
              <p>
                Towards the TON blockchain platform community. The potential of
                the web3 game player community on the TON blockchain platform is
                huge.
              </p>
              <h4>MEME and NFT</h4>
              <p>
                Target the fun NFT and Meme creator community. We build a
                community of content creators, especially fun MEMEs that attract
                a lot of community attention.
              </p>
              <h4>Web3 Games Platform</h4>
              <p>
                $SCUBI builds an innovative platform that publishes web3 games
                on the Ton blockchain platform. Where game designers and web3
                games studios can release their games to the community in the
                fastest way and with the least amount of resources, attracting
                the largest number of users in the shortest amount of time.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ---------Sponser Section----------  */}
      <section className="sponser">
        <div className="container">
          <img src="/images/spons-1.png" alt="" />
          <img src="/images/spons-2.png" alt="" />
          <img src="/images/spons-3.png" alt="" />
          <img src="/images/spond-4.png" alt="" />
          <img src="/images/spons-5.png" alt="" />
        </div>
      </section>
      {/* ---------Tokenomics Section----------  */}
      <section className="tokenomics">
        <div className="container">
          <div className="title">
            <h2>TOKENOMICS</h2>
            <p>
              The total issued $SCUBI supply is $100 trillion. Through the open
              sale program at the fair is 35%, will be listed and widely traded
              immediately after the open sale program ends.
            </p>
          </div>
          <div
            className="tokenomics-chart"
            data-aos="zoom-in"
            data-aos-delay="500"
            data-aos-duration="1500"
          >
            <img src="/images/tok-chart.png" alt="" />
          </div>
          <div className="tokenomics-supply">
            <div className="supply-box">
              <h4>Total Supply:</h4>
              <h4>100,000,000,000,000.00</h4>
              <div className="box-bottom">
                <svg
                  width="42"
                  height="58"
                  viewBox="0 0 42 58"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.40003 26.3585C1.13269 27.1619 0.997588 28.0037 1.00003 28.8508V49.2046C1.0073 51.2698 1.82779 53.2484 3.28253 54.7087C4.73727 56.1691 6.70824 56.9927 8.76554 57H33.2345C35.2918 56.9927 37.2628 56.1691 38.7175 54.7087C40.1722 53.2484 40.9927 51.2698 41 49.2046V28.8092C40.9927 26.7403 40.1708 24.7583 38.7135 23.2953C37.2561 21.8324 35.2817 21.0073 33.2207 21H9.27589"
                    stroke="#00174C"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 21V13.766C8 10.3802 9.31696 7.13314 11.6612 4.73906C14.0054 2.34498 17.1848 1 20.5 1C23.8152 1 26.9946 2.34498 29.3388 4.73906C31.683 7.13314 33 10.3802 33 13.766"
                    stroke="#00174C"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5 22.5C5 23.0359 4.7141 23.5311 4.25 23.799C3.7859 24.067 3.2141 24.067 2.75 23.799C2.2859 23.5311 2 23.0359 2 22.5C2 21.9641 2.2859 21.4689 2.75 21.201C3.2141 20.933 3.7859 20.933 4.25 21.201C4.7141 21.4689 5 21.9641 5 22.5Z"
                    fill="#00174C"
                  />
                  <path
                    d="M8 39C8 34.7128 10.3825 30.7513 14.25 28.6077C18.1175 26.4641 22.8825 26.4641 26.75 28.6077C30.6175 30.7513 33 34.7128 33 39"
                    stroke="#00174C"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M33 39C33 43.2872 30.6175 47.2487 26.75 49.3923C22.8825 51.5359 18.1175 51.5359 14.25 49.3923C10.3825 47.2487 8 43.2872 8 39"
                    stroke="#00174C"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M20.5387 38.9997C19.7367 39.0121 18.9775 38.639 18.4974 37.9965C18.0173 37.354 17.8746 36.5201 18.1137 35.7546C18.3529 34.989 18.9448 34.3847 19.7053 34.1297C20.4658 33.8747 21.3024 34.0001 21.9547 34.4668C22.607 34.9335 22.9958 35.6848 23 36.4868"
                    stroke="#00174C"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M21 44C20.2044 44 19.4413 43.6839 18.8787 43.1213C18.3161 42.5587 18 41.7956 18 41"
                    stroke="#00174C"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M21 39C22.0718 39 23.0622 39.4765 23.5981 40.25C24.134 41.0235 24.134 41.9765 23.5981 42.75C23.0622 43.5235 22.0718 44 21 44"
                    stroke="#00174C"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M20.5 33V32"
                    stroke="#00174C"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M20.5 47V44"
                    stroke="#00174C"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <h3>Holders</h3>
                <h2>N/A</h2>
              </div>
            </div>
            <div className="supply-box">
              <h4>Fair Launch Supply:</h4>
              <h4>35,000,000,000,000.00</h4>
              <div className="box-bottom">
                <svg
                  width="54"
                  height="56"
                  viewBox="0 0 54 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M38.5133 22.7508C40.9395 26.0867 41.6386 30.3761 40.3971 34.3098C39.1556 38.2435 36.1209 41.3546 32.2193 42.6934C28.3176 44.0322 24.0121 43.4399 20.617 41.0972C17.2218 38.7545 15.1399 34.9396 15.0068 30.8168C14.8737 26.694 16.7051 22.7527 19.9421 20.1959C23.179 17.6391 27.4373 16.7702 31.4172 17.8545"
                    stroke="#00174C"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M24 24.3972H27.6242C28.2543 24.3972 28.8586 24.6606 29.3041 25.1294C29.7497 25.5983 30 26.2342 30 26.8972C30 27.5603 29.7497 28.1961 29.3041 28.665C28.8586 29.1338 28.2543 29.3972 27.6242 29.3972H25.3154"
                    stroke="#00174C"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M24 35.3839H27.8985C28.0786 35.4016 28.26 35.4016 28.44 35.3839C29.4042 35.2171 30.2312 34.6142 30.6705 33.758C31.1098 32.9017 31.1098 31.8927 30.6705 31.0364C30.2312 30.1802 29.4042 29.5774 28.44 29.4105C28.26 29.3928 28.0786 29.3928 27.8985 29.4105H25.3131"
                    stroke="#00174C"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M24 24.8972H28"
                    stroke="#00174C"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M24 35.8972H26"
                    stroke="#00174C"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M25.5 27.3972V37.3972"
                    stroke="#00174C"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M28.5 37.3972V35.3972"
                    stroke="#00174C"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M28.5 28.9672V28.8272"
                    stroke="#00174C"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M28.5 24.3972V22.3972"
                    stroke="#00174C"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M35 19.3972C35 19.7545 34.8094 20.0846 34.5 20.2632C34.1906 20.4419 33.8094 20.4419 33.5 20.2632C33.1906 20.0846 33 19.7545 33 19.3972C33 19.04 33.1906 18.7098 33.5 18.5312C33.8094 18.3526 34.1906 18.3526 34.5 18.5312C34.8094 18.7098 35 19.04 35 19.3972Z"
                    fill="#00174C"
                  />
                  <path
                    d="M42 8.89002C42.0022 7.1916 42.789 5.58948 44.1317 4.54933C45.4743 3.50918 47.2223 3.1477 48.8674 3.56995C50.5125 3.9922 51.8702 5.15081 52.546 6.70902C53.2217 8.26723 53.1396 10.0502 52.3236 11.5398C51.5075 13.0293 50.0491 14.0583 48.3721 14.3276C46.6952 14.5969 44.9879 14.0763 43.7464 12.9172"
                    stroke="#00174C"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M50.1615 44.7933C51.6277 46.1015 52.2846 48.0925 51.8848 50.0163C51.485 51.9401 50.0892 53.5045 48.2233 54.1202C46.3573 54.7358 44.3046 54.3093 42.8385 53.0011C41.3723 51.6929 40.7154 49.702 41.1152 47.7782C41.515 45.8543 42.9108 44.2899 44.7767 43.6743C46.6427 43.0586 48.6954 43.4852 50.1615 44.7933Z"
                    stroke="#00174C"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.2176 43.8439C11.487 45.0082 12.1376 46.6999 11.9756 48.4147C11.8135 50.1296 10.8574 51.6694 9.39237 52.5752C7.92733 53.4811 6.12254 53.6482 4.51606 53.0269C2.90957 52.4056 1.68694 51.0675 1.21266 49.4116C0.738375 47.7557 1.06722 45.9733 2.10116 44.5957C3.1351 43.2181 4.75471 42.4044 6.47715 42.3972"
                    stroke="#00174C"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14 16.8972C14 18.8622 12.9517 20.6779 11.25 21.6604C9.54829 22.6428 7.45171 22.6428 5.75 21.6604C4.04829 20.6779 3 18.8622 3 16.8972C3 14.9323 4.04829 13.1166 5.75 12.1341C7.45171 11.1516 9.54829 11.1516 11.25 12.1341C12.9517 13.1166 14 14.9323 14 16.8972Z"
                    stroke="#00174C"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M20 42.3972L12 48.3972"
                    stroke="#00174C"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10 22.3972L15 26.3972"
                    stroke="#00174C"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.135 41.3972L4.865 31.3972"
                    stroke="#00174C"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M41 50.3972L32 44.3972"
                    stroke="#00174C"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M47.5 41.3972V28.3972"
                    stroke="#00174C"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M47 15.3972L38 22.3972"
                    stroke="#00174C"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10 11.3972L16.0423 6.39722L27.0282 11.3601L43 6.39722"
                    stroke="#00174C"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16 4.39722L8 1.39722"
                    stroke="#00174C"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <h3>Total Contributors</h3>
                <h2>N/A</h2>
              </div>
            </div>
            <div className="supply-box">
              <h4>Soft Cap:</h4>
              <h4>1000 TON</h4>
              <div className="box-bottom">
                <svg
                  width="60"
                  height="55"
                  viewBox="0 0 60 55"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M45 46.8727C45.5416 46.3148 46.2861 46 47.0636 46C47.8412 46 48.5856 46.3148 49.1273 46.8727C49.6852 47.4144 50 48.1588 50 48.9364C50 49.7139 49.6852 50.4584 49.1273 51"
                    stroke="#00174C"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1 49L1.25742 48.7452L11.0396 39.0794C11.6178 38.4915 12.3005 38.014 13.0535 37.6707C13.8472 37.2816 14.7129 37.0572 15.5975 37.0113C15.7536 36.9962 15.9108 36.9962 16.0669 37.0113H31.2852C32.046 37.0539 32.7586 37.3934 33.2668 37.9552C33.7749 38.5171 34.0371 39.2556 33.9958 40.0085C34.0167 40.7894 33.7288 41.5476 33.1932 42.1215C32.7174 42.6769 32.0209 42.9996 31.2852 43.0057H17.8386"
                    stroke="#00174C"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M45 47.415C43.7471 49.0805 42.1915 50.4937 40.4148 51.5804C37.869 53.1664 34.9301 54.0047 31.9323 54H31.4738C28.3537 53.9172 25.3249 52.9281 22.7553 51.1528C20.1858 49.3775 18.1864 46.8926 17 44"
                    stroke="#00174C"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M33 26C33 21.3555 35.4778 17.0639 39.5 14.7417C43.5222 12.4194 48.4778 12.4194 52.5 14.7417C56.5222 17.0639 59 21.3555 59 26"
                    stroke="#00174C"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M59 26C59 30.6445 56.5222 34.9361 52.5 37.2583C48.4778 39.5806 43.5222 39.5806 39.5 37.2583C35.4778 34.9361 33 30.6445 33 26"
                    stroke="#00174C"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M45.5 26C44.6998 26 43.9479 25.6169 43.4775 24.9695C43.0071 24.322 42.8751 23.4886 43.1224 22.7275C43.3697 21.9664 43.9664 21.3697 44.7275 21.1224C45.4886 20.8751 46.322 21.0071 46.9695 21.4775C47.6169 21.9479 48 22.6998 48 23.5"
                    stroke="#00174C"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M45 31C44.4696 31 43.9609 30.7893 43.5858 30.4142C43.2107 30.0391 43 29.5304 43 29"
                    stroke="#00174C"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M46 26C46.7145 26 47.3748 26.4765 47.7321 27.25C48.0893 28.0235 48.0893 28.9765 47.7321 29.75C47.3748 30.5235 46.7145 31 46 31"
                    stroke="#00174C"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M45.5 20V19"
                    stroke="#00174C"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M45.5 33V32"
                    stroke="#00174C"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M45.5 8V1"
                    stroke="#00174C"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M31 12L25 6"
                    stroke="#00174C"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M27 26.5H18"
                    stroke="#00174C"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <h3>Liquidity</h3>
                <h2>51%</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ---------Roadmap Section----------  */}
      <section className="roadmap">
        <div className="container">
          <div className="title">
            <h2>ROADMAP</h2>
            <p>
              $SCUBI is a web3 game creation platform released on the TON
              blockchain platform. The roadmap is planned and designed for 3
              years, and will be continuously updated as soon as it becomes
              available
            </p>
          </div>
          <div className="roadmap-con">
            <div className="roabmap-box-1" data-aos="fade-up">
              <img src="/images/roadmap-pashe-bon.png" alt="" />
              <div className="roadmap-info-1">
                <p>Quarter 1 & 2 - 2024</p>
                <h3>Come up with ideas and build a technology platform</h3>
                <p>
                  <strong>Fair Launch: </strong> We focus on the technology
                  platform and fair launch program
                </p>
                <p>
                  <strong>Airdrop: </strong>deploy programs to attract users
                  through airdrop distribution
                </p>
              </div>
            </div>
            <div className="roabmap-box-2" data-aos="fade-up">
              <div className="roadmap-info-2">
                <p>Quarter 3 - 2024</p>
                <h3>Game release</h3>
                <p>
                  First release of innovative web3 game on TON blockchain
                  platform
                </p>
              </div>
              <img src="/images/roadmap-pashe-bon.png" alt="" />
            </div>
            <div className="roabmap-box-1" data-aos="fade-up">
              <img src="/images/roadmap-pashe-bon.png" alt="" />
              <div className="roadmap-info-1">
                <p>Quarter 4 - 2024</p>
                <h3>Scubi Platform Beta</h3>
                <p>
                  Scubi platform beta version with many interesting features
                  along with many utilities to attract the community and support
                  participants to make money
                </p>
              </div>
            </div>
            <div className="roabmap-box-2" data-aos="fade-up">
              <div className="roadmap-info-2">
                <p>Quarter 1 - 2025</p>
                <h3>To the moon</h3>
                <p>
                  Release Scubi Platform official version. Many features support
                  content creators and web3 game studios publishing their games
                </p>
              </div>
              <img src="/images/roadmap-pashe-bon.png" alt="" />
            </div>
          </div>
        </div>
        <div className="roadmap-side-img">
          <img src="/images/roadmap-side-img.png" alt="" />
        </div>
      </section>
      {/* ---------Sticker Section----------  */}
      <section className="sticker">
        <div className="container">
          <div className="title">
            <h2>TRENDINNG $SCUBI STICKERS</h2>
          </div>
          <div className="sticker-con">
            <div className="sticker-box">
              <img src="/images/sticker-1.png" alt="" />
              <div className="sticker-box-name">
                <h3>Fat Dog</h3>
                <h4>CEO</h4>
              </div>
            </div>
            <div className="sticker-box">
              <img src="/images/sticker-2.png" alt="" />
              <div className="sticker-box-name">
                <h3>Cute Dog</h3>
                <h4>CTO</h4>
              </div>
            </div>
            <div className="sticker-box">
              <img src="/images/sticker-3.png" alt="" />
              <div className="sticker-box-name">
                <h3>Funy Dog</h3>
                <h4>Head of marketing</h4>
              </div>
            </div>
            <div className="sticker-box">
              <img src="/images/sticker-4.png" alt="" />
              <div className="sticker-box-name">
                <h3>Donald Dog</h3>
                <h4>Customer Support</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ---------FAQ Section----------  */}
      <section className="faqs">
        <div className="container">
          <div className="title">
            <h2>FREQUENTLY ASKED</h2>
            <h2>QUESTIONS</h2>
          </div>
          <div className="faq-con">
            <Faq data={data} styles={styles} config={config} />
          </div>
        </div>
      </section>
      {/* ---------Community Section----------  */}
      <section className="community">
        <div className="container">
          <div className="community-box">
            <div className="community-content">
              <h2>JOIN COMMUNITY</h2>
              <p>
                Welcome Scubi! <br />
                Let’s begin the adventure
              </p>
              <a href="https://t.me/scubiweb3game" target="_blank">
                <svg
                  width="210"
                  height="65"
                  viewBox="0 0 210 65"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M32.5 1H177.5C194.897 1 209 15.103 209 32.5C209 49.897 194.897 64 177.5 64H32.5C15.103 64 1 49.897 1 32.5C1 15.103 15.103 1 32.5 1Z"
                    stroke="white"
                    stroke-width="2"
                  />
                  <circle
                    cx="32.5"
                    cy="32.5"
                    r="31.5"
                    stroke="white"
                    stroke-width="2"
                  />
                  <path
                    d="M75.1639 18.625H84.5439L85.8039 23.35H82.4089V44H77.2289V23.35H73.8339L75.1639 18.625ZM87.2146 44V18.625H97.0846L97.9596 23.35H92.4296V29.37H96.6296V33.745H92.4296V39.275H97.7496L96.8746 44H87.2146ZM99.7243 44V18.625H104.939V39.275H110.049L109.174 44H99.7243ZM111.619 44V18.625H121.489L122.364 23.35H116.834V29.37H121.034V33.745H116.834V39.275H122.154L121.279 44H111.619ZM124.129 40.08V21.705C124.129 19.85 125.144 18.625 127.139 18.625H134.384L135.259 23.35H129.694C129.344 23.35 129.239 23.525 129.239 23.84V38.89C129.239 39.205 129.344 39.38 129.694 39.38H132.004V29.37H136.939V44H128.084C125.179 44 124.129 42.88 124.129 40.08ZM146.488 23.07H144.003V31.82H146.488C146.873 31.82 146.978 31.68 146.978 31.295V23.595C146.978 23.28 146.838 23.07 146.488 23.07ZM151.983 21.915V33.675C151.983 34.795 151.178 35.915 149.708 35.915L152.368 44H147.118L144.668 35.915H144.003V44H138.928V18.625H148.553C150.933 18.625 151.983 19.92 151.983 21.915ZM162.229 40.85H158.764L158.309 44H153.199L157.784 18.625H163.209L167.794 44H162.684L162.229 40.85ZM160.514 27.83L159.324 36.825H161.669L160.514 27.83ZM177.297 42.18L174.112 32.03V44H169.177V18.625H174.532L177.297 29.335L180.062 18.625H185.452V44H180.517V32.03L177.297 42.18Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M33 9C19.746 9 9 19.746 9 33C9 46.254 19.746 57 33 57C46.254 57 57 46.254 57 33C57 19.746 46.254 9 33 9ZM44.124 25.322C43.764 29.116 42.2 38.326 41.406 42.576C41.07 44.376 40.406 44.978 39.766 45.036C38.372 45.164 37.314 44.114 35.964 43.23C33.852 41.846 32.658 40.984 30.608 39.632C28.238 38.07 29.774 37.212 31.124 35.81C31.478 35.442 37.618 29.856 37.738 29.35C37.752 29.286 37.768 29.05 37.626 28.926C37.484 28.802 37.278 28.844 37.13 28.878C36.918 28.926 33.544 31.156 27.006 35.568C26.048 36.226 25.18 36.546 24.402 36.53C23.546 36.512 21.898 36.046 20.672 35.646C19.17 35.158 17.974 34.898 18.078 34.07C18.132 33.638 18.726 33.196 19.862 32.744C26.858 29.696 31.524 27.686 33.858 26.714C40.524 23.942 41.908 23.46 42.812 23.444C43.944 23.428 44.216 24.362 44.124 25.322Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
            <div className="community-side-img-1">
              <img src="/images/community-side-img-1.png" alt="" />
            </div>
            <div className="community-side-img-2">
              <img src="/images/community-side-img-2.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* ---------Footer Section----------  */}
      <footer>
        <div className="container">
          <div className="f-left">
            <div className="logo">
              <img src="/images/logo-2.png" alt="" />
            </div>
            <a href="">Buy Scubi</a>
          </div>
          <div className="f-right">
            <div className="socials">
              <a href="https://twitter.com/ScubiWeb3" target="_blank">
                <img src="/images/social-1.png" alt="X" />
              </a>
              <a href="https://t.me/scubiweb3game" target="_blank">
                <img src="/images/social-2.png" alt="Telegram" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
