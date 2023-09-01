import { Swiper, SwiperSlide } from "swiper/react"
// import required modules
import { EffectCoverflow, Navigation, Pagination, Mousewheel, Keyboard } from "swiper"
import "swiper/css"

function Home({ desktop }) {
    return (
        <>
            <h1>Study Abroad With UTSA: Japan</h1>
            
            <div className="swiper-container">
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={desktop ? 3.2 : 2}
                    navigation={true}
                    initialSlide={desktop ? 1: 0}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Navigation, Pagination, Mousewheel, Keyboard]}
                    className={(desktop ? "swiperDesktop" : "mySwiper")}
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
            </div>
            
            <div className={(desktop ? 'storyDesktop' : 'story')}>
                <div>
                    <p>
                        In the summer of 2023, I went on UTSA’s study abroad trip to Japan, featuring the two cities of Kyoto and Osaka. The trip was led by <a href="https://colfa.utsa.edu/faculty/profiles/yu-mimi.html">Yu Sensei</a>, with a dense itinerary and packed with fun sights and experiences. The trip was great for both those of us with a foundation of the Japanese language as well as those without.
                    </p>
                    <p>
                        To summarize the trip and provide resources for those interested, I have created six different sections. All of the pictures were taken by me during this trip and should help give you an idea of what we did on the trip.
                    </p>
                    <p>
                        First and foremost is the culture section. This highlights some of the aspects of culture we visited and how we observed them.
                    </p>
                    <p>
                        The second section is about nature. This is similar to culture and highlights the beautiful sights that were focused on nature. It also has a bit about the ancient capital and a tea farm we visited.
                    </p>
                    <p>
                        Third is the food section which showcases a few places we chose to eat. This is more about showing people the unique foods that we had the opportunity to try. If you want more “normal” American food the options are certainly there. But while traveling, I highly suggest trying all the local special dishes.
                    </p>
                    <p>
                        The resources section is for those looking into getting a language degree or minor at UTSA.
                    </p>
                    <p>
                        Finally, the grant section features a few key resources for getting language based grants as well as links to more general grant or resources to find grants and scholarships

                    </p>
                </div>
            </div>

        </>
    )
}

export default Home