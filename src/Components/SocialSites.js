import React from 'react'
import "./SocialSites.css"
const SocialSites=(props)=> {
    return (
        <div className=" col-md-6 col-lg-4">
            <div className="insta">
                <img src={props.src} className="insta-img" alt={props.text}/>
                <div className="overlay">.</div>
                <div className="item">
                    <i className={props.icon}></i>
                    <p>{props.owner}</p>
                </div>
            </div>
        </div>
    )
}

export default SocialSites
