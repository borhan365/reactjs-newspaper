
import React from 'react'
import {Link} from 'react-router-dom'

function ThirdSecItem(props) {
    return (
        <>
            <div className="third_box_mini">
                <img className="play_four_mini_one" src={props.icon} alt="sfsfs" />
                <img className="third_box_mini_img" src={props.imgsrc} alt="sfdsdf" />
                <Link to="/single"><h3>{props.title}</h3></Link>
            </div>
        </>
    )
}

export default ThirdSecItem
