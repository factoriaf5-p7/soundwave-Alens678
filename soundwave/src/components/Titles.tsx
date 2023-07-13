import { Typography } from 'antd';

const Titles = Typography

interface TitlesProps {
        children: React.ReactNode;
  }
  
  export const Title: React.FC<TitlesProps> = ({ children }) => {
  return (
    <div>
      <Titles className="white-titles">{children}</Titles>
    </div>
  )
}
