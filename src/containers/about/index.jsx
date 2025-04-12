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
    value: ": 20",
  },
  {
    label: "Address",
    value: ": Kanpur, India",
  },
  {
    label: "Email",
    value: ": rdgvszasim@gamil.com",
  },
  {
    label: "Contact No.",
    value: ": + 91 9918486080",
  },
];

const summary =
  "Final-year BSc(IT) student with a robust foundation in web development. My technical skill set includes proficiency in HTML, CSS, JavaScript, and React with experience utilizing Vite for efficient project builds.​ Throughout my academic journey, I have actively engaged in creating innovative and practical frontend projects. I am committed to crafting clean, responsive, and user-friendly interfaces, with a passion for continuous learning and contributing to open-source projects. I am dedicated to explore new trends in frontend development and UI/UX design.​ I am eager to join a team where I can further develop my skills and contribute to building meaningful products.";

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
