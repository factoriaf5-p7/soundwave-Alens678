import { RegisterForm } from "../components/RegisterForm"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"

export const Join=()=> {
    return (
      <div>
        <Navbar/>
        <h1>Join the fun.</h1>
        <RegisterForm/>
        <Footer/>
      </div>
    )
  }