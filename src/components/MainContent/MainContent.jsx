import './MainContent.css';
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";

function MainContent() {
    const desktop = window.innerWidth < 600 ? true : false
    return (
        <div className={(desktop ? 'MainContent' : 'MainContent desktop')}>
            <h1>Title</h1>
            <div className={(desktop ? 'story' : 'storyDesktop')}>
            {(desktop ?<h2>Street Shops</h2>:<></>)}
            <img className={(desktop ? 'storyImage' : 'storyImageDesktop')} src="\crabsign-w.jpg" />
            <div>
            {(!desktop ?<h2>Street Shops</h2>:<></>)}
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing elit pellentesque habitant morbi tristique senectus et. Malesuada fames ac turpis egestas sed tempus urna. Ipsum consequat nisl vel pretium lectus quam id leo in. Sed felis eget velit aliquet. Eget arcu dictum varius duis at consectetur lorem donec. Arcu odio ut sem nulla pharetra diam sit amet. Tellus pellentesque eu tincidunt tortor aliquam. Adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Aliquam id diam maecenas ultricies mi. Adipiscing diam donec adipiscing tristique risus nec feugiat. Egestas pretium aenean pharetra magna ac placerat vestibulum lectus. Sem integer vitae justo eget magna. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis.
                    </p>
            </div>
            </div>
            <div className={(desktop ? 'story' : 'storyDesktop')}>
            {(desktop ?<h2>Dining Experience</h2>:<></>)}
            <img className={(desktop ? 'storyImage' : 'storyImageDesktop')} src="\food3-s.jpg" />
            <div>
            {(!desktop ?<h2>Dining Experience</h2>:<></>)}
                <p>
                    At tempor commodo ullamcorper a lacus vestibulum sed arcu. Tincidunt lobortis feugiat vivamus at augue eget. Sit amet est placerat in egestas erat imperdiet. Quam nulla porttitor massa id. Quis risus sed vulputate odio ut enim blandit volutpat maecenas. Quam nulla porttitor massa id. Pulvinar mattis nunc sed blandit libero volutpat sed. Felis imperdiet proin fermentum leo vel orci porta non pulvinar. Nunc congue nisi vitae suscipit. Id semper risus in hendrerit gravida rutrum quisque.
                </p>
            </div>
            </div>
            <div className={(desktop ? 'story' : 'storyDesktop')}>
            <img className={(desktop ? 'storyImage' : 'storyImageDesktop')} src="\food1-w.jpg" />
                <p>
                    Consectetur lorem donec massa sapien. Semper viverra nam libero justo laoreet. Viverra accumsan in nisl nisi scelerisque eu. At ultrices mi tempus imperdiet nulla malesuada. Eu augue ut lectus arcu bibendum at varius vel. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus et netus. Euismod lacinia at quis risus sed vulputate odio ut. Vitae congue eu consequat ac felis donec et odio pellentesque. Ultricies mi quis hendrerit dolor magna eget est. Sed enim ut sem viverra aliquet eget sit amet. Sed risus pretium quam vulputate dignissim suspendisse in est ante. Pellentesque diam volutpat commodo sed egestas. Euismod elementum nisi quis eleifend. Est velit egestas dui id ornare arcu odio ut sem. Amet risus nullam eget felis eget nunc. Aliquam faucibus purus in massa. Velit euismod in pellentesque massa placerat duis ultricies. Quis risus sed vulputate odio ut.
                </p>
            </div>
            <div className={(desktop ? 'story' : 'storyDesktop')}>
            <img className={(desktop ? 'storyImage' : 'storyImageDesktop')} src="\naradeer-s.jpg" />
                <p>
                    Non enim praesent elementum facilisis leo vel fringilla est ullamcorper. Vulputate odio ut enim blandit. Vitae elementum curabitur vitae nunc. Nunc sed augue lacus viverra vitae congue eu consequat. Mi quis hendrerit dolor magna eget est. Quis hendrerit dolor magna eget est lorem. Neque convallis a cras semper auctor neque vitae tempus quam. Interdum consectetur libero id faucibus nisl tincidunt eget. Amet facilisis magna etiam tempor orci eu. Sapien eget mi proin sed libero enim sed. Sit amet tellus cras adipiscing enim eu turpis egestas. Nunc sed blandit libero volutpat. Molestie at elementum eu facilisis sed odio morbi quis.
                </p>
            </div>
            <div className={(desktop ? 'story' : 'storyDesktop')}>
            <img className={(desktop ? 'storyImage' : 'storyImageDesktop')} src="\food6-w.jpg" />
                <p>
                    Viverra ipsum nunc aliquet bibendum enim facilisis gravida. Iaculis eu non diam phasellus vestibulum lorem. Elementum facilisis leo vel fringilla est ullamcorper. Lectus proin nibh nisl condimentum id venenatis a condimentum vitae. Odio euismod lacinia at quis risus sed. Magna eget est lorem ipsum dolor sit amet consectetur adipiscing. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Aliquet lectus proin nibh nisl. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Auctor urna nunc id cursus metus aliquam eleifend mi. Neque volutpat ac tincidunt vitae semper. Gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim. Quis commodo odio aenean sed adipiscing diam donec adipiscing tristique. Diam ut venenatis tellus in metus vulputate eu scelerisque felis.
                </p>
            </div>
        </div>
    )
}

export default MainContent;
