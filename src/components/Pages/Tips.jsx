function Tips({ desktop }) {
    return (
        <>
            <h1>Tips</h1>
            <div className={(desktop ? 'storyDesktop' : 'story')}>
                {(!desktop ? <h2>Travel Customs</h2> : <></>)}
                <div>
                    {(desktop ? <h2>Customs Clearance</h2> : <></>)}
                    <ul>
                        <li>
                            Traveling to Japan requires a passport, which takes quite a while to get. The process took over 3 months for me and I had no impediments. Be sure to apply for your passport as early as possible. Passports are valid for 10 years if you are over 16 years old upon issuance.
                        </li>
                        <li>
                            All incoming travelers must fill out and submit a customs form before entering Japan. This can be done online at <a href="https://vjw-lp.digital.go.jp/en/">https://vjw-lp.digital.go.jp/en/</a>. I highly recommend you do this ahead of time, before boarding the plane to Japan. Once you have landed you will be able to show a QR code given from the website to speed up the travel customs process and save an hour or two.
                        </li>
                    </ul>
                </div>
            </div>
            <div className={(desktop ? 'storyDesktop' : 'story')}>
                {(!desktop ? <h2>Transit system</h2> : <></>)}
                <img className={(desktop ? 'storyImageDesktop' : 'storyImage')} src="\purple-train.jpg" />
                <div>
                    {(desktop ? <h2>Transit system</h2> : <></>)}
                    <p>
                        In Japan the primary method of travel is the public transportation system. For the majority of your trip this will be the trains, subway and buses. All of these accept payment from an <b><a href="https://www.japan-guide.com/e/e2359_003.html">IC card</a></b>, making them an indispensable resource for any trip there. You can <b>obtain an IC card at most subway stations</b>. They can be recharged using the same machines that you get them from, but you can also refill them at stores, most notably the  common Conbini stores.
                    </p>
                    <p>
                        To use the IC cards, you scan them with the terminals on the side as you are walking. You are not supposed to stop walking. If the read fails or if you do not have enough credit on the card the scanning terminal will turn red and not let you though. Don’t worry about this as the terminal will show what it scanned, typically Japanese words and a charge and balance number. <b>At the bottom the terminal will also say the result of the scan in English</b>.
                    </p>
                </div>
            </div>
            <div className={(desktop ? 'storyDesktop' : 'story')}>
                {(!desktop ? <h2>Groceries</h2> : <></>)}
                <img className={(desktop ? 'storyImageDesktop' : 'storyImage')} src="\food-shelf.jpg" />
                <div>
                    {(desktop ? <h2>Groceries</h2> : <></>)}
                    <p>
                        A big difference from America is the pricing on food in Japan. You should not be worried about eating out or visiting local convenience stores. While the grocery store will be cheaper, the difference is not often worth the extra travel unless you are buying a large amount of food for multiple people. Additionally, many stores will sell premade meals which are very good and reasonably priced. Many restaurants are much lower cost than expected.
                    </p>
                    <p>
                        In the end you can still save by traveling to the grocery store and cooking for many people, but while traveling with three or fewer people <b>cooking may not be worth the effort</b>.
                    </p>
                </div>
            </div>
            <div className={(desktop ? 'storyDesktop' : 'story')}>
                {(!desktop ? <h2>Hotel Services</h2> : <></>)}
                <div>
                    {(desktop ? <h2>Hotel Services</h2> : <></>)}
                    <p>
                        If you are visiting multiple areas in Japan an amazing service offered by hotels is the transportation of your luggage between different hotels. This saves you the trip between hotels before you start your day and can be a big help if you have a lot of luggage. Keep in mind this service is done very early in the morning. It is best to drop off your luggage for transportation before you go to bed.
                    </p>
                    <p>
                        Likewise, hotels will often offer to hold your luggage free of charge if you show up before check in time. This helps a lot when traveling, as you may arrive at odd hours.
                    </p>
                </div>
            </div>
            <div className={(desktop ? 'storyDesktop' : 'story')}>
                {(!desktop ? <h2>Day Planning</h2> : <></>)}
                <img className={(desktop ? 'storyImageDesktop' : 'storyImage')} src="\big-tori.jpg" />
                <div>
                    {(desktop ? <h2>Day Planning</h2> : <></>)}
                    <p>
                        On of the biggest hurdles of visiting Japan is using the transit system, specifically reaching your destination using connecting trains and busses. Fortunately, google maps is great at giving you directions and showing accurate connections for public transportation. The main issue you may run into is that not every destination is in English. The majority of the big travel locations will be but if you plan to visit a hidden gem then you may need to know the hiragana writing.
                    </p>
                    <p>
                        Keep in mind that while the transit system is incredibly quick, you do need to wait for your train. This means simply showing up at the station and checking how to get where you want to go is a bad idea. Always look ahead or be prepared to wait for the next train.
                    </p>
                    <p>
                        For big trips you should plan an arrival hour and check how long it takes to get there 10 minutes earlier and later. You may find the arrival time is the same as you would mostly be waiting for the train or that being a few minutes late will add a lot of travel time as you miss your train. Do the same for the return trip.
                    </p>
                    <p>
                    Remember while you are traveling the majority of people are living here. Plan your times to avoid lunch rushes, busy weekends and other frequently busy times. Shrines, mountain hiking and stores will all be much more manageable if you go when there are less people. Keep in mind that you will likely want more time to look at things than the average person. Going when there is not a crowd lets you enjoy your time more.
                    </p>
                </div>
            </div>
            <div className={(desktop ? 'storyDesktop' : 'story')}>
                {(!desktop ? <h2>Pocket Wifi and SIM Cards</h2> : <></>)}
                <div>
                    {(desktop ? <h2>Pocket Wifi and SIM Cards</h2> : <></>)}
                    <p>
                        It is unlikely your current sim card, which provides cellular service, will work in another country. Be sure to buy a sim card or adjust your current plan ahead of time to get cellular service in Japan. You can also rent a portable pocket Wi-Fi device. This will offer unlimited Wi-Fi as you travel throughout Japan but is more expensive than a single foreign sim card.
                    </p>
                    <p>
                        Depending on how many people you plan on having, if you plan on separating and what you plan on using service for either option can be a good choice. As you are not likely to have much down time, I highly recommend getting sim cards for every member of the trip. If you plan on using a lot of streaming services you may run out of data and the pocket Wi-Fi and messaging apps could be the better choice.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Tips