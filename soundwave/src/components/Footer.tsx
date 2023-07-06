import { ReactComponent as Twitter} from '../assets/twitter.svg'
import { ReactComponent as Facebook} from '../assets/icons8-facebook-30.svg'


export const Footer=()=> {
   


  return (
    <div>
        <p>About Us</p>
        <p>Contact</p>
        <article>
          <Twitter/>
          <p>Twitter</p>
        </article>
        <article>
          <Facebook/>
          <a target="_blank" href="https://icons8.com/icon/59780/facebook">Facebook</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
        </article>
    </div>
  )
}
