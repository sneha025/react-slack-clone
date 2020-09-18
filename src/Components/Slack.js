import React, { Component } from 'react';
import { SideBar, MainContainer } from './';
class Slack extends Component {
    render() {
        return (
            <div>
                <SideBar />
                <MainContainer/>
            </div>
        );
    }
}

export default Slack;