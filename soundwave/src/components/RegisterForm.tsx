import { ButtonJ } from "./Button"
import {Form, Input,Col} from "antd";


export function RegisterForm() {
  
  return (
        
    <Col xs={24} 
    style={
      { 
        background: '#202027',
        padding: '10px',
        borderRadius: '8px',
            
      }}
    >
      <Form
        layout="vertical"
        style={{ 
          maxWidth: '100%',
         }}
       
        className="custom-form"
     
      > 
        <div className="form-item">
          <Form.Item 
                labelAlign="left"
                label="Name:" 
                name="Name"
              >
                <Input  style={{ background: 'none', color: 'white'}} />
          </Form.Item>
        </div>
        <div className="form-item">
          <Form.Item
                name="email"
                label="Email:"
                labelAlign="left"
                rules={[
                  {
                    type: "email",
                  },
                ]}
              >
              <Input  style={{ background: 'none', color: 'white' }} />
          </Form.Item>
        </div>
        <div className="form-item">
          <Form.Item 
              labelAlign="left"
              label="Password:" 
              name="password"
            >
            <Input.Password 
            style={{ background: 'none' }}
            className="password-input" 
            />
          </Form.Item>
        </div>
        <Form.Item  >
          <ButtonJ style={{width:'100%'}}>Join Now</ButtonJ>
        </Form.Item>
      </Form>
    </Col>
      
    
  );
}

