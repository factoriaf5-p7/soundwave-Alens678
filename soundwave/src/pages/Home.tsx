import { ButtonJ } from "../components/Button"
import girl  from "../assets/landing-page-girl.png"
import { Col} from 'antd';
import { Title } from "../components/Titles";


export const Home=()=> {
    return (
      <div>
        
           <div className="circle circle-3"></div>  
          <div className="circle circle-4"></div>  
          <div className="circle circle-5"></div> 
      
        
       <div className="hero-text">
          <Col xs={24} >
            <Title>Feel the music</Title>
            <p>Stream over 20 thousand songs with one click</p>
            <ButtonJ style={{marginLeft:'3vh'}}>Join Now</ButtonJ>
          </Col> 
        </div>
        <Col xs={0} lg={12}>
            <img className= 'hero-img' src={girl} alt="Model"/>
        </Col>
      </div>
    )
  }