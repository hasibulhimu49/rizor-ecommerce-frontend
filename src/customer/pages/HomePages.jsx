import React from 'react'
import MainCarousel from '../components/homeMainCarousel/MainCarousel'
import HomeSectionCarousel from '../components/HomeCardCarousel/HomeSectionCarousel'
import { mens_kurta } from '../../data/Men/men_kurta'
import Footer from '../components/Footer/Footer'

const HomePages = () => {
  return (
    <div>
        <MainCarousel/>
        <div>
            <HomeSectionCarousel props={mens_kurta} sectionName={"Mens Kurta"}/>
            <HomeSectionCarousel props={mens_kurta} sectionName={"Mens Shoes"}/>
            <HomeSectionCarousel/>
            <HomeSectionCarousel/>
            <HomeSectionCarousel/>
            <HomeSectionCarousel/>
        </div>
    </div>
  )
}

export default HomePages