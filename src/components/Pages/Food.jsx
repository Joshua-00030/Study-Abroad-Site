import { Swiper, SwiperSlide } from "swiper/react"
// import required modules
import { EffectCoverflow, Navigation, Pagination, Mousewheel, Keyboard } from "swiper"
import "swiper/css"

function Food({ desktop }) {
    return (
        <>
            <h1>Food</h1>
            <div className='inline-story'>
                <h2>Kaiseki</h2>
                <div>
                    <p>
                        Kaiseki, which is a traditional multicourse Japanese meal, is a good experience offered in many restaurants. This allows you to experience a plethora of flavors without having to eat too much or spend a fortune buying so many different items. The courses are served one after the other and help encourage diverse conversation as guests must each finish the course before getting the next.
                    </p>
                    <p>
                        At Torataro we had a five course kaiseki featuring a tray of appetizers, sashimi, pork shabu-shabu, sesame noodles, matcha with jelly called tokoroten, and sencha tea. My favorite was the shabu-shabu, which was razor thin cuts of uncooked pork. We were given a hot plate with broth and assorted vegetables that you swirl the pork around in using your chopsticks for 10 seconds to cook it. This resulted in delicious, hot, and fresh meat that would not be possible to serve from back in the kitchen.
                    </p>
                </div>

                <div className="swiper-container">
                    <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={desktop ? 1.5 : 1.1}
                        navigation={true}
                        coverflowEffect={{
                            rotate: 33,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: false,
                        }}
                        pagination={true}
                        modules={[EffectCoverflow, Navigation, Pagination, Mousewheel, Keyboard]}
                        className={(desktop ? "swiperDesktop" : "mySwiper")}
                    >
                        <SwiperSlide><img src="\course_1.jpg" /></SwiperSlide>
                        <SwiperSlide><img src="\course_2.jpg" /></SwiperSlide>
                        <SwiperSlide><img src="\course_3.jpg" /></SwiperSlide>
                        <SwiperSlide><img src="\course_4.jpg" /></SwiperSlide>
                        <SwiperSlide><img src="\course_5.jpg" /></SwiperSlide>
                        <SwiperSlide><img src="\course_6.jpg" /></SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className='inline-story'>
                <h2>Noodles</h2>
                <div>
                    <p>
                        Noodle shops selling udon, ramen, or soba are unbeatable for quick, low cost and delicious comfort food. The broth has a complex flavor, and the noodles have a texture that's nearly impossible to recreate or buy at home! As the chefs have been working on their technique for years this is no surprise. Those traits combined with speed and consistency are what make these iconic shops so special.
                    </p>
                    <p>
                        The first image in the below slide show is ramen from the airport. It Consisted of noodles, seaweed, eggs, green onions, bamboo, and sliced roast pork in tonkatsu broth was sold at the airport.
                    </p>
                </div>
                <div className="swiper-container">
                    <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={desktop ? 1.5 : 1.1}
                        navigation={true}
                        coverflowEffect={{
                            rotate: 33,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: false,
                        }}
                        pagination={true}
                        modules={[EffectCoverflow, Navigation, Pagination, Mousewheel, Keyboard]}
                        className={(desktop ? "swiperDesktop" : "mySwiper")}
                    >
                        <SwiperSlide><img src="\airport_ramen.jpg" /></SwiperSlide>
                        <SwiperSlide><img src="\tonkotsu-ramen.jpg" /></SwiperSlide>
                        <SwiperSlide><img src="\yakisoba.jpg" /></SwiperSlide>
                        <SwiperSlide><img src="\yakisoba-grill.jpg" /></SwiperSlide>
                        <SwiperSlide><img src="\hot-soba.jpg" /></SwiperSlide>
                        <SwiperSlide><img src="\tempura_udon.jpg" /></SwiperSlide>
                    </Swiper>
                </div>
                <div>
                    <p>
                        There are many different noodle dishes. The main ones I enjoyed on the trip were soba and yakisoba, which is fried soba in a sauce rather than boiled noodles in broth. The tempura udon was a mix of seafood and udon noodles that mixed crunchy fried shrimp with hot udon noodles and broth.
                    </p>
                </div>
            </div>
            <div className='inline-story'>
                <h2>Seafood</h2>
                <div>
                    <p>
                        The seafood selection is impossible to beat as Japan is an island nation. While I used to avoid seafood except for cooked fish, this trip really opened my taste buds to try new things with their quality shrimp, sashimi, sushi rolls, tempura and even escargot. Combined with the excellent culinary skills I cannot imagine anyone would dislike the seafood prepared here!
                    </p>
                </div>

                <div className="swiper-container">
                    <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={desktop ? 1.5 : 1.1}
                        navigation={true}
                        coverflowEffect={{
                            rotate: 33,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: false,
                        }}
                        pagination={true}
                        modules={[EffectCoverflow, Navigation, Pagination, Mousewheel, Keyboard]}
                        className={(desktop ? "swiperDesktop" : "mySwiper")}
                    >
                        <SwiperSlide><img src="\tempura-trio.jpg" /></SwiperSlide>
                        <SwiperSlide><img src="\elegant-shrimp.jpg" /></SwiperSlide>
                        <SwiperSlide><img src="\sashimi-platter.jpg" /></SwiperSlide>
                        <SwiperSlide><img src="\shrimp-platter.jpg" /></SwiperSlide>
                        <SwiperSlide><img src="\seafood-5.jpg" /></SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className='inline-story'>
                <h2>Meat Based Dishes</h2>
                <div>
                    <p>
                        Japan does meat differently than America. While they do have some places offering American style steaks and hamburgers, the majority of their meat dishes feature small or thin sliced meats that are cooked quickly. This lets them retain their moisture while also having a crisp texture. The meat is typically served with a side of rice or mixed in with some noodles in yakisoba. Sometimes the meat will come in a sauce for meals such as curry.
                    </p>
                </div>
                <div className="swiper-container">
                    <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={desktop ? 1.5 : 1.1}
                        navigation={true}
                        coverflowEffect={{
                            rotate: 33,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: false,
                        }}
                        pagination={true}
                        modules={[EffectCoverflow, Navigation, Pagination, Mousewheel, Keyboard]}
                        className={(desktop ? "swiperDesktop" : "mySwiper")}
                    >
                        <SwiperSlide><img src="\meat-1.jpg" /></SwiperSlide>
                        <SwiperSlide><img src="\meat-2.jpg" /></SwiperSlide>
                        <SwiperSlide><img src="\meat-3.jpg" /></SwiperSlide>
                        <SwiperSlide><img src="\meat-4.jpg" /></SwiperSlide>
                        <SwiperSlide><img src="\meat-5.jpg" /></SwiperSlide>
                        <SwiperSlide><img src="\meat-6.jpg" /></SwiperSlide>
                    </Swiper>
                </div>
                <div>
                    <p>
                        A unique experience commonly offered in Japan is the ability to cook your own meat right at your table. While I have experienced this in America, the thinness of the meat allowed me to quickly cook the meat and get a good flavor in it. Even if I were to mess up some of the meat, there were many pieces to experiment with. There are two main benefits of this. The first is the ability to have meat as done, or under done, as I wanted. The second was that the meat was always hot throughout the meal as I just cooked it.
                    </p>
                </div>

            </div>

            <div className='inline-story'>
                <h2>Fun & Convenient Food</h2>
                <div>
                    <p>
                        Last on the list are the options less thought of. As mentioned in the tips section, conbinis offer a large array of prepared meals. This can range from sandwiches to full curry dishes. I had quite a few meals in this manner, and they were all very tasty. I highly recommend them for days when you don't have much time to stop places or when you just want to eat something quietly at home without having to cook. There are also many food stands with desserts and snacks similar to how a carnival or amusement park would be. I enjoyed the strawberry mochi stand and crepe shops. Again, these places are very competitively priced and high quality.
                    </p>
                    <p>
                        Finally, there are more experience based food and drink places. <strong>Maid cafes</strong>  where the hostess spend time talking to their guests and <strong>cat cafes</strong> where you have all you can drink drinks while spending time with plenty of cats. You can buy treats for the cats or play their various arcade machines they have or read some manga or other literature they have available. These places can have time based pricing depending upon the location.
                    </p>
                </div>

                <div className="swiper-container">
                    <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={desktop ? 1.5 : 1.1}
                        navigation={true}
                        coverflowEffect={{
                            rotate: 33,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: false,
                        }}
                        pagination={true}
                        modules={[EffectCoverflow, Navigation, Pagination, Mousewheel, Keyboard]}
                        className={(desktop ? "swiperDesktop" : "mySwiper")}
                    >
                        <SwiperSlide><img src="\food-shelf.jpg" /></SwiperSlide>
                        <SwiperSlide><img src="\ice-cream.jpg" /></SwiperSlide>
                        <SwiperSlide><img src="\strawberry-mochi-stand.jpg" /></SwiperSlide>
                        <SwiperSlide><img src="\crepes.jpg" /></SwiperSlide>
                        <SwiperSlide><img src="\cat-1.jpg" /></SwiperSlide>
                        <SwiperSlide><img src="\cat-2.jpg" /></SwiperSlide>
                        <SwiperSlide><img src="\cat-3.jpg" /></SwiperSlide>
                        <SwiperSlide><img src="\cat-4.jpg" /></SwiperSlide>
                        <SwiperSlide><img src="\cat-5.jpg" /></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default Food