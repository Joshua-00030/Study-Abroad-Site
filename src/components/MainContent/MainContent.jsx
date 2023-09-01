import './MainContent.css';
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import Culture from '../Pages/Culture';
import Food from '../Pages/Food';
import Grants from '../Pages/Grants';
import Nature from '../Pages/Nature';
import Tips from '../Pages/Tips';
import Resources from '../Pages/Resources';
import Home from '../Pages/Home';


function MainContent({page, desktop}) {
    const pages = [
        <Home key={0} desktop={desktop}/>,
        <Culture key={1} desktop={desktop}/>,
        <Nature key={2} desktop={desktop}/>,
        <Food key={3} desktop={desktop}/>,
        <Tips key={4} desktop={desktop}/>,
        <Resources key={5} desktop={desktop}/>,
        <Grants key={6} desktop={desktop}/>]
    return (
        <div className={(desktop ? 'MainContent desktop' : 'MainContent')}>
            {pages[page]}
        </div>
    )
}

export default MainContent;
