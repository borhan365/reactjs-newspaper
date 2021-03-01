import React from "react";

function FourthSecItem(props) {
  return (
    <>
      <div className="col-md-4 col-sm-12">

        <div className="title third_section_one">
          <h2>
            <i className="fa fa-building-o"></i> {props.title}
          </h2>
        </div>

      </div>
    </>
  );
}

export default FourthSecItem;
