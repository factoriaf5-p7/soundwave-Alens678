import { ButtonJ } from "./Button"
import {Form, Input,Col} from "antd";

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

export function RegisterForm() {
  return (
        
    <Col xs={24} lg={12} style={
      { display: 'flex',
        justifyContent: 'center',
        background: '#202027',
        padding: '10px',
        borderRadius: '8px', 
      }}
    >
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        style={{ maxWidth: 'auto'}}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="custom-form"
      >
          <Form.Item 
            label="Name:" 
            name="Name"
            labelAlign="left"
          >
            <Input  style={{ background: 'none' }} />
          </Form.Item>
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
            <Input  style={{ background: 'none' }} />
          </Form.Item>
          <Form.Item 
            label="Password:" 
            name="password"
            labelAlign="left"
          >
          <Input.Password 
          style={{ background: 'none' }}
          className="password-input" 
          />
          </Form.Item>
          <Form.Item >
            <ButtonJ style={{width:'100%'}}>Join Now</ButtonJ>
          </Form.Item>
        </Form>
      </Col>
      
    
  );
}

