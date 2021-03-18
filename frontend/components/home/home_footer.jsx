import React from 'React';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HomeFooter = () => {

  return(
    <div className="home-footer">
      <div className="first-subfooter">
        <ul className="social-icons">
          <li><a href="https://www.linkedin.com/in/matthew-andresen/"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a></li>
          <li><a href="https://angel.co/u/matthew-andresen"><FontAwesomeIcon icon={['fab', 'angellist']} /></a></li>
          <li><a href="https://github.com/Matthew-SA"><FontAwesomeIcon icon={['fab', 'github-square']} /></a></li>
          <li><a href="https://matthewandresen.com"><FontAwesomeIcon icon="briefcase" /></a></li>
        </ul>
      </div>
      <div className="second-subfooter"></div>
    </div>
  );
}

export default HomeFooter;