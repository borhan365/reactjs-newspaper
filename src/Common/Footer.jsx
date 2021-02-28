import React from 'react'
import HeaderLogo from '../img/main-logo.png';

function Footer() {
    return (
        <>
          <section className="footer_section">
            <div className="container padding">
            <div className="row">
                <div className="col-md-4">
                <div className="footer_logo">
                    <img src={HeaderLogo} alt="Footer Logo" />
                </div>
                </div>
                <div className="col-md-4">
                <div className="footer_middle_column">
                    <p>TDNBD.com is an online newspaper in Bangladesh. It is published in Bengali and English. TDNBD.com's policy makers are impartial, fearless, professional, investigative, informative, credible, reliable and ethical journalism. </p>
                </div>
                </div>
                <div className="col-md-4">
                <div className="footer_middle_column">
                    <p><b> Chif Editor: </b> Golam Mostofa <br />
                    <b>Acting Editor:</b>  Josim Khan Menon <br />    
                    <b>Dhaka Office: </b> 5th floor, sultan plaza, puran polton, dhaka. <br />
                    <b> Chittagong Office: </b>  garden city complex, lalkhan bazar, chittagong.</p>
                </div>
                </div>
            </div>
            </div>
        </section>  
        </>
    )
}

export default Footer
