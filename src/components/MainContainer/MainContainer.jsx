import './MainContainer.css'
import MainContent from '../MainContent/MainContent'
import Sidebar from '../Sidebar/Sidebar'
import Navbar from '../Navbar/Navbar'
import { Swiper, SwiperSlide } from "swiper/react"
// import required modules
import { EffectCoverflow, Navigation, Pagination, Mousewheel, Keyboard } from "swiper"
import "swiper/css"
import { useState } from 'react'

function MainContainer() {
  const desktop = window.innerWidth > 900 ? true : false
  const [page, setPage] = useState(0)

  return (
    <div className='MainContainer'>
      <Navbar page={page} setPage={setPage} desktop={desktop}/>
      <div className='ContentContainer'>
        <MainContent page={page} desktop={desktop} />
      </div>

    </div>
  )
}

export default MainContainer;
