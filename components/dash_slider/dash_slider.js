import GlassCard from '../glass-card/glass_card';
import Carousel from 'react-multi-carousel';

import styles from './dash_slider.module.scss'
import Link from 'next/link';

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

        <h1>{data.displayName}</h1>

        <div className={styles.cards}>
            <Carousel swipeable={true} responsive={responsive}  draggable={false}
            className={styles.itemClass}
            >
            {data.value.results.map((item, index) => (
                      <Link key={index} href={`/${item.id}${data.type}`}>
                        <GlassCard details={item} ht={13.9} 
                            wd={19} hf={1} sf={0.6} rf={0.9}/>
                      </Link>
                        ))}
            </Carousel>
        </div>

        </div>
    );
}
 
export default DashSlider;