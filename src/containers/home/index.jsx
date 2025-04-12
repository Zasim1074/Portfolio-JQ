import { useNavigate } from "react-router-dom";
import "./style.scss";
import { Animate } from "react-simple-animate";

const Home = () => {
  const navigate = useNavigate();

  const navigateToContactMe = () => {
    navigate("/contact");
  };

  return (
    <section id="home" className="home">
      <div className="home-text-wrapper">
        <h1>
          Hello, I'm Jaseem
          <br></br>
          Frontend Developer
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(550px)",
        }}
        end={{
          transform: "translateX(0px)",
        }}
      >
        <div className="home-contact-me">
          <button onClick={navigateToContactMe}>Hire Me</button>
        </div>
      </Animate>
    </section>
  );
};

export default Home;
