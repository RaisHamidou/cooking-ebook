import React from "react";
import about from "../../assets/about/KwpWMvriwKX.png";
import { FaTiktok, FaInstagram, FaFacebook } from "react-icons/fa6";

const About = () => {
  return (
    <section id="about">
      <div className="about-img">
        <img src={about.src} alt="about" />
      </div>
      <div className="container-info-about">
        <h1>À propos de moi</h1>
        <p className="info-about">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book Lorem Ipsum is simply dummy
          text of the printing and typesetting industry. Lorem Ipsum has been
          the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type
          specimen book
        </p>
        <div className="about-social">
          <ul>
            <li>
              <a href="">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="">
                <FaTiktok />
              </a>
            </li>
          </ul>
        </div>
      </div>
      
    </section>
  );
};

export default About;
