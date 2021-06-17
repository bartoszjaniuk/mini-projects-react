import React from "react";
import { socialIcons } from "./links";

const SocialIcons = ({ isActive }) => {
  return (
    <div>
      <ul className={`social-icons ${isActive ? "icons-active" : ""}`}>
        {socialIcons.map((social) => {
          return (
            <li key={social.id}>
              <a href={social.url} className="social-icons__link">
                {social.icon}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SocialIcons;
