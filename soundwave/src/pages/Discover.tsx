import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { ReactComponent as Microphone} from '../assets/microphone.svg'
import { ReactComponent as Albums} from '../assets/albums.svg'
import { ReactComponent as More} from '../assets/more.svg'
import covers from '../assets/covers.jpg'

export const Discover=()=> {
    return (
      <div>
        <div>
        <Navbar/>
        <h2>Discover new music</h2>
        <Microphone/>
        <Albums/>
        <More/>
        <p>By joining you can benefit by listening to the latest albums released</p>3
        <img src={covers} alt="Covers image" />
        <Footer/>
      </div>
      </div>
    )
  }