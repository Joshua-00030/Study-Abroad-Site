import './MainContent.css';
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import Culture from '../Pages/Culture';
import Food from '../Pages/Food';
import Grants from '../Pages/Grants';
import Nature from '../Pages/Nature';


function MainContent({page}) {
    const desktop = window.innerWidth < 600 ? true : false
    const pages = [
        <Culture desktop={desktop}/>,
        <Food desktop={desktop}/>,
        <Grants desktop={desktop}/>,
        <Nature desktop={desktop}/>]
    return (
        <div className={(desktop ? 'MainContent' : 'MainContent desktop')}>
            {pages[page]}
        </div>
    )
}

export default MainContent;
