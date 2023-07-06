import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { Button } from "../components/Button"

export const LandingPage=()=> {
    return (
      <div>
        <Navbar/>
          <h2>Feel The Music</h2>
          <h3>Stream over 20 thousand songs with one click</h3>
          <Button/>
        <Footer/>
      </div>
    )
  }