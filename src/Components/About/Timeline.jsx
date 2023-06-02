import React from "react";
import "./Timeline.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import StarRateIcon from "@material-ui/icons/StarRate";
import { ThemeContext } from "../../Context/theme";

export const Timeline = () => {
  const [{ themename }] = React.useContext(ThemeContext);
  const [linecolor, setlinecolor] = React.useState(
    themename === "light" ? "#23283e" : "#fcfcfc"
  );

  React.useEffect(() => {
    if (themename === "dark") {
      setlinecolor("#fcfcfc");
    } else {
      setlinecolor("#23283e");
    }
  }, [themename]);
  return (
    <>
      <div className="section mainsection">
        <h2 className="section__title" data-aos="fade-right">
          My <span className="different">Timeline 💫</span>
        </h2>
        <VerticalTimeline lineColor={linecolor}>
          <VerticalTimelineElement
            date={"2017 - 2018"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<WorkIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
                 10th grade education 
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              SVM School
            </h4>
            <p data-aos="fade-right">
            In 2018, I successfully completed my 10th grade education at SVM Public School in Kamala Nagar, Agra. I am proud to mention that I achieved outstanding results in my top 5 subjects, scoring above 91 percent in each. With an impressive overall score of 88.8 percent, I concluded my schooling journey at SVM Public School with great accomplishments.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date={"2019 - 2020"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<WorkIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              ESS School
            </h4>
            <p data-aos="fade-right">
            In the year 2020, I successfully concluded my 12th grade education at ESS Public School in Kamala Nagar, Agra. It brings me immense satisfaction to share that I excelled in my top 4 subjects, achieving scores exceeding 90 percent in each of them. With an impressive overall score of 88.4 percent, I completed my academic journey at ESS Public School with remarkable achievements.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date={"Nov 2020 - Present"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<SchoolIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
               Student [BTech. (KIET Group of Institutions)]
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Abdul Kalam technical university(AKTU)
            </h4>
            <p data-aos="fade-right">
            I joined KIET Group of Institutions in the year 2020 after successfully clearing the UPSEE (Uttar Pradesh State Entrance Examination). Choosing to specialize in the Electronics and Communication department was a perfect fit for my academic and career goals. Since my admission, I have been fully committed to my studies, immersing myself in the fascinating field of electronics and communication to acquire essential knowledge and valuable skills. Being a part of KIET Group of Institutions has provided me with a supportive and enriching educational environment.
            </p>
        
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={"Nov 2020 - present"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<WorkIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              ***ACCOMPLISMENTS***
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              
            </h4>
            <p data-aos="fade-right">
            My most notable accomplishment has been achieving the 30th rank among all four-year students at GeeksforGeeks. Additionally, I have earned the esteemed status of a 3-star coder at CodeChef. Moreover, I made valuable contributions as a member of a five-person team, collaborating on the successful development of a robotic arm using ESP32. Our project received recognition at the institute level, serving as a testament to our unwavering dedication and hard work. Furthermore, I have demonstrated my problem-solving skills by solving over 350 questions on LeetCode.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={"Nov 2020 - present"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<SchoolIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
                 
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              KIET Group of institutions [AKTU]
            </h4>
            <p data-aos="fade-right">
            I pursued my studies in Electronics and Communications, encompassing a wide range of subjects in the field. I successfully completed my studies with a commendable 
            score of 75%.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={"March 2017"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<SchoolIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
                ***EXPERIENCE***
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
             
            </h4>
            CORE TEAM MEMBER[KIET(Ek Prayass)]:
            <p data-aos="fade-right">

              

              EK PRAYASS- CLUB (12/2021 - Present)

          As a core team member of EK PRAYASS- CLUB, I actively contribute to an initiative aimed at sensitizing and raising awareness among the youth about the detrimental effects of tobacco. Our primary focus is to educate and discourage activities such as smoking and drinking among young individuals, promoting a healthier and more responsible lifestyle.


            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            icon={<StarRateIcon />}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
          ></VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};
