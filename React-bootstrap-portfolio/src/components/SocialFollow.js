import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div style={{float: 'left', marginLeft: '-30px'}} class="social-container">
      <a
        href="https://www.linkedin.com/in/justin-a-lowell/"
        className="linkedin social"
      >
        <FontAwesomeIcon icon={faLinkedinIn} size="2x" color='gray'/>
      </a>
      <a href="https://github.com/jalowell" className="github social">
        <FontAwesomeIcon icon={faGithub} size="2x" color='gray' />
      </a>
    </div>
  );
}
