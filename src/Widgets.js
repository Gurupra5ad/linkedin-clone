import React from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className = "widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle("Guru steps in as the President of India", "Top News - 154002 readers")}
            {newsArticle("Elon Musk crashes bitcoin", "Top News - 78541 readers")}
            {newsArticle("Vitian trend #enoughVIT", "Top News - 54875 readers")}
            {newsArticle("Will colleges open anytime soon ?", "Top News - 9824 readers")}
        </div>
    );
}

export default Widgets
