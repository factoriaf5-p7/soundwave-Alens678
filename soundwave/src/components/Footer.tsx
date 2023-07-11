import { ReactComponent as Twitter} from '../assets/twitter.svg'
import { ReactComponent as Facebook} from '../assets/icons8-facebook-30.svg'
import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

const items: MenuProps['items'] = [
  {
    label: 'About Us',
    key: 'about',
  },
  {
    label: 'Contact',
    key: 'contact',
  },
  {
    label: 'Twitter',
    key: 'twitter',
    icon: <Twitter/>,
  },
  {
    label: 'Facebook',
    key: 'facebook',
    icon: <Facebook/>,
  },
 
 
];

export const Footer: React.FC = () => {
  const [current, setCurrent] = useState('');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} style={{
    background: '#202027',
    color: 'white',
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
  }} />;
};

