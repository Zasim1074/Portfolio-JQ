import "./style.scss";
import { Animate } from "react-simple-animate";
import PageHeaderContent from "../../components/pageHeaderContent";
import { SiHtml5, SiCss3, SiJavascript, SiReact } from "react-icons/si";
import { BsInfoCircleFill } from "react-icons/bs";

const personalDetails = [
  {
    label: "Name",
    value: ": Jaseem Quraishi",
  },
  {
    label: "Age",
    value: ": 19",
  },
  {
    label: "Address",
    value: ": Indore, India",
  },
  {
    label: "Email",
    value: ": rdgvszasim@gamil.com",
  },
  {
    label: "Contact No.",
    value: ": + 91 9555917856",
  },
];

const summary =
  "Frontend Developer with ~6 months of hands-on experience building scalable, responsive, and performance-oriented web applications using React.js and modern JavaScript (ES6+). Strong experience in developing real-world projects, consuming REST APIs, managing application state, and implementing clean UI/UX. Currently working as a Frontend Developer at FloorWalk Consultants Pvt. Ltd., contributing to production-level applications. Seeking frontend roles in technology-driven companies.";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icons={<BsInfoCircleFill size={40} />}
      />

      <div className="about-content">
        <div className="about-content-personal-wrapper">
          <Animate
            play
            duration={1.5}
            delay={0}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3>Frontend Developer</h3>
            <p>{summary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={0}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3 className="personal-info-header-text">Personal Details</h3>
            <ul>
              {personalDetails.map((item, idx) => (
                <li key={idx}>
                  <span className="title">{item.label}</span>
                  <span className="value ">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>

        <div className="about-content-services-wrapper">
          <Animate
            play
            duration={1.5}
            delay={0}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <div className="about-content-services-wrapper-inner-content">
              <div>
                <SiHtml5 size={60} color="var(--yellow-theme-main-color)" />
              </div>

              <div>
                <SiCss3 size={60} color="var(--yellow-theme-main-color)" />
              </div>

              <div>
                <SiJavascript
                  size={60}
                  color="var(--yellow-theme-main-color)"
                />
              </div>

              <div>
                <SiReact size={60} color="var(--yellow-theme-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
