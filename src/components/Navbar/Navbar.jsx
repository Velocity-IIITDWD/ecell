import './Navbar.css'
import NavbarButtons from './NavbarButtons'
import {RxHamburgerMenu} from 'react-icons/rx'

export default function Navbar() {
    return (
        <nav>
            <img src={process.env.PUBLIC_URL + '/E-Cell-Logo.png'} alt="Main Logo" />
            <ul>
                <NavbarButtons text="Home" />
                <NavbarButtons text="Blog" />
                <NavbarButtons text="Events" />
                <NavbarButtons text="Menu" />
            </ul>
            <div className='drawer'>
                <RxHamburgerMenu />
            </div>
            {/* <div className='Drawer-container'></div> */}
        </nav>
    )
}
