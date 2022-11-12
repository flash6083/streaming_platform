import GlassCard from '../glass-card/glass_card';
import styles from './trending.module.scss'

const TrendingSection = ({trending}) => {
    return ( 
        <div className={styles.trend}>
            <p>Trending</p>
            <div className={styles.list}>
                {
                    trending.map((trend, index) => (
                        <GlassCard key={index} 
                        details={trend} ht={17.6} wd={24} hf={1.2} sf={0.8}
                        rf={0.9}
                        />
                    ))
                }
            </div>
        </div>
    );
}
 
export default TrendingSection;