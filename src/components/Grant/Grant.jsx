import './Grant.css'

function Grant({desktop, name, link, story}){
    return (
        <div className="grant">
            <div className={(desktop ? 'story grant' : 'storyDesktop grant')}>
            <h3>{name}: <a href={link}>{link}</a></h3>
            {story}
            </div>
        </div>
    )
}

export default Grant