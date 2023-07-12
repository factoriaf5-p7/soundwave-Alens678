import { ReactComponent as Twitter} from '../assets/twitter.svg'
import { ReactComponent as Facebook} from '../assets/icons8-facebook-30.svg'
import {Menu} from 'antd';

export const Footer= () => {

  return (
    <>
    <div  className='footer-container'>
      <Menu 
        className='footer'
        mode="horizontal"
        selectedKeys= {['false']}
        
        items={[
          {
            label: (<div className='footer-items'><span>About Us</span></div>),
            key: 'about',
          },
          {
            label: (<div className='footer-items'><span>Contact</span></div>),
            key: 'contact',
          },
        ]}
       
      >
      </Menu>
      <Menu 
        className='footer'
        selectedKeys= {['false']}
        mode="horizontal"
        items={[ 
          {
            label: (
            <div className='footer-items'>
            <Twitter/>
            <span>Twitter</span>
            </div>
            ),
            key: 'twitter',
          },
          {
            label:  (
              <div className='footer-items'>
              <Facebook/>
              <span>Facebook</span>
              </div>
              ),
            key: 'facebook',
          },
          ]}
      >
      </Menu>
    </div>
  </>     
  )
};

