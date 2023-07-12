import { ReactComponent as Microphone} from '../assets/microphone.svg'
import { ReactComponent as Albums} from '../assets/albums.svg'
import { ReactComponent as More} from '../assets/more.svg'
import { Typography } from 'antd';

const { Text } = Typography;


const ItemProps= [
    {
        label: 'Charts',
        key: 'charts',
        icon: <Microphone/>,
    },
  {
    label: 'Albums',
    key: 'albums',
    icon: <Albums />,
  },
  {
    label: 'More',
    key: 'more',
    icon: <More/>,
  },
 
 
];

export const IconsMenu = () => {
    return (
      <>
        {ItemProps.map(item => (
            <div key={item.key} >
                <i className='icons'>
                    {item.icon}
                    <Text className='text-icons'>{item.label}</Text>
                </i>
           </div>
        ))}
      </>
    );
  };


