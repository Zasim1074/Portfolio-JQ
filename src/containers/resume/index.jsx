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
  Experience: [{
      title: "Frontend & Flutter Developer",
      company: "FloorWalk Consultants Pvt. Ltd.",
      description:
        'Developing and maintaining React.js frontend web applications using JavaScript (ES6+) for internal and client-facing products. - Building and shipping cross-platform mobile applications using Flutter with fully responsive layouts for mobile and tablet devices. - Developed two production-ready Flutter applications ensuring consistent UI/UX across Android platforms. - Implemented reusable React components and Flutter widgets, improving development speed and code consistency. - Integrated REST APIs and WebSockets to enable real-time data updates and seamless frontend–backend communication. - Collaborated with designers and backend engineers to deliver pixel-perfect, responsive,and performance-optimized user interfaces. - Optimized frontend performance by improving component rendering, state management, and widget structuring.',
      dateYear: "Aug 2025 - Present",
    },
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
      standard: "BSC( Information Technology)",
      insitute: "Guru Nanak Dev University, Amritsar",
      score: "Passed Out",
      dateYear: "Aug 2022 - Jun 2025",
    },  
    {
      standard: "12th",
      insitute: "VDI InterCollege",
      score: "Non-Medical",
      dateYear: "2021-2022",
    },
    {
      standard: "10th",
      insitute: "RDGV School",
      score: "Science",
      dateYear: "2019-2020",
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
