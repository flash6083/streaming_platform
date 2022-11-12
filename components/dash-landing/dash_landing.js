import GlassCard from '../glass-card/glass_card';
import styles from './dash_landing.module.scss'

const DashLanding = ({cover}) => {
    return ( 
        <div className={styles.landing}>
            <GlassCard details={cover} ht={18} wd={60} hf={1.5} sf={1} rf={1.2}/>
        </div>
    );
}
 
export default DashLanding;