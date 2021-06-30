import React from 'react'
import './Sidebar.css';
import {Avatar} from '@material-ui/core';

function Sidebar() {

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    )
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://wallpaperaccess.com/full/935053.jpg" alt="" />
                <Avatar className="sidebar__avatar"/>
                <h2>Guru Prasad</h2>
                <h4>guruprasad2511@gmail.com</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you </p>
                    <p className="sidebar__statNumber">2541</p>
                </div>
                <div className="sidebar__stat">
                <p>Views on Post  </p>
                <p className="sidebar__statNumber">1542</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('softwareengineering')}
                {recentItem('computerscience')}
                {recentItem('developer')}
                {recentItem('problemsolving')}
            </div>
        </div>
    )
}

export default Sidebar
