
import React from 'react'
import Card from './Card'
import Data from '../Common/Data'

function SecondSection() {
    return (
        <>
        {/* title */}
           <section>
                <div className="container">
                    <div className="row">
                    <div className="col-md-12">
                        <div className="title second_section">
                            <h2><i className="fa fa-fire"></i> Popular This Week</h2>
                        </div>  
                    </div>
                    </div>
                </div>
            </section> 

            {/* body */}
            <section class="padding">
                <div class="container">
                    <div class="row">
                        {
                            Data.slice(0, 4).map((val, index) => {
                                return <Card 
                                    imgsrc={val.imgsrc}
                                    icon={val.icon}
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

export default SecondSection
