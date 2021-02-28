import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Common/Footer';
import Header from "../Common/Header";
import FeaturedImageSingle from '../img/news2.jpg'
import Data from '../Common/Data'
import Card from './Card'

function Category() {
    return (
        <>
        <Header />

        {/* Featured Section */}
        <section className="padding">
            <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <div className="left_cat">
                        <div className="cat-thumb-wrap">
                            <img src={FeaturedImageSingle} alt="News two" />
                        </div>
                        <Link to="/single"><h2>Here your title will be goes here text</h2></Link>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="right_cat_section">
                        <div className="right_cat">
                            <div className="cat-mini-thumb-wrap">
                                <img src={FeaturedImageSingle} alt="Another Imdage" />
                            </div>
                            <div className="cat-mini-content">
                                <Link to="/single"><h2>Here your title will be goes here text</h2></Link>
                            </div>
                        </div>
                        <div className="right_cat">
                            <div className="cat-mini-thumb-wrap">
                                <img src={FeaturedImageSingle} alt="Second Imaege" />
                            </div>
                            <div className="cat-mini-content">
                                <Link to="/single"><h2>Here your title will be goes here text</h2></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
        
        {/* Grid More items */}
        <section className="padding cat_mini">
            <div className="container">
            <div className="row">
                {
                    Data.slice(0, 6).map((val, index) => {
                        return <Card
                            imgsrc = {val.imgsrc}
                            title = {val.title}
                        />
                    } )                   
                }
            </div>
            </div>
        </section>
        <Footer />
        </>
    )
}

export default Category
