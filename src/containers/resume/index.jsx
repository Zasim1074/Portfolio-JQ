import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./style.scss";
import { MdWork } from "react-icons/md";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";

const resumeData = {
  Experience: [
    {
      title: "Project Management Intern ",
      company: "FloorWalk Consultants Pvt. Ltd.",
      description:
        'Led two big mystery shopping projects( "CARS24" and "NEXION"), managing web portals and data analysis. Reduced data processing time through improved audit summary reporting',
      dateYear: "Jun 2023 - Aug 2023",
    },
  ],

  Education: [
    {
      standard: "10th",
      insitute: "RDGV School",
      dateYear: "2019-2020",
    },
    {
      standard: "12th",
      insitute: "VDI InterCollege",
      score: "Non-Medical",
      dateYear: "2021-2022",
    },
    {
      standard: "BSC( Information Technology)",
      insitute: "Guru Nanak Dev University, Amritsar",
      score: "CGPA: Pursuing%",
      dateYear: "Aug 2022 - Currently Pursuing",
    },
  ],
};

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <PageHeaderContent
        headerText="My Resume"
        icons={<BsInfoCircleFill size={40} />}
      />
      <div className="timeline">
        <div className="timeline__education">
          <h3 className="timeline__education__header-text">Education</h3>
          <VerticalTimeline
            layout={"1-column"}
            lineColor="var(--yellow-theme-main-color)"
          >
            {resumeData.Education.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline__experience__vertical-timeline-element"
                contentStyle={{
                  background: "none",
                  color: "var(--yellow-theme-sub-text-color)",
                  border: "1.5px solid var(--yellow-theme-main-color)",
                }}
                icon={<MdWork />}
                iconStyle={{
                  background: "#181818",
                  color: "var(--yellow-theme-main-color)",
                }}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3>
                    📝 &nbsp;{item.standard} &nbsp;•&nbsp; {item.dateYear}
                  </h3>
                </div>

                <br></br>
                <div className="vertical-timeline-element-title-wrapper">
                  <h3>🏫&nbsp; {item.insitute}</h3>
                </div>

                <br></br>
                <div className="vertical-timeline-element-title-wrapper">
                  <h3>{item.score}</h3>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>

        <div className="timeline__experience">
          <h3 className="timeline__experience__header-text">Experience</h3>
          <VerticalTimeline
            layout={"1-column"}
            lineColor="var(--yellow-theme-main-color)"
          >
            {resumeData.Experience.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline__experience__vertical-timeline-element"
                contentStyle={{
                  background: "none",
                  color: "var(--yellow-theme-sub-text-color)",
                  border: "1.5px solid var(--yellow-theme-main-color)",
                }}
                icon={<MdWork />}
                iconStyle={{
                  background: "#181818",
                  color: "var(--yellow-theme-main-color)",
                }}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3>
                    {item.title} &nbsp;•&nbsp; {item.dateYear}
                  </h3>
                </div>

                <br></br>

                <div className="vertical-timeline-element-title-wrapper">
                  <h3>🏙️ &nbsp;&nbsp;{item.company}</h3>
                </div>

                <p className="vertical-timeline-element-title-wrapper-description">
                  Description: {item.description}{" "}
                </p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};
export default Resume;
