import AOS from "aos";
import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const data = {
  rows: [
    {
      title: "Lorem ipsum dolor sit amet,",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
              Fusce sed commodo purus, at tempus turpis.`,
    },
    {
      title: "Nunc maximus, magna at ultricies elementum",
      content:
        "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
    },
    {
      title: "Curabitur laoreet, mauris vel blandit fringilla",
      content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
    },
    {
      title: "What is the package version",
      content: <p>current version is 1.2.1</p>,
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
      <section className="hero">
        <div className="container">
          <div className="nav">
            <div className="logo">
              <a href="/">
                <img src="/images/logo.png" alt="logo" />
              </a>
            </div>
            <div className="nav-right">
              <div className="socials">
                <a href="" target="_blank">
                  <img src="/images/social-1.png" alt="X" />
                </a>
                <a href="" target="_blank">
                  <img src="/images/social-2.png" alt="Telegram" />
                </a>
                <a href="" target="_blank">
                  <img src="/images/social-3.png" alt="Discord" />
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
            <img src="/images/buy-1.png" alt="" />
            <img src="/images/buy-1.png" alt="" />
            <img src="/images/buy-1.png" alt="" />
            <img src="/images/buy-1.png" alt="" />
            <img src="/images/buy-1.png" alt="" />
            <img src="/images/buy-1.png" alt="" />
            <img src="/images/buy-1.png" alt="" />
            <img src="/images/buy-1.png" alt="" />
          </div>

          <div className="slide">
            <img src="/images/buy-1.png" alt="" />
            <img src="/images/buy-1.png" alt="" />
            <img src="/images/buy-1.png" alt="" />
            <img src="/images/buy-1.png" alt="" />
            <img src="/images/buy-1.png" alt="" />
            <img src="/images/buy-1.png" alt="" />
            <img src="/images/buy-1.png" alt="" />
            <img src="/images/buy-1.png" alt="" />
          </div>

          <div className="slide">
            <img src="/images/buy-1.png" alt="" />
            <img src="/images/buy-1.png" alt="" />
            <img src="/images/buy-1.png" alt="" />
            <img src="/images/buy-1.png" alt="" />
            <img src="/images/buy-1.png" alt="" />
            <img src="/images/buy-1.png" alt="" />
            <img src="/images/buy-1.png" alt="" />
            <img src="/images/buy-1.png" alt="" />
          </div>

          <div className="slide">
            <img src="/images/buy-1.png" alt="" />
            <img src="/images/buy-1.png" alt="" />
            <img src="/images/buy-1.png" alt="" />
            <img src="/images/buy-1.png" alt="" />
            <img src="/images/buy-1.png" alt="" />
            <img src="/images/buy-1.png" alt="" />
            <img src="/images/buy-1.png" alt="" />
            <img src="/images/buy-1.png" alt="" />
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
                <p>Quarter 1 - 2024</p>
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
                <p>Quarter 2</p>
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
                <p>Quarter 3</p>
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
                <p>Quarter 4 - 2025</p>
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
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
              </p>
              <a href="">
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
                    d="M91.7985 23.07H89.3835V39.555H91.7635C92.1835 39.555 92.2535 39.415 92.2535 39.03V23.56C92.2535 23.245 92.1485 23.07 91.7985 23.07ZM97.2935 21.705V40.08C97.2935 42.88 96.2435 44 93.3385 44H84.3435V18.625H94.2835C96.2785 18.625 97.2935 19.85 97.2935 21.705ZM99.3825 44V18.625H104.458V44H99.3825ZM114.085 44H107.82L106.91 39.275H112.37C112.825 39.275 112.965 39.135 112.965 38.75V34.13C112.965 33.43 112.72 33.395 112.02 33.395H109.395C107.89 33.395 106.56 33.045 106.56 30.525V21.915C106.56 19.92 107.61 18.625 109.99 18.625H116.99L117.865 23.35H112.125C111.705 23.35 111.495 23.525 111.495 23.91V28.53C111.495 29.055 111.74 29.195 112.265 29.195H115.45C117.06 29.195 117.97 29.895 117.97 31.785V40.15C117.97 42.95 116.99 44 114.085 44ZM129.686 44H124.016C121.111 44 120.061 42.88 120.061 40.08V21.74C120.061 19.745 121.356 18.625 123.036 18.625H129.721L130.596 23.35H125.731C125.381 23.35 125.276 23.525 125.276 23.84V38.785C125.276 39.1 125.381 39.275 125.731 39.275H130.596L129.686 44ZM139.823 23.07H137.828C137.478 23.07 137.373 23.245 137.373 23.56V39.03C137.373 39.415 137.443 39.555 137.863 39.555H139.788C140.208 39.555 140.278 39.415 140.278 39.03V23.56C140.278 23.245 140.173 23.07 139.823 23.07ZM145.423 21.915V40.395C145.423 42.32 144.618 44 141.783 44H135.903C133.068 44 132.263 42.32 132.263 40.395V21.915C132.263 19.92 133.313 18.625 135.693 18.625H141.993C144.373 18.625 145.423 19.92 145.423 21.915ZM155.068 23.07H152.583V31.82H155.068C155.453 31.82 155.558 31.68 155.558 31.295V23.595C155.558 23.28 155.418 23.07 155.068 23.07ZM160.563 21.915V33.675C160.563 34.795 159.758 35.915 158.288 35.915L160.948 44H155.698L153.248 35.915H152.583V44H147.508V18.625H157.133C159.513 18.625 160.563 19.92 160.563 21.915ZM170.172 23.07H167.757V39.555H170.137C170.557 39.555 170.627 39.415 170.627 39.03V23.56C170.627 23.245 170.522 23.07 170.172 23.07ZM175.667 21.705V40.08C175.667 42.88 174.617 44 171.712 44H162.717V18.625H172.657C174.652 18.625 175.667 19.85 175.667 21.705Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M32.5 60C47.6878 60 60 47.6878 60 32.5C60 17.3122 47.6878 5 32.5 5C17.3122 5 5 17.3122 5 32.5C5 47.6878 17.3122 60 32.5 60ZM37.9208 16.8971C40.7533 17.376 43.4619 18.2183 45.9889 19.3579C46.0109 19.3667 46.0291 19.3831 46.0401 19.4042C50.5175 25.8818 52.7274 33.1917 51.9016 41.605C51.8996 41.6228 51.8939 41.6399 51.8848 41.6553C51.8757 41.6707 51.8634 41.6839 51.8487 41.6942C48.8455 43.8822 45.494 45.5468 41.9358 46.6176C41.9108 46.6251 41.884 46.6247 41.8591 46.6164C41.8343 46.6081 41.8126 46.5924 41.7971 46.5714C41.0489 45.5457 40.3685 44.4656 39.7739 43.3309C39.7658 43.3153 39.7611 43.2981 39.7602 43.2805C39.7592 43.2629 39.7621 43.2453 39.7685 43.2289C39.7749 43.2125 39.7847 43.1976 39.7973 43.1853C39.8099 43.173 39.825 43.1635 39.8416 43.1575C40.9201 42.7578 41.9474 42.2772 42.935 41.709C42.9527 41.6986 42.9674 41.6839 42.9779 41.6664C42.9885 41.6488 42.9945 41.6289 42.9955 41.6085C42.9965 41.588 42.9924 41.5677 42.9836 41.5492C42.9747 41.5307 42.9615 41.5147 42.945 41.5026C42.7352 41.349 42.5287 41.1888 42.3306 41.0269C42.3124 41.0125 42.2905 41.0034 42.2675 41.0008C42.2444 40.9982 42.221 41.0021 42.2001 41.0121C35.7902 43.9255 28.766 43.9255 22.2801 41.0121C22.2592 41.0026 22.2361 40.9992 22.2134 41.0021C22.1906 41.005 22.1691 41.0142 22.1513 41.0286C21.9531 41.1888 21.745 41.349 21.5369 41.5026C21.5205 41.5149 21.5075 41.5312 21.4989 41.5498C21.4904 41.5685 21.4866 41.5889 21.4879 41.6094C21.4892 41.6298 21.4956 41.6497 21.5064 41.6671C21.5173 41.6845 21.5323 41.6989 21.5501 41.709C22.5412 42.2725 23.575 42.7574 24.6419 43.1592C24.7113 43.1856 24.7443 43.2649 24.7096 43.3309C24.1283 44.4672 23.4478 45.549 22.6848 46.573C22.6686 46.5933 22.6468 46.6082 22.622 46.6159C22.5973 46.6236 22.5708 46.6236 22.546 46.616C18.994 45.5421 15.6479 43.8783 12.648 41.6942C12.6337 41.6833 12.6219 41.6696 12.6131 41.654C12.6043 41.6384 12.5987 41.6212 12.5968 41.6033C11.9048 34.3264 13.3136 26.957 18.4534 19.4009C18.466 19.381 18.4845 19.3654 18.5062 19.3563C21.0348 18.215 23.7434 17.3727 26.5743 16.8938C26.5998 16.8897 26.626 16.8935 26.6493 16.9048C26.6726 16.916 26.692 16.934 26.7048 16.9565C27.0819 17.6142 27.4221 18.2924 27.7238 18.988C30.7279 18.5391 33.782 18.5391 36.7861 18.988C37.057 18.3604 37.4435 17.566 37.7903 16.9565C37.8032 16.9343 37.8227 16.9166 37.8461 16.906C37.8694 16.8953 37.8956 16.8922 37.9208 16.8971ZM22.1166 33.2413C22.1166 35.4065 23.7269 37.1721 25.6791 37.1721C27.6627 37.1721 29.2416 35.4082 29.2416 33.2413C29.273 31.0893 27.6776 29.3105 25.6791 29.3105C23.6956 29.3105 22.1166 31.0744 22.1166 33.2413ZM35.2881 33.2413C35.2881 35.4065 36.8968 37.1721 38.8506 37.1721C40.8507 37.1721 42.4131 35.4082 42.4131 33.2413C42.4445 31.0893 40.8491 29.3105 38.8506 29.3105C36.8654 29.3105 35.2881 31.0744 35.2881 33.2413Z"
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
              <img src="/images/logo.png" alt="" />
            </div>
            <a href="">Buy Scubi</a>
          </div>
          <div className="f-right">
            <div className="socials">
              <a href="" target="_blank">
                <img src="/images/social-1.png" alt="X" />
              </a>
              <a href="" target="_blank">
                <img src="/images/social-2.png" alt="Telegram" />
              </a>
              <a href="" target="_blank">
                <img src="/images/social-3.png" alt="Discord" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
