import React from 'react'
import './Partner.css'

function PartnerText(props) {
    return (
        <div className="profiles">
            <h2>{props.head}</h2>
            <p>{props.brief}</p>
            {props.children}
            <button>{props.act}</button>

        </div>
    )
}

export default PartnerText
