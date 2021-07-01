import React from 'react'
import './Sidebar.css';
import {Avatar} from '@material-ui/core';
import {selectUser} from './features/userSlice';
import {useSelector} from 'react-redux';

function Sidebar() {

    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://www.teahub.io/photos/full/211-2115123_abstract-geometric-wallpaper-background-shapes-shapes-and-colors.jpg" alt="" />
                <Avatar className="sidebar__avatar" src= {user.photoUrl}>
                    {user.email[0]}
                </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
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
