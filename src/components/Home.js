import React, { useContext } from "react";
import Footer from "./footer";
import UserContext from "./UserContext";
import { Link } from "react-router-dom";
import { SectionT, StyledLink} from "../styles/home";
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import fig from '../assets/fig.png'
import ux from '../assets/ux.png'

const Home = () => {
  const logedUser = useContext(UserContext);
  console.log(logedUser.id, "jh");

  return (
    <div>
        <h4>Practica tus conocimientos en la categoria que prefieras</h4>
        <StyledLink as={Link} to="/question" href="#question">
          <img src={html} alt="html" />
          HTML
        </StyledLink>

      <SectionT>
        <StyledLink as={Link} to="/question" href="#question">
          <img src={css} alt="css" />
          CSS
        </StyledLink>{" "}
        <StyledLink as={Link} to="/question" href="#question">
        <img src={js} alt="css" />
          JS
        </StyledLink>{" "}
        <StyledLink as={Link} to="/question" href="#question">
        <img src={fig} alt="css" />
          FIGMA
        </StyledLink>
        <StyledLink as={Link} to="/question" href="#question">
        <img src={ux} alt="css" />
          UX
        </StyledLink>
      </SectionT>

      <Footer /> 
    </div>
  );
};

export default Home;
