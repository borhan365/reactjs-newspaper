

import React from 'react'
import { Link } from 'react-router-dom'

function Card(props) {
    return (
        <>
        <div className="col-md-3 col-sm-6">
            <div className="secTwo_main">
            <div className="two_Box sec_twoBox">
                <img className="play_three" src={props.icon} alt="imagess" />
                <img className="sec_twoBox_img" src={props.imgsrc} alt="dsfdsf" />
                <Link to="/single"><h2>{props.title}</h2></Link>
            </div>
            </div>
        </div>
        </>
    )
}

export default Card
