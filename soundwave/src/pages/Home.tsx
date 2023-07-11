import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { ButtonJ } from "../components/Button"
import girl  from "../assets/landing-page-girl.png"
import { Col, Layout} from 'antd';


export const Home=()=> {
    return (
      <div>
       
        
        <Layout style={{background:'#2F303A'}}> 
          <Col xs={0} lg={12}>
            <img src={girl} alt="Model"/>
          </Col>
          <Col xs={24} lg={12}>
            <h2 className="titles2">Feel The Music</h2>
            <h3>Stream over 20 thousand songs with one click</h3>
            <ButtonJ>Join Now</ButtonJ>
          </Col>       
        </Layout>       
        
      </div>
    )
  }