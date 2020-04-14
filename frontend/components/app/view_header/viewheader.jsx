import React from 'react';
import { Link } from 'react-router-dom';

class ViewHeader extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="viewHeader-container">
        <div className="left-header">
          <h2>#Super SlackBoy</h2>
        </div>
        <div className="right-header">

        </div>
      </div>
    );
  }
}

export default ViewHeader;