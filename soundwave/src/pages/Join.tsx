import { Footer } from "../components/Footer";
import { RegisterForm } from "../components/RegisterForm"
import {Col} from "antd";




export const Join=()=> {
    return (
      <>
        <div className="circle circle-1"></div>         
        <article className='join-title' style={{ marginLeft: '10vw',marginTop:'5px', marginBottom: '0',  }}>
          <Col >
            <h1 className='titles' style={{fontSize:'3.2rem'}}>Join the <span>fun.</span></h1>
          </Col >
        </article>
        <article className='form' style={{margin: '8vw', display: 'flex', }} >
          <Col xs={24} lg={{ span: 12, offset: 0 }} >
            <RegisterForm/>
          </Col>
        </article>  
        <div className="circle circle-2"></div>    
        <Footer/>
      </>
    )
  }