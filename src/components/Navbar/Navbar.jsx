import './Navbar.css';
import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

function Navbar({ desktop, setPage }) {
    
  const [open, setOpen] = useState(0)
  const platform = desktop ? 'nav-desktop' : 'nav-mobile'
    return (
        <div className={`Navbar ${platform}`} onClick={()=>(setOpen(o=>!o))}>
            <div className='left'>
                <h3 className={`${platform}`}>Study Abroad Guide</h3>
            </div>
            {(desktop ?
            <div className='right'>
                <h3 onClick={() => setPage(0)}>Culture</h3>
                <h3 onClick={() => setPage(1)}>Nature</h3>
                <h3 onClick={() => setPage(2)}>Food</h3>
                <h3 onClick={() => setPage(3)}>Tips</h3>
                <h3 onClick={() => setPage(4)}>Grants</h3>
            </div>
            :(open ?
                <ul>
                <h3 onClick={() => setPage(0)}>Culture</h3>
                <h3 onClick={() => setPage(1)}>Nature</h3>
                <h3 onClick={() => setPage(2)}>Food</h3>
                <h3 onClick={() => setPage(3)}>Tips</h3>
                <h3 onClick={() => setPage(4)}>Grants</h3>
            </ul>:
                <GiHamburgerMenu  style={{fontSize:'2rem'}}/>)
                )}
        </div>
    )
}

export default Navbar;
