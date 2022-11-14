import {HiOutlinePlay} from 'react-icons/hi'
import {FiStar} from 'react-icons/fi';

import imageUrl from '../../constants/imageUrl'

import styles from './glass_card.module.scss'

const GlassCard = ({details, ht, wd, hf, sf, rf}) => {

    return ( 
        <>
        <div className={styles.glass_card} style={{width:`${wd}vw`, height: `${ht}vw`}}>
            <img src={ wd===60 ? '/cover_pic.jpg' : `${imageUrl}${details.poster_path}`} alt='test'  />
            <div className={styles.glass_overlay}></div>
            <div className={styles.meta_details}>
                <div className={styles.meta_name}>
                    <span><HiOutlinePlay size={30} /></span>
                    <div className={styles.name}>
                        <p className={styles.heading} style={{fontSize:`${hf}vw`}}>
                            {details.original_title || details.original_name}
                        </p>
                        <p className={styles.sub_heading} style={{fontSize: `${sf}vw`}}> 
                            {details.release_date || details.first_air_date} 
                        </p>
                    </div>
                </div>
                <div className={styles.meta_rating}>
                    <span><FiStar size={10} /></span>
                    <p style={{fontSize: `${rf}vw`}}>
                        {details.vote_average? details.vote_average.toFixed(2) : 0}
                    </p>
                </div>
            </div>
        </div>
        </>
    );
}
 
export default GlassCard;