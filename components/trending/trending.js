import GlassCard from '../glass-card/glass_card';
import styles from './trending.module.scss'

const TrendingSection = ({trending}) => {
    return ( 
        <div className={styles.trend}>
            <p>Trending</p>
            <div className={styles.list}>
                {
                    trending.map((trend, index) => (
                        <GlassCard key={index} details={trend}/>
                    ))
                }
            </div>
        </div>
    );
}
 
export default TrendingSection;