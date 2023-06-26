import './LandingPage.css'

export default function LandingPage() {
  return (
    <div className="landingpage">
      <img className='landing-bg' src={process.env.PUBLIC_URL + '/LandingPage.png'} alt="Landing Page BG" />
      <div className='header1'>ENTREPRENEURSHIP CELL</div>
      <div className='header1'>IIIT DHARWAD</div>
      <div className='vincent'>Inspire | Ideate | Innovate</div>
    </div>
  )
}
