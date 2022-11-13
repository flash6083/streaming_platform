import { useState, useEffect } from 'react';
import GlassCard from '../glass-card/glass_card';
import ytUrl from '../../constants/youtubeUrl';

import styles from './productPage.module.scss'


const ProductComponent = ({video, product}) => {
  const [dim, setDim] = useState({x:0,y:0})

  var trailer = video.results.find(item => {
    return item.name.includes("Official Trailer")
  })

  trailer = trailer ? trailer : video.results[0]
  
  useEffect(() => {
    const width = window.innerWidth
    const height = window.innerHeight
    setDim({x:width ,y: height})

  }, []);

    return ( 
    <div className={styles.product}>
        {
          trailer && <div className={styles.video}>
            <iframe width={dim.x/1.5} height={dim.y/1.5} frameBorder="0" allowFullScreen
              src={`${ytUrl}${trailer.key}?autoplay=1&playlist=${trailer.key}&loop=1`}>
            </iframe>
          </div>
        }

        <div className={styles.content}>
          <div className={styles.left}>
            <GlassCard details={product} ht={30} wd={24} hf={1.5} sf={1} rf={1.2}/>
          </div>
          <div className={styles.right}>
            <h1>{(product.original_title || product.original_name)}</h1>
            <span>{(product.release_date || product.first_air_date)}</span>
            <p>{product.overview}</p>
          </div>
        </div>

    </div>
    );
}
 
export default ProductComponent;