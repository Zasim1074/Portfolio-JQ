import "./style.scss";
import { useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import Img1 from "./Images/1.png";
import Img2 from "./Images/2.png";
import Img3 from "./Images/3.png";
import Img4 from "./Images/4.png";
import Img5 from "./Images/5.png";
import Img6 from "./Images/6.png";
import Img7 from "./Images/7.png";
import Img8 from "./Images/8.png";
import Img9 from "./Images/9.png";
import { BsInfoCircleFill } from "react-icons/bs";

const portfolioData = [
  {
    Name: "Online Code Editor",
    Image: Img1,
    gLink: "https://github.com/Zasim1074/Code-Book",
    vLink: "https://code-book-roan.vercel.app/",
  },
  {
    Name: "AI Image Generator",
    Image: Img2,
    gLink: "",
    vLink: "",
  },
  {
    Name: "PortFolio",
    Image: Img3,
    gLink: "https://github.com/Zasim1074/Portfolio-JQ",
    vLink: "",
  },
  {
    Name: "Weather App",
    Image: Img4,
    gLink: "https://github.com/Zasim1074/Weather_Info",
    vLink: "https://weather-info-pearl.vercel.app/",
  },
  {
    Name: "Todo List",
    Image: Img5,
    gLink: "https://github.com/Zasim1074/Todo-list",
    vLink: "https://todo-list-psi-plum.vercel.app/",
  },
  {
    Name: "Tic Tac Toe",
    Image: Img6,
    gLink: "https://github.com/Zasim1074/Tic_tac_toe",
    vLink: "",
  },
  {
    Name: "Lottery Game",
    Image: Img7,
    gLink: "https://github.com/Zasim1074/Lottery-Game",
    vLink: "https://lottery-game-lac.vercel.app/",
  },
  {
    Name: "Currency Convertor",
    Image: Img8,
    gLink: "https://github.com/Zasim1074/Currency_convertor",
    vLink: "https://stellar-nougat-747a1c.netlify.app/",
  },
  {
    Name: "Stone Paper Scissors",
    Image: Img9,
    gLink: "https://github.com/Zasim1074/Stone-paper-scissors",
    vLink: "",
  },
];

const Portfolio = () => {
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleHover(index) {
    setHoveredValue(index);
  }

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Projects"
        icons={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio-content">
        <div className="portfolio-content-cards">
          {portfolioData.map((item, index) => (
            <div
              className="portfolio-content-cards-item"
              key={`cardItem${item.Name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio-content-cards-item-img-wrapper">
                <a>
                  <img alt="Click to visit Project" src={item.Image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.Name}</p>
                    {item.vLink && (
                      <button onClick={() => window.open(item.vLink, "_blank")}>
                        Live Preview
                      </button>
                    )}
                    {item.gLink && (
                      <button onClick={() => window.open(item.gLink, "_blank")}>
                        Source Code
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
