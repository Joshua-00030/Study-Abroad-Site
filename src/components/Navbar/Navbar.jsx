import './Navbar.css';


function Navbar({setPage}) {
    return (
        <div className='Navbar'>
            <h3 onClick={()=>setPage(0)}>Culture</h3>
            <h3 onClick={()=>setPage(1)}>Nature</h3>
            <h3 onClick={()=>setPage(2)}>Food</h3>
            <h3 onClick={()=>setPage(3)}>Grants</h3>
        </div>
    )
}

export default Navbar;
