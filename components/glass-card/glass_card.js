import {HiOutlinePlay} from 'react-icons/hi'
import {FiStar} from 'react-icons/fi';

import styles from './glass_card.module.scss'

const GlassCard = () => {
    return ( 
        <>
        <div className={styles.glass_card}>
            <img src="/Main.jpg" alt='test'  />
            <div className={styles.glass_overlay}></div>
            <div className={styles.meta_details}>
                <div className={styles.meta_name}>
                    <span><HiOutlinePlay size={30} /></span>
                    <div className={styles.name}>
                        <p className={styles.heading}>The Gray Man</p>
                        <p className={styles.sub_heading}>Action/Adventure</p>
                    </div>
                </div>
                <div className={styles.meta_rating}>
                    <span><FiStar size={10} /></span>
                    <p>4.1</p>
                </div>
            </div>
        </div>
        </>
    );
}
 
export default GlassCard;