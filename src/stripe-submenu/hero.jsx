import React from "react";
import { useGlobalContext } from "./context";
import phoneImg from "./images/phone.svg";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <div className="hero" onMouseOver={closeSubmenu}>
      <div className="hero__center">
        <div className="hero__info">
          <h1>Payments infrastructure for the internet</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut rerum
            nisi animi maiores, exercitationem reprehenderit quasi veritatis.
            Ab, natus nobis.
          </p>
          <button className="hero__btn">Start now</button>
        </div>
        <div className="hero__images">
          <img src={phoneImg} alt="phono-img" className="hero__phone-img" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
