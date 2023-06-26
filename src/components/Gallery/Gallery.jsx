import './Gallery.css';

export default function Gallery() {
    return (
        <div className='gallery-container'>
            <img className='gallery-bg' src={process.env.PUBLIC_URL + '/Gallery_Main.png'} alt="Gallery BG" />
            <div className='gallery-content'>
                <div className='first-container'>
                    <img className='image-box' style={{ transform: 'translate(-50%,-10%)', position: 'absolute' }} src={process.env.PUBLIC_URL + '/gallery_L.png'} alt="Gallery L" />
                    <img className='image-box' style={{ position: 'relative', transform: 'translateY(10%)', zIndex: '3' }} src={process.env.PUBLIC_URL + '/gallery_C.png'} alt="Gallery C" />
                    <img className='image-box' style={{ transform: 'translate(50%,-10%)', position: 'absolute' }} src={process.env.PUBLIC_URL + '/gallery_R.png'} alt="Gallery R" />
                </div>
                <div className='second-container'>
                    <div className='gallery-header'>GALLERY</div>
                    <div className='gallery-main'>Get a peek Into the moments of our Events Perfectly captured and stored </div>
                    <button>View</button>
                </div>
            </div>
        </div>
    )
}
