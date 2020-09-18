import React, { Component } from 'react';

class SideBar extends Component {
  render() {
    return (
      <div id="sidebar">
        <div className="user-profile">
          <div className="avatar">
            <img src="https://www.flaticon.com/svg/static/icons/svg/2919/2919600.svg" />
          </div>
          <div>Sneha Maurya</div>
        </div>
        <hr className="sidebar-spacer" />
        <div className="channels">
          <div className="header">
            Channels
            <ul className="channel-list">
              <li># Slack-channel</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default SideBar;
