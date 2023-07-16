import React from 'react'
import NavbarLogin from '../../components/Uitily/NavbarLogin'
import Slider from '../../components/Home/Slider'
import HomePageCategory from '../../components/Home/HomePageCategory'
import CardProductContainer from '../../components/ProductPage/CardProductContainer'
import DiscountSection from '../../components/Home/DiscountSection'
import BrandFeatured from '../../components/Brand/BrandFeatured'
import Footer from '../../components/Uitily/Footer'


const HomePage = () => {
    return (
    <div>
        <NavbarLogin />
        <Slider />
        <HomePageCategory />
        <CardProductContainer title="Top selling items" btntitle="More" />
        <DiscountSection />
        <CardProductContainer title="Top Picks" btntitle="More" />
        <BrandFeatured title="the most popular" btntitle="More" />
        <Footer />
    </div>
)
}

export default HomePage