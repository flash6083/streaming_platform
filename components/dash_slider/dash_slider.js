import GlassCard from '../glass-card/glass_card';
import Carousel from 'react-multi-carousel';

import styles from './dash_slider.module.scss'

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
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

        <h1>Popular movies</h1>

        <div className={styles.cards}>
            <Carousel swipeable={true} responsive={responsive}  draggable={false}
            className={styles.itemClass}
            >
            {data.results.map((item, index) => (
                        <GlassCard key={index} details={item} ht={13.9} 
                            wd={19} hf={1} sf={0.6} rf={0.9}/>
                        ))}
            </Carousel>
        </div>

        </div>
    );
}
 
export default DashSlider;