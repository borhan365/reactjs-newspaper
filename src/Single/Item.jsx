
import React from 'react'
import { Link } from 'react-router-dom'


function Item(props) {
    return (
        <>
            <div class="col-md-3 col-sm-6">
                <div class="releted_single_box">
                    <img src={props.imgsrc} alt="Dummy" />
                    <Link to="/single"><h3>{props.title}</h3></Link>
                </div>
            </div>   
        </>
    )
}

export default Item
