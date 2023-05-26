import './MainContainer.css'
import MainContent from '../MainContent/MainContent'
import Sidebar from '../Sidebar/Sidebar'
import Navbar from '../Navbar/Navbar'
import { Swiper, SwiperSlide } from "swiper/react"
// import required modules
import { EffectCoverflow, Pagination } from "swiper"
import "swiper/css"

function MainContainer() {
    const desktop = window.innerWidth < 600 ? true : false
    return (
        <div className='MainContainer'>
            <Navbar/>
            <div className='ContentContainer'>

            <MainContent/>
            {(window.innerWidth > 600 && <Sidebar/>)
            }
            </div>
            
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={desktop ? 2:4}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className={(desktop ? "mySwiper" : "swiperDesktop")}
      >
        <SwiperSlide><img src="\tokyotower-s.jpg" /></SwiperSlide>
        <SwiperSlide><img src="\coolstairs-s.jpg" /></SwiperSlide>
        <SwiperSlide><img src="\crabsign-w.jpg" /></SwiperSlide>
        <SwiperSlide><img src="\food1-w.jpg" /></SwiperSlide>
        <SwiperSlide><img src="\food2-s.jpg" /></SwiperSlide>
        <SwiperSlide><img src="\garden-w.jpg" /></SwiperSlide>
        <SwiperSlide><img src="\iconicDogStatue-s.jpg" /></SwiperSlide>
        <SwiperSlide><img src="\manga-s.jpg" /></SwiperSlide>
        <SwiperSlide><img src="\merch1-s.jpg" /></SwiperSlide>
        <SwiperSlide><img src="\mountains-s.jpg" /></SwiperSlide>
        <SwiperSlide><img src="\food3-s.jpg" /></SwiperSlide>
        <SwiperSlide><img src="\food5-s.jpg" /></SwiperSlide>
        <SwiperSlide><img src="\robowaiter-s.jpg" /></SwiperSlide>
      </Swiper>
            <Navbar/>
        </div>
    )
}

export default MainContainer;
