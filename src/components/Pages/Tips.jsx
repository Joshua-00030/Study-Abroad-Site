function Tips({desktop}){
    return (
        <>
        <h1>Tips</h1>
            <div className={(desktop ? 'storyDesktop' : 'story')}>
            {(desktop ?<h2>Transit system</h2>:<></>)}
            <img className={(desktop ? 'storyImageDesktop' : 'storyImage')} src="\crabsign-w.jpg" />
            <div>
            {(!desktop ?<h2>Transit system</h2>:<></>)}
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing elit pellentesque habitant morbi tristique senectus et. Malesuada fames ac turpis egestas sed tempus urna. Ipsum consequat nisl vel pretium lectus quam id leo in. Sed felis eget velit aliquet. Eget arcu dictum varius duis at consectetur lorem donec. Arcu odio ut sem nulla pharetra diam sit amet. Tellus pellentesque eu tincidunt tortor aliquam. Adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Aliquam id diam maecenas ultricies mi. Adipiscing diam donec adipiscing tristique risus nec feugiat. Egestas pretium aenean pharetra magna ac placerat vestibulum lectus. Sem integer vitae justo eget magna. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis.
                    </p>
            </div>
            </div>
            <div className={(desktop ? 'storyDesktop' : 'story')}>
            {(desktop ?<h2>Groceries</h2>:<></>)}
            <img className={(desktop ? 'storyImageDesktop' : 'storyImage')} src="\food3-s.jpg" />
            <div>
            {(!desktop ?<h2>Groceries</h2>:<></>)}
                <p>
                    At tempor commodo ullamcorper a lacus vestibulum sed arcu. Tincidunt lobortis feugiat vivamus at augue eget. Sit amet est placerat in egestas erat imperdiet. Quam nulla porttitor massa id. Quis risus sed vulputate odio ut enim blandit volutpat maecenas. Quam nulla porttitor massa id. Pulvinar mattis nunc sed blandit libero volutpat sed. Felis imperdiet proin fermentum leo vel orci porta non pulvinar. Nunc congue nisi vitae suscipit. Id semper risus in hendrerit gravida rutrum quisque.
                </p>
            </div>
            </div>
            <div className={(desktop ? 'storyDesktop' : 'story')}>
            {(desktop ?<h2>Hotel Services</h2>:<></>)}
            <img className={(desktop ? 'storyImageDesktop' : 'storyImage')} src="\food3-s.jpg" />
            <div>
            {(!desktop ?<h2>Hotel Services</h2>:<></>)}
                <p>
                    At tempor commodo ullamcorper a lacus vestibulum sed arcu. Tincidunt lobortis feugiat vivamus at augue eget. Sit amet est placerat in egestas erat imperdiet. Quam nulla porttitor massa id. Quis risus sed vulputate odio ut enim blandit volutpat maecenas. Quam nulla porttitor massa id. Pulvinar mattis nunc sed blandit libero volutpat sed. Felis imperdiet proin fermentum leo vel orci porta non pulvinar. Nunc congue nisi vitae suscipit. Id semper risus in hendrerit gravida rutrum quisque.
                </p>
            </div>
            </div>
            <div className={(desktop ? 'storyDesktop' : 'story')}>
            {(desktop ?<h2>Day Planning</h2>:<></>)}
            <img className={(desktop ? 'storyImageDesktop' : 'storyImage')} src="\food3-s.jpg" />
            <div>
            {(!desktop ?<h2>Day Planning</h2>:<></>)}
                <p>
                    At tempor commodo ullamcorper a lacus vestibulum sed arcu. Tincidunt lobortis feugiat vivamus at augue eget. Sit amet est placerat in egestas erat imperdiet. Quam nulla porttitor massa id. Quis risus sed vulputate odio ut enim blandit volutpat maecenas. Quam nulla porttitor massa id. Pulvinar mattis nunc sed blandit libero volutpat sed. Felis imperdiet proin fermentum leo vel orci porta non pulvinar. Nunc congue nisi vitae suscipit. Id semper risus in hendrerit gravida rutrum quisque.
                </p>
            </div>
            </div>
            <div className={(desktop ? 'storyDesktop' : 'story')}>
            {(!desktop ?<h2>Travel Customs</h2>:<></>)}
            <img className={(desktop ? 'storyImageDesktop' : 'storyImage')} src="\food3-s.jpg" />
            <div>
            {(desktop ?<h2>Travel Customs</h2>:<></>)}
                <p>
                    All incoming travelers must fill and submit a customs form before entering Japan. This can be done online at <a href="https://vjw-lp.digital.go.jp/en/">https://vjw-lp.digital.go.jp/en/</a>. Once you have landed you will be able to show a QR code given from the website to speed up the process.
                </p>
            </div>
            </div>
            <div className={(desktop ? 'storyDesktop' : 'story')}>
            {(!desktop ?<h2>Pocket Wifi</h2>:<></>)}
            <img className={(desktop ? 'storyImageDesktop' : 'storyImage')} src="\food3-s.jpg" />
            <div>
            {(desktop ?<h2>Pocket Wifi</h2>:<></>)}
                <p>
                    buy it
                </p>
            </div>
            </div>
            </>
    )
}

export default Tips