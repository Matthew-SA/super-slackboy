import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Moment from 'react-moment'


function RightbarAbout() {
  const { id } = useParams();
  const channel = useSelector(state => state.entities.channels[id])
  const [isShow, setIsShow] = useState(false)


  if (!channel) return null;

  return(
    <div className="rightbar-item">
      <div className="rightbar-button" onClick={() => setIsShow(!isShow)} >
        About
          <FontAwesomeIcon className={isShow ? "chevron-rotate" : "chevron"} icon="chevron-down" />
      </div>

      <div className={isShow ? "rightbar-item-show" : "rightbar-item-hide"} >
        <div className="about-container">
          <div className="about-topic">
            <div className="about-subheader">
              Topic
            </div>
              {channel.topic}
          </div>
          <div className="about-description">
            <div className="about-subheader">
              Description
            </div>
            {channel.description}
          </div>
          <div className="about-created-on">
            Created on <Moment parse="YYYY-MM-DD HH:mm" date={channel.created_at} format="MMM DD, YYYY" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightbarAbout;