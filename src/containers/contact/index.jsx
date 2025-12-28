import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import "./style.scss";
import PageHeaderContent from "../../components/pageHeaderContent";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

const connectPlatfroms = [
  {
    githubLink: "https://github.com/Zasim1074",
    LinkedInLink: "https://www.linkedin.com/in/jaseem-quraishi/",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="Contact Me"
        icons={<BsInfoCircleFill size={40} />}
      />
      <div className="contact-content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{ transform: "translateX(-200px)" }}
          end={{ transform: "translateX(0px)" }}
        >
          <h3 className="contact-content-header-text">Let's Talk</h3>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{ transform: "translateX(200px)" }}
          end={{ transform: "translateX(0px)" }}
        >
          <div className="contact-content-form">
            <div className="contact-content-form-controlswrapper">
              <div
                className="connect-platform"
                onClick={() =>
                  window.open(connectPlatfroms[0].githubLink, "_blank")
                }
                style={{ cursor: "pointer" }}
              >
                <FaGithub />
                &nbsp; GitHub
              </div>
              <div
                className="connect-platform"
                onClick={() =>
                  window.open(connectPlatfroms[0].LinkedInLink, "_blank")
                }
                style={{ cursor: "pointer" }}
              >
                <FaLinkedin />
                &nbsp; LinkedIn
              </div>

              <div>{<MdPhone />}&nbsp; Mobile: +91 9555917856</div>
              <div>{<MdEmail />} &nbsp;Email: rdgvszasim@gmail.com</div>
            </div>
          </div>
        </Animate>
      </div>
    </section>
  );
};

export default Contact;
