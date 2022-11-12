import styles from './favouritePage.module.scss'
import Carousel from 'react-multi-carousel';
import GlassCard from '../glass-card/glass_card';

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

const FavouriteComponent = ({nowPlaying}) => {
    return ( 
        <div className={styles.fav}>
        <Carousel swipeable={false} responsive={responsive}  draggable={false}
        className={styles.itemClass}
        >
        {nowPlaying.results.slice(0,10).map((item, index) => (
                    <GlassCard key={index} details={item} ht={17.6} 
                        wd={24} hf={1.2} sf={0.8} rf={0.9}/>
                    ))}
        </Carousel>

        </div>
    );
}
 
export default FavouriteComponent;