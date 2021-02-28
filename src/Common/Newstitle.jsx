
import React from 'react'

function Newstitle(props) {
    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="title two_column_title">
                            <h2><i className="fa fa-flag"></i>{props.title}</h2>
                        </div>
                    </div>
                </div>
            </section>            
        </>
    )
}

export default Newstitle
