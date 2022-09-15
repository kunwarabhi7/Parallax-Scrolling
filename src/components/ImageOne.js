
import { Parallax } from 'react-parallax';
import Image1 from '../image/1.jpg'
const ImageOne = () => (
    <Parallax className='image' blur={0} bgImage={Image1} strength={800} bgImageStyle={{minHeight:"100vh"}}>
        <div className='content'>
            <span className="img-txt">a trip to Space</span>
        </div>
    </Parallax>
);

export default ImageOne