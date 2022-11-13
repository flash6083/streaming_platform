import styles from './favouritePage.module.scss'
import Carousel from 'react-multi-carousel';
import GlassCard from '../glass-card/glass_card';
import { useState, useEffect } from 'react';


const FavouriteComponent = () => {
  const [dim, setDim] = useState({x:0,y:0})

  useEffect(() => {
    const width = window.innerWidth
    const height = window.innerHeight
    setDim({x:width ,y: height})
  }, []);

    return ( 
    <div className={styles.fav}>
      <div className={styles.backdrop}>
        <img src="/panther.png" alt="test" />
      </div>
      <div className={styles.video}>
        <iframe width={dim.x/1.5} height={dim.y/1.5} frameBorder="0" allowFullScreen
          src="https://www.youtube.com/embed/Sa13L_4gfAQ?playlist=Sa13L_4gfAQ&loop=1&autoplay=1">
        </iframe>
      </div>
    </div>
    );
}
 
export default FavouriteComponent;