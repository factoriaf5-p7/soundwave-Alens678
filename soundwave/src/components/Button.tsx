import React from 'react';
import { Button } from 'antd';

interface ButtonJProps {
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export const ButtonJ: React.FC<ButtonJProps> = ({ style, children }) => {
  const defaultStyle: React.CSSProperties = {
    background: '#1762A7',
    color: 'white',
    border: 'none',
  };

  return <Button style={{ ...defaultStyle, ...style }}>{children}</Button>;
};
