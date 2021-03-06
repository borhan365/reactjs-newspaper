import React from 'react'
import Footer from '../Common/Footer'
import Header from '../Common/Header'
import FiveSection from './FiveSection'
import FourthSection from './FourthSection'
import HomeFeaturedSection from './HomeFeaturedSection'
import SecondSection from './SecondSection'
import ThirdSection from './ThirdSection'

function Home() {
    return (
        <> 
        <Header />
        <HomeFeaturedSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FiveSection />
        <Footer />
                  
        </>
    )
}

export default Home;
