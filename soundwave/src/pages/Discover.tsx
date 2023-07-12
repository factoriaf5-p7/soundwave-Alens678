import { Footer } from "../components/Footer"

import covers from '../assets/covers.jpg'
import {  Title } from "../components/Titles"
import { IconsMenu } from "../components/IconsMenu"

export const Discover=()=> {
    return (
      <div>
        <div className="discover-left">
          <Title>Discover new music</Title>
          <article className="icons-container">
            <IconsMenu/>
          </article>
          <p>By joining you can benefit by listening to the latest albums released</p>
         </div>
        <img className= 'covers' src={covers} alt="Covers image" />
           
      <Footer/>
      </div>
      
    )
  }