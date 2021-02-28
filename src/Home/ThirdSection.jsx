
import React from 'react'
import NewsTitle from '../Common/Newstitle'
import Data from "../Common/Data";
import ThirdSecFeatured from './ThirdSecFeatured';
import ThirdSecItem from './ThirdSecItem';

function ThirdSection() {
    return (
        <>
            <section>
                <div className="container">

                    <div className="row">

                        {/* First Section */}
                        <div className="col-md-6">   

                            <NewsTitle title=' National News' />    

                            <div className="third_1st_column">

                                {
                                    Data.slice(0, 1).map((val, index) => {
                                        return <ThirdSecFeatured 
                                        imgsrc = {val.imgsrc}
                                            icon = {val.icon}
                                            title = {val.title}
                                        />
                                    })
                                }

                                <div className="min-news-box-wrapper">

                                    {                                        
                                        Data.slice(0, 2).map((val, index) => {
                                            return <ThirdSecItem 
                                            imgsrc = {val.imgsrc}
                                                icon = {val.icon}
                                                title = {val.title}
                                            />
                                        })
                                    }

                                </div>

                            </div>

                        </div>

                        {/* Last section */}
                        <div className="col-md-6">   

                            <NewsTitle title=' International News' />    

                            <div className="third_1st_column">

                                {
                                    Data.slice(0, 1).map((val, index) => {
                                        return <ThirdSecFeatured 
                                        imgsrc = {val.imgsrc}
                                            icon = {val.icon}
                                            title = {val.title}
                                        />
                                    })
                                }

                                <div className="min-news-box-wrapper">

                                    {
                                        Data.slice(0, 2).map((val, index) => {
                                            return <ThirdSecItem 
                                            imgsrc = {val.imgsrc}
                                                icon = {val.icon}
                                                title = {val.title}
                                            />
                                        })
                                    }

                                </div>

                            </div>

                        </div>

                    </div>   

                </div>

            </section>  
        </>
    )
}

export default ThirdSection

