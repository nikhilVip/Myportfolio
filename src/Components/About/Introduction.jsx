import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/photo_2023-05-24_19-43-58.png";


export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, My name is{" "}
                <span className="different">Nikhil Sikarwar </span> and I am from{" "}
                <span className="different">
                  {" "}
                  Agra, Uttar Pradesh (India)
                </span>
                . I will be graduating in 2024.I will be an engineering gradute in electronics and communication with a degree in B.TECH 
                from{" "}
                <span className="different">
                  KIET group of institutions 
                </span>
                . Then I started learning about frontend devlopment from {" "}
                <span className="different">YouTube</span> a by various webDev YouTube channels
              </h4>
              <h4>Terms That can describe me apart form Coding :</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
               Good Listener{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Fitness Enthusiast{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Team Player{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Wanderlust{" "}
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
