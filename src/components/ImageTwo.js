
import { Parallax } from 'react-parallax';
import Image2 from '../image/2.jpg'
const ImageOne = () => (
    <Parallax className='image' blur={0} bgImage={Image2} strength={800} bgImageStyle={{minHeight:"100vh"}}>
        <div className='content'>
            <span className="img-txt">a trip to Space</span>
        </div>
    </Parallax>
);

export default ImageOne