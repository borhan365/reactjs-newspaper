
import React from 'react'
import { Link } from 'react-router-dom'
import AnimatedIcon from '../img/red-icon.png';
import AnimatedIconMini from '../img/final_play.svg';

//import FeaturedImg from '../src/img/1.jpg';

import Images from '../img/1.jpg'

import FeaturedImgOne from '../img/2.jpg';
import FeaturedImgTwo from '../img/6.jpg';

function HomeFeaturedSection() {
    return (
        <>
        <section className="padding">
            <div className="container">
                <div className="row">
                <div className="col-md-6">
                    <Link to="/" data-toggle="modal" data-target="#playvideo_popup_id">
                    <div className="cover_news">
                        <img className="play_icon" src={AnimatedIcon} alt="Animated Icon" />
                        <img className="cover_img" src={Images} alt="Featured Imdage" />
                        <Link to="/single"><h2>Travel should be served for students: Prime Minister</h2></Link>
                    </div>
                    </Link>
                </div>
                <div className="col-md-3">
                    <div className="hero_right_column">
                        <div className="news_Box">
                        <img className="play_icon_left" src={AnimatedIconMini} alt="Mini Animated Icon" />
                        <img className="mini_left_img" src={FeaturedImgOne} alt="Mini Featured Imae" />
                        </div>
                        <div className="news_Box">
                        <img className="play_icon_right" src={AnimatedIconMini} alt="Mini Animated Icon" />
                        <img className="mini_left_img" src={FeaturedImgTwo} alt="Mini Animated mage" />
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="hero_right_column">
                    <div className="news_Box">
                        <img className="play_icon_left" src={AnimatedIconMini} alt="Mini Animated Icon" />
                        <img className="mini_left_img" src={FeaturedImgOne} alt="Mini Featured Imae" />
                    </div>
                    <div className="news_Box">
                        <img className="play_icon_right" src={AnimatedIconMini} alt="Mini Animated Icon" />
                        <img className="mini_left_img" src={FeaturedImgTwo} alt="Mini Featured Imag " />
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default HomeFeaturedSection
