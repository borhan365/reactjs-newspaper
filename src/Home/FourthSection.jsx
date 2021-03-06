import React from 'react'
import FourthSecItem from './FourthSecItem'
import FourthSecTitle from './FourSecTitle'
import Data from "../Common/Data";


function FourthSection() {
    return (
        <>
            <section className="padding">
                <div className="container">
                    <div className="row">
                        
                        <div className="col-md-4 col-sm-12">

                            <FourthSecTitle title='Commercial City' />

                            {
                                Data.slice(0, 2).map((val, index) => {
                                    return (
                                        <FourthSecItem 
                                        imgsrc = {val.imgsrc}
                                        icon = {val.icon}
                                        title = {val.title}
                                    />
                                    )
                                })
                            } 
                        </div>

                        
                        <div className="col-md-4 col-sm-12">

                            <FourthSecTitle title='Commercial City' />

                            {
                                Data.slice(0, 2).map((val, index) => {
                                    return (
                                        <FourthSecItem 
                                        imgsrc = {val.imgsrc}
                                        icon = {val.icon}
                                        title = {val.title}
                                    />
                                    )
                                })
                            } 
                        </div>

                        
                        <div className="col-md-4 col-sm-12">

                            <FourthSecTitle title='Commercial City' />

                            {
                                Data.slice(0, 2).map((val, index) => {
                                    return (
                                        <FourthSecItem 
                                        imgsrc = {val.imgsrc}
                                        icon = {val.icon}
                                        title = {val.title}
                                    />
                                    )
                                })
                            } 
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default FourthSection
