import logo from '../assets/logo.png';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';


export const Navbar= () => {

  return (
    <>
      <div  style={{
            background: '#2F303A',
            color: 'white',
            display: 'flex',
            justifyContent: 'center'            
          }}>
        <Menu className='menu'
          mode="horizontal"
          selectedKeys= {['false']}
          items={[
            {
              label: (
                <Link to="../" className="home-link">
                  <div style={{ display: 'flex', alignItems: 'center'}}>
                    <img src={logo} height="40px" alt="logo" />
                    <span style={{ marginLeft: '1%',fontSize:'16px' }}>Soundwave</span>
                  </div>
                </Link>
              ),
              key: '', 
            },
          ]}
         
        >
        </Menu>
        <Menu className='menu'
          selectedKeys= {['false']}
          mode="horizontal"
          items={[ 
            {
            label: (
              <Link to="../discover" rel="Discover Hero Page">
                Discover
              </Link>
            ),
            key: 'discover',
          },
          {
            label: (
              <Link to="../join " rel="Registering Page">
                Join
              </Link>
            ),
            key: 'join',
          },
        ]}
        >
        </Menu>
      </div>
    </>     
    
  );
};