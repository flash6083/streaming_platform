import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import GlassCard from '../glass-card/glass_card';
import ytUrl from '../../constants/youtubeUrl';
import {BsBookmarks} from 'react-icons/bs';
import {FiXSquare} from 'react-icons/fi';


import AppContext from '../AppContext';

import styles from './productPage.module.scss'


const ProductComponent = ({video, product}) => {
  const context = useContext(AppContext)
  const [dim, setDim] = useState({x:0,y:0})
  const [fav, setFav] = useState(false)

  const router = useRouter()
  const path = router.asPath.slice(-2)

  var trailer;

  if(video.results){

    trailer = video.results.find(item => {
      return item.name.includes("Official Trailer")
    })

    trailer = trailer ? trailer : video.results[0]
  }else{
    trailer=''
  }

  useEffect(() => {
    const width = window.innerWidth
    const height = window.innerHeight
    setDim({x:width ,y: height})

    context.nameContext.results.map((item) => {
      if(item.id === product.id && item.type === path)
        setFav(true)
    })

  }, [fav]);

  const handleAdd = () => {

    product["type"] = path
    context.nameContext.results.push(product)
    const temp = context.nameContext.results

    context.setNameContext({
      results: temp
    })
    setFav(true)
  }

  const handleRemove = () => {
    var index = context.nameContext.results.findIndex((item) => {
      return item.id === product.id && item.type === path
    })

    context.nameContext.results.splice(index,1)
    setFav(false)

  }

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
            {!fav ? <div className={styles.add_fav} onClick={handleAdd}>
                      <BsBookmarks size={dim.x/87} /> 
                      <span>Add to Favourites</span>
                    </div> 
                  : <div className={styles.add_fav} onClick={handleRemove}>
                      <FiXSquare size={dim.x/87} color='red' /> 
                      <span>Remove from Favourites</span>
                    </div> 
            }
            
            <p>{product.overview}</p>
          </div>
        </div>

    </div>
    );
}
 
export default ProductComponent;