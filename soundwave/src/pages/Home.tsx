import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { ButtonJ } from "../components/Button"
// import { Outlet } from "react-router-dom"

export const Home=()=> {
    return (
      <div>
        <Navbar/>
          <h2>Feel The Music</h2>
          <h3>Stream over 20 thousand songs with one click</h3>
          <ButtonJ/>
          {/* <Outlet/> */}
        <Footer/>
        
      </div>
    )
  }