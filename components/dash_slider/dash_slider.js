import GlassCard from '../glass-card/glass_card';
import Carousel from 'react-multi-carousel';

import styles from './dash_slider.module.scss'

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    }
};

const DashSlider = ({data}) => {
    return ( 
        <div className={styles.slider}>
        <div className={styles.cards}>
        <Carousel swipeable={false} responsive={responsive}  draggable={false}
        >
        {data.results.slice(0,7).map((item, index) => (
                    <GlassCard key={index} details={item} ht={17.6} 
                        wd={24} hf={1.2} sf={0.8} rf={0.9}/>
                    ))}
        </Carousel>
        </div>

        </div>
    );
}
 
export default DashSlider;