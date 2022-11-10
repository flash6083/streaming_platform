import GlassCard from '../glass-card/glass_card';
import styles from './trending.module.scss'

const TrendingSection = () => {
    return ( 
        <div className={styles.trend}>
            <p>Trending</p>
            <div className={styles.list}>
                <GlassCard/>
                <GlassCard/>
                <GlassCard/>
                <GlassCard/>
            </div>
        </div>
    );
}
 
export default TrendingSection;