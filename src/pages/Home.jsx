import AboutUs from "../components/About/AboutUs"
import Footer from "../components/Footer/Footer"
import Gallery from "../components/Gallery/Gallery"
import LandingPage from "../components/LandingPage/LandingPage"
import Navbar from "../components/Navbar/Navbar"
import Report from "../components/Report/Report"

export default function Home() {
  return (
    <main>
        <Navbar/>
        <LandingPage/>
        <AboutUs/>
        <Gallery/>
        <Report/>
        <Footer/>
    </main>
  )
}
