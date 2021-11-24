import React from 'react'
import './Partner.css'

function PartnerLogo(props) {
    return (
        <div className="icon-p">
                <img src={props.src}/>
                <div className="overlay"></div>
                <p>{props.name}</p>

        </div>
    )
}

export default PartnerLogo
