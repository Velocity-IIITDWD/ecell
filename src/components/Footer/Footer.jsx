import './Footer.css'
import { FaInstagramSquare, FaLinkedin, FaFacebookSquare, FaTwitterSquare, FaGithubSquare, FaYoutubeSquare } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer>
            <img className='Footer-img' src={process.env.PUBLIC_URL + '/E-cell-Footer.png'} alt="Footer Logo" />
            <div className='middle-container'>
                Get in Touch or Address or Get Notified section
            </div>
            <div className='last-container'>
                <div style={{
                    color: "white",
                }}>Follow Us</div>
                <div className='flex'>
                    <FaInstagramSquare />
                    <FaLinkedin />
                    <FaFacebookSquare />
                    <FaTwitterSquare/>
                    <FaGithubSquare/>
                    <FaYoutubeSquare/>
                </div>
                <div style={{
                    color: "white",
                    fontWeight: "bold",
                }}>Contact Us</div>
            </div>
        </footer>
    )
}
