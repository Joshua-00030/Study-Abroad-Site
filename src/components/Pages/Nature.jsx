import { Swiper, SwiperSlide } from "swiper/react"
// import required modules
import { EffectCoverflow, Navigation, Pagination, Mousewheel, Keyboard } from "swiper"
import "swiper/css"

function Nature({ desktop }) {
    return (
        <>
            <h1>Nature</h1>
            <div className='inline-story'>
                <h2>Forests and Mountains</h2>
                <div>
                    <p>
                        Arashiyama district is in the west part of Kyoto, located along the Arashiyama Mountains. It took about 30 minutes by train to arrive here from Kyoto.
                    </p>
                    <p>
                        The Arashiyama Bamboo Forest was a stunning sight to see at dawn before other tourists were out. It was like our group had the entire forest to ourselves, with only the noise of birds chirping and the swish of the wind blowing through the trees. I had only ever seen bamboo as small potted plants before and had one in my bedroom for years. The height these bamboo trees manage to reach is incredible. Despite their thin, brittle look, the trees swayed in the wind making the forest look very much alive. They have to be able to bend so much as the strong wind and storms would break them otherwise. There are walking trails that wind through the forest, leading to shrines and various parks or clearings.

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
                        <SwiperSlide><img src="\arashiyama-1.jpg" /></SwiperSlide>
                        <SwiperSlide><img src="\arashiyama-2.jpg" /></SwiperSlide>
                        <SwiperSlide><img src="\arashiyama-6.jpg" /></SwiperSlide>
                        <SwiperSlide><img src="\arashiyama-7.jpg" /></SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className='inline-story'>
                <h2>Mikami Shrine</h2>
                <div>
                    <p>
                    On the way up the mountain we stopped at a shrine dedicated to hair named Mikami Shrine. Here people would carve their wishes into pieces of wood and leave them at the altar, sometimes with hair clippings alongside them. The main wishes were to keep their hair or have their hair grow in a luxurious way. Some barbers and stylists would also visit the shrine in hopes of improving their craft. It was certainly a new sight and a good example of how spiritual the Japanese culture is. I would imagine any barber dedicated enough to make the hike would show improvement, as this was not a quick stop on their usual path.
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
                        <SwiperSlide><img src="\arashiyama-3.jpg" /></SwiperSlide>
                        <SwiperSlide><img src="\arashiyama-4.jpg" /></SwiperSlide>
                        <SwiperSlide><img src="\arashiyama-5.jpg" /></SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className='inline-story'>
                <h2>Iwatayama Monkey Park</h2>
                <div>
                    <p>
                    At the top of the Arashiyama forest trail we walked was Iwatayama Monkey Park. Here there were free roaming Japanese macaques, a small, brown, and fluffy type of monkey. Before reaching the top, we came across signs that explained how to avoid agitating the monkeys, such as not looking them in the eye.\
                    </p>
                    <p>
                        Up top, there was a stunning overlook of Kyoto, and it was easy to point out Kyoto Tower. While they did keep their distance, they were enjoying and jumping on a lot of the benches and even binoculars. It was funny as the young monkeys would cause trouble climbing on things and the zookeepers would walk over to maintain the peace and order of the park, resulting in the monkeys running away. The monkeys must have found this humorous as they kept coming back to cause mischief. There was a feeding house that they kept a close watch on, where people could buy apples and peanuts to feed the monkeys.  
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
                        <SwiperSlide><img src="\monkey-6.jpg" /></SwiperSlide>
                        <SwiperSlide><img src="\monkey-2.jpg" /></SwiperSlide>
                        <SwiperSlide><img src="\monkey-4.jpg" /></SwiperSlide>
                        <SwiperSlide><img src="\monkey-1.jpg" /></SwiperSlide>
                        <SwiperSlide><img src="\monkey-3.jpg" /></SwiperSlide>
                        <SwiperSlide><img src="\monkey-5.jpg" /></SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className='inline-story'>
                <h2>Yoyogi Park</h2>
                <div>
                    <p>
                    In my free time I went to visit Yoyogi park, which is one of the largest city parks in Tokyo. It has a long jogging path around its natural areas, springs, and picnicking spaces. It had recently rained when I visited but even so people were enjoying the park. The park has two of the more well known trees, the first being the iconic cherry trees. There are also great big ginkgo trees here which almost look like giant bushes on tree trunks. The ginkgo trees should change color in autumn similar to the oak trees here do while the cherry trees blossom earlier in the year.
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
                        <SwiperSlide><img src="\yoyogi-1.jpg" /></SwiperSlide>
                        <SwiperSlide><img src="\yoyogi-2.jpg" /></SwiperSlide>
                        <SwiperSlide><img src="\yoyogi-3.jpg" /></SwiperSlide>
                        <SwiperSlide><img src="\yoyogi-4.jpg" /></SwiperSlide>
                        <SwiperSlide><img src="\yoyogi-5.jpg" /></SwiperSlide>
                        <SwiperSlide><img src="\yoyogi-6.jpg" /></SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className='inline-story'>
                <h2>Wazuka Tea Farms</h2>
                <div>
                    <p>
                        On the south side of Kyoto our group visited the Wazuka tea farms. Here we learned quite a bit about how they farm their heritage, how they grow the vast amounts of tea the country needs, pick the right leaves, and the tea brewing and refining process. The fields were quite a bit different from the farms we are used to seeing. The tea plants were either fully exposed to the sunlight in large, linear bushes or covered with something that looked like a black tarp. This is actually a technique they use for providing shade to large fields of plants that do not get natural shade. The tarp allows some of the sunlight through, making the plants get sunlight without being baked in 100% sunlight. They also control how long the plant is oxidized which makes the tea be either brown or green.
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
                        <SwiperSlide><img src="\tea-1.jpg" /></SwiperSlide>
                        <SwiperSlide><img src="\tea-2.jpg" /></SwiperSlide>
                        <SwiperSlide><img src="\tea-3.jpg" /></SwiperSlide>
                        <SwiperSlide><img src="\tea-4.jpg" /></SwiperSlide>
                        <SwiperSlide><img src="\tea-5.jpg" /></SwiperSlide>
                        <SwiperSlide><img src="\tea-6.jpg" /></SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className='inline-story'>
                <h2>Nara</h2>
                <div>
                    <p>
                    During our visit to Nara, the ancient capital, we visited several shrines and temples. Throughout the area there were deer which walked the streets like they were pedestrians. There are over a thousand of them and are part of what makes the city special. As we walked through the streets, we found a stand selling crackers for 200 yen.  The deer would stop at crosswalks and bow to people for crackers. If they were getting antsy the deer might nip people, which made the people run away and left the deer with no crackers. I wonder if the more experienced deer learn not to nip people and scare away their food.    
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
                        <SwiperSlide><img src="\deer-1.jpg" /></SwiperSlide>
                        <SwiperSlide><img src="\deer-2.jpg" /></SwiperSlide>
                        <SwiperSlide><img src="\deer-3.jpg" /></SwiperSlide>
                        <SwiperSlide><img src="\deer-4.jpg" /></SwiperSlide>
                        <SwiperSlide><img src="\deer-5.jpg" /></SwiperSlide>
                        <SwiperSlide><img src="\deer-6.jpg" /></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default Nature