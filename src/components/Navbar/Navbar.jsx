import './Navbar.css';
import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

function Navbar({ desktop, page, setPage }) {

    const [open, setOpen] = useState(0)
    const platform = desktop ? 'nav-desktop' : 'nav-mobile'

    const TogglePage = (page) => {
        if (open || desktop) {
            setPage(page)
            setOpen(!open)
        } else {
            setPage(page)
        }
    }
    return (
        <div className={`Navbar ${platform}`}>
            <div className='left'>
                <h3 className={`${platform}`} onClick={() => TogglePage(0)}>Study Abroad Guide</h3>
            </div>
            {(desktop ?
                <div className='right'>
                    <h3 className={(page === 1 ? "selected" : "")} onClick={() => setPage(1)}>Culture</h3>
                    <h3 className={(page === 2 ? "selected" : "")} onClick={() => setPage(2)}>Nature</h3>
                    <h3 className={(page === 3 ? "selected" : "")} onClick={() => setPage(3)}>Food</h3>
                    <h3 className={(page === 4 ? "selected" : "")} onClick={() => setPage(4)}>Tips</h3>
                    <h3 className={(page === 5 ? "selected" : "")} onClick={() => setPage(5)}>Resources</h3>
                    <h3 className={(page === 6 ? "selected" : "")} onClick={() => setPage(6)}>Grants</h3>
                </div>
                : (open ?
                    <ul>
                        <h3 onClick={() => TogglePage(1)}>Culture</h3>
                        <h3 onClick={() => TogglePage(2)}>Nature</h3>
                        <h3 onClick={() => TogglePage(3)}>Food</h3>
                        <h3 onClick={() => TogglePage(4)}>Tips</h3>
                        <h3 onClick={() => TogglePage(5)}>Resources</h3>
                        <h3 onClick={() => TogglePage(6)}>Grants</h3>
                    </ul> :
                    <GiHamburgerMenu style={{ fontSize: '2rem' }} onClick={() => setOpen(!open)} />)
            )}
        </div>
    )
}

export default Navbar;
