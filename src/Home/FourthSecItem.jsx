import React from "react";
import { Link } from "react-router-dom";

function FourthSecItem(props) {
  return (
    <>

        <div className="fourth_section">
          <img className="play_five_one" src={props.icon} alt="sdfdfs" />
          <img className="fourth_section_img" src={props.imgsrc} alt="fdghf" />
          <Link to="/single">
            <h2>{props.title}</h2>
          </Link>
        </div>

    </>
  );
}

export default FourthSecItem;
