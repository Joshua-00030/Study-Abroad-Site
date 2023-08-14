import './MainContent.css';
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import Culture from '../Pages/Culture';
import Food from '../Pages/Food';
import Grants from '../Pages/Grants';
import Nature from '../Pages/Nature';
import Tips from '../Pages/Tips';


function MainContent({page, desktop}) {
    const pages = [
        <Culture key={1} desktop={desktop}/>,
        <Nature key={2} desktop={desktop}/>,
        <Food key={3} desktop={desktop}/>,
        <Tips key={4} desktop={desktop}/>,
        <Grants key={5} desktop={desktop}/>]
    return (
        <div className={(desktop ? 'MainContent desktop' : 'MainContent')}>
            {pages[page]}
        </div>
    )
}

export default MainContent;
