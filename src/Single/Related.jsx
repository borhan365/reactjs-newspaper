
import React from 'react'
import Item from './Item'
import Data from '../Common/Data'

function Related() {
    return (
        <>
        {/* Read more title */}
        <section className="read-more-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="title">
                            <h2>Read More</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Read more card */}
        <section class="padding">
            <div class="container">
                <div class="row">
                    {
                        Data.slice(0, 4).map((val, index) => {
                            return <Item 
                                imgsrc={val.imgsrc}
                                title={val.title}
                            />
                        })
                    }
                    
                </div>
            </div>
        </section>
        </>
    )
}

export default Related
