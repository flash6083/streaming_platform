import GlassCard from '../glass-card/glass_card';
import styles from './dash_landing.module.scss'

const DashLanding = () => {
    return ( 
        <div className={styles.landing}>
            <GlassCard/>
        </div>
    );
}
 
export default DashLanding;