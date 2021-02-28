
import React from 'react'
import {Link} from 'react-router-dom'

function ThirdSecFeatured(props) {
    return (
        <>
            <div className="third_Box">
                <img className="play_four" src={props.icon} alt="sdfds" />
                <img className="third_Box_img" src={props.imgsrc} alt="dsfd" />
                <Link to="/single"><h3> {props.title} </h3></Link>
            </div>
        </>
    )
}

export default ThirdSecFeatured
