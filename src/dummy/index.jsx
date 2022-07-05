import { Link } from 'react-router-dom';
function Header (){
    return (
        <>
        <div className='header-logo'>
            <img src="" alt=""> </img>
        </div>
        <div className='header-menu'>
            <Link to='Home'> HOME </Link>
        </div>
        <div className='header-menu'>
            <Link to='AboutUs'> AboutUs </Link>
        </div>
        </>
    )
}
export default Header;