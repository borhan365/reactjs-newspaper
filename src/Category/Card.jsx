import React from 'react'
import {Link} from 'react-router-dom'


function Card(props) {
    return (
        <>
            
    <div className="col-md-4 col-sm-4">
        <div className="cat_grid_box">
            <img src={props.imgsrc} alt="dsdfsd" />
            <Link to="/single"><h2>{props.title}</h2></Link>
        </div>
    </div>
                
        </>
    )
}

export default Card
