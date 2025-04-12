import "./style.scss";
import { BsInfoCircleFill } from "react-icons/bs";
import { skillData } from "./utils";
import { Animate, AnimateKeyframes } from "react-simple-animate";
import { Line } from "rc-progress";
import PageHeaderContent from "../../components/pageHeaderContent";

const Skills = () => {
  return (
    <section id="Skills" className="Skills">
      <PageHeaderContent
        headerText="My Skills"
        icons={<BsInfoCircleFill size={40} />}
      />

      <div className="skills-content-wrapper">
        {skillData.map((item, key) => (
          <div key={key} className="skills-content-wrapper-inner-content">
            <Animate
              play
              duration={1}
              delay={0.3}
              start={{
                transform: "translateX(-200px)",
              }}
              end={{
                transform: "translateX(0px)",
              }}
            >
              <h3 className="skills-content-wrapper-inner-content-category-text">
                {item.label}
              </h3>
              <div className="skills-content-wrapper-inner-content-progress-container">
                {item.Data.map((skillsitem, jkey) => (
                  <AnimateKeyframes
                    play
                    duration={1}
                    keyframes={["opacity: 1", "opacity: 0"]}
                    iterationCount={1}
                  >
                    <div className="progress-wrapper" key={jkey}>
                      <p>{skillsitem.skillName}</p>
                      <Line
                        percent={skillsitem.percentage}
                        strokeWidth={2}
                        strokeColor="var(--yellow-theme-main-color)"
                        trailWidth={2}
                        strokeLinecap="square"
                      />
                    </div>
                  </AnimateKeyframes>
                ))}
              </div>
            </Animate>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
