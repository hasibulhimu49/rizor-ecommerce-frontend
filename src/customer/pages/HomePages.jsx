import React from 'react'
import MainCarousel from '../components/homeMainCarousel/MainCarousel'
import HomeSectionCarousel from '../components/homeCardCarousel/HomeSectionCarousel'
import { mens_kurta } from '../../data/Men/men_kurta'
import Footer from '../components/footer/Footer'

const HomePages = () => {
  return (
    <div>
        <MainCarousel/>
        <div>
            <HomeSectionCarousel props={mens_kurta} sectionName={"Mens Kurta"}/>
            <HomeSectionCarousel props={mens_kurta} sectionName={"Mens Shoes"}/>
            <HomeSectionCarousel/>
            <HomeSectionCarousel/>
        </div>
        <Footer/>
    </div>
  )
}

export default HomePages