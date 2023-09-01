import { Swiper, SwiperSlide } from "swiper/react"
// import required modules
import { EffectCoverflow, Navigation, Pagination, Mousewheel, Keyboard } from "swiper"
import "swiper/css"

function Culture({ desktop }) {
    return (
        <>
            <h1>Culture</h1>
            <div className={(desktop ? 'storyDesktop' : 'story')}>
                {(!desktop ? <h2>Fushimi Inari shrine</h2> : <></>)}
                <div>
                    {(desktop ? <h2>Fushimi Inari shrine</h2> : <></>)}
                    <p>
                        One of the most memorable shrines of our trip was the Fushimi Inari shrine, a shrine dedicated to the Shinto god of rice. The beautiful grounds, statues, and torii gates were well cared for. The grounds cover a large portion of the mountain.
                    </p>
                    <p>
                        What makes this impressive is both the size and number of torii gates. The gates are nearly as tall as houses, making them both imposing and impressive. The real draw of the shrine lies in the number of torii gates, numbering in the thousands! Despite the massive amount of time and effort it must take to keep the shrine in such pristine condition, the locals keep everything pristine.
                    </p>
                </div>
            </div>
            <div className="swiper-container">
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={desktop ? 3.2 : 2}
                    navigation={true}
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
                    <SwiperSlide><img src="\fushimi-shrine-6.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="\fushimi-shrine-4.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="\fushimi-shrine-3.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="\fushimi-shrine-2.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="\fushimi-shrine-7.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="\fushimi-shrine-5.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="\fushimi-shrine-1.jpg" /></SwiperSlide>
                </Swiper>
            </div>
            <div className={(desktop ? 'storyDesktop' : 'story')}>
                {(!desktop ? <h2>Enryaku Temple complex</h2> : <></>)}
                <img className={(desktop ? 'storyImageDesktop' : 'storyImage')} src="\meditation-2.jpg" />
                <div>
                    {(desktop ? <h2>Enryaku Temple complex</h2> : <></>)}
                    <p>
                        The Buddhist Enryaku Temple complex we visited had a guided tour with the monks who lived on the mountain. We got to light some incense while learning about the ever burning incense that is maintained by the monks of the shrine. The temple has been standing for 1200 years.
                    </p>
                    <p>
                        We then shared a vegetarian meal with the monks in their cafeteria while we continued to learn more. The food was delicious, consisting of tofu, vegetables, and we had plenty of soup and tea along with it.
                    </p>
                    <p>
                        The temple is located on Mt. Hie. While at the top of the mountain, which we reached using the Sakamoto cable car line which is longest cable car line in Japan, they guided us through a Zen meditation session.
                    </p>
                    <p>
                        An interesting thing that happened to us while we were there was the construction work that was being done on their temple. We got to learn about the special ways the shrine was made using older construction methods. The way they care for and maintain their buildings rather than replacing them shows the importance placed on tradition here.
                    </p>
                </div>
                <img className={(desktop ? 'storyImageDesktop' : 'storyImage')} src="\monk-vegetarian.jpg" />
            </div>
            <div className={(desktop ? 'storyDesktop' : 'story')}>
                {(!desktop ? <h2>The Todaiji Temple</h2> : <></>)}
                <div>
                    {(desktop ? <h2>The Todaiji Temple</h2> : <></>)}
                    <p>
                        The Todaiji Temple in Nara is the largest wood structure in the world. Today, the standing replica is 2/3 the size of the original. On top of the roof are two magnificent gold statues shaped like fish tails. These statues please the water gods and protect the wood building from fire. Inside the temple are four giant warrior statues, one in each corner, protecting the temple from any intruders.
                    </p>
                    <p>
                        The temple houses a massive golden Buddha statue weighing over 380,000 pounds! This statue is meant to please Buddha and bring the people good luck.
                    </p>
                </div>
            </div>
            <div className="swiper-container">
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={desktop ? 3.2 : 2}
                    navigation={true}
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
                    <SwiperSlide><img src="\todaiji-1.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="\todaiji-2.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="\todaiji-3.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="\todaiji-4.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="\todaiji-5.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="\todaiji-6.jpg" /></SwiperSlide>
                </Swiper>
            </div>
            <div className={(desktop ? 'storyDesktop' : 'story')}>
                {(!desktop ? <h2>Castles</h2> : <></>)}
                <img className={(desktop ? 'storyImageDesktop' : 'storyImage')} src="\nijo-gate.jpg" />
                <div>
                    {(desktop ? <h2>Castles</h2> : <></>)}
                    <p>
                        <b>Nijo-jo castle</b> is a powerful building with tiger murals made to display the shogun’s power. All of the rooms in which the shogun had a seat the seat is elevated above the other to demonstrate the difference in both power and position.
                    </p>
                    <p>
                        The upkeep of the castle has been fantastic and the majority of the original work is still in place. The floors were made to make noise similar to birds chirping when stepped on. This helped prevent people from sneaking around during the night.
                    </p>
                    <p>
                        <b>Himeji castle</b> was similar however it boasted an incredibly large foundation, making the castle incredibly difficult to enter other than the main gate. This combined with the large surrounding wall and moat must have made the castle incredibly safe.
                    </p>
                </div>
                <img className={(desktop ? 'storyImageDesktop' : 'storyImage')} src="\himeji.jpg" />
            </div>
            <div className='inline-story'>
                <h2>Community</h2>
                <div>
                    <h4>The power of convenience</h4>
                    <p>
                        A few things both stand out and are hard to spot about the Japanese culture. To start is the fast paced, always moving populus. A store front, even in a more remote area, is likely to have thousands of people walk by them in a single day. In just two steps from their normal route any person can enter this store and become a customer. To earn someone’s patronage shops or services tend to be a mix of
                        Unique,
                        Convenient,
                        Cheap.
                    </p>
                    <p>
                        Combined with the dense population and fierce competition most stores will be worth the visit. But even a visit to the local store, often the conbini, takes two to five minutes, which is a lot of time there. To be even more convenient vending machines have taken the role of full stores, offering electronics, drinks, cold or even hot meals. Of course, this is a minor compromise on both price and quality, meaning conbinis and restaurants still have the edge for those with a bit of time to spare.
                    </p>
                    </div>
                    
            <div className="swiper-container">
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={desktop ? 3.2 : 2}
                    navigation={true}
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
                    <SwiperSlide><img src="\food-shelf.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="\strawberry-mochi-stand.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="\meat-vending.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="\pika-vending.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="\umbrella-locker.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="\coin-locker.jpg" /></SwiperSlide>
                </Swiper>
            </div>
            <div>
                    <p>
                        The focus on walking does have some drawbacks, which again businesses are quick to combat. For those carrying larger items or umbrellas there are frequently coin operated lockers or umbrella holders with locks to secure your belongings before entering the store. Likewise, to keep higher end places clean you may be required to take off your shoes before entering. This allows the store to look more appealing with less cleaning staff while also making people feel more at home while visiting.
                    </p>
                    <p>
                        The transit system is also a good place to observe how people act for common but tedious daily actions. When boarding trains with limited seating people will take up as little space as possible to allow more people to sit down. People will refrain from using the phone or talking too loudly or to random people to avoid bothering anyone.
                    </p>
                    <h4>Hospitality and Pride</h4>
                    <p>
                        Hospitality in Japan is something else. The employees truly make you feel like a valued customer and will be happy to help. Restaurant owners and chefs are eager to please and dread customers having a bad experience. They are so confident in their work that it is insulting to tell a chef that they are good at cooking, as if you expected otherwise. Convenience store workers want you to find everything you need and will be happy to help you find other places if you need items they do not offer.
                    </p>
                    <h4>Recreation on Every Corner</h4>
                    <p>
                        On the fun side of things there are a lot of entertainment buildings along the streets. Both small and large arcades, walls of gatchapon machines and full buildings dedicated to karaoke are common sights. Some of these even make it outdoors with shops on the street and gatchapon machines along side buildings with special prizes depending on the location.
                    </p>
                </div>
                
            <div className="swiper-container">
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={desktop ? 3.2 : 2}
                    navigation={true}
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
                    <SwiperSlide><img src="\karaoke.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="\gatcha.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="\ufo-catcher.jpg" /></SwiperSlide>
                </Swiper>
            </div>
            </div>
        </>
    )
}

export default Culture