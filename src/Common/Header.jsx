import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
import HeaderLogo from '../img/main-logo.png';
import HeaderBanner from '../img/top-header-ads.jpg';

function Header() {
  return (
    <>
      {/* Top Header Section */}
      <section className="Top_menu">
        <div className="container top_container">
          <div className="row">
            <div className="col-md-2 top_menu_column">
              <div className="date_section">
                <p>Mon, 11 Aug 2021</p>
              </div>
            </div>
            <div className="col-md-7">
              <div className="top_menu_navbar">
                <ul>
                  <li>
                    <Link to="/">Photos</Link>
                  </li>
                  <li>
                    <Link to="/">Special Event </Link>
                  </li>
                  <li>
                    <Link to="/">Videos</Link>
                  </li>
                  <li>
                    <Link to="/">Advertisment</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="top_social">
                <ul>
                  <li>
                    <Link to="">
                      <i className="fa fa-facebook-official"></i> &nbsp;
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <i className="fa fa-youtube-play"></i>
                    </Link>
                    &nbsp;{" "}
                  </li>
                  <li>
                    <Link to="">
                      <i className="fa fa-instagram"></i>
                    </Link>
                    &nbsp;{" "}
                  </li>
                  <li>
                    <Link to="">
                      <i className="fa fa-twitter"></i>
                    </Link>
                    &nbsp;{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Middle Header Section */}
      <section className="mobile_disable">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="logo">
                <Link to="/">
                  <img src={HeaderLogo} alt="Logo area" />
                </Link>
              </div>
            </div>
            <div className="col-md-9">
              <div className="banner_area">
                <img src={HeaderBanner} alt="Header Banner" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Header Menu */}
      <section className="mobile_disable forDesktop">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="main_header">
                <ul>
                  <li><Link to="/category"><i className="fa fa-bars" data-toggle="modal" data-target="#megaMenu"></i></Link></li>
                  <li>
                      <Link to="/category">National</Link>
                    </li>
                    <li>
                      <Link to="/category">Politics </Link>
                    </li>
                    <li>
                      <Link to="/category">Business</Link>
                    </li>
                    <li>
                      <Link to="/category">Sports</Link>
                    </li>
                    <li><Link to="/category">Entertainment</Link></li>
                    <li><Link to="/category">Lifestyle</Link></li>
                    <li><Link to="/category">Recipies</Link></li>
                    <li><Link to="/category">Travels</Link></li>
                  <li><Link to="/"><i className="fa fa-search"  data-toggle="modal" data-target="#searchModal"></i></Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    </section>
    </>
  );
}

export default Header;
