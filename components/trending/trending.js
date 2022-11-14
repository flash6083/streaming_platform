import Link from 'next/link';
import GlassCard from '../glass-card/glass_card';
import styles from './trending.module.scss'

const TrendingSection = ({data}) => {
    return ( 
        <div className={styles.trend}>
            <p>{data.displayName}</p>
            <div className={styles.list}>
                {
                    data.value.results.map((trend, index) => (
                        <Link key={index} href={`/${trend.id}${data.type}`}>
                            <GlassCard details={trend} 
                                ht={17.6} wd={24} hf={1.2} sf={0.8} rf={0.9}/>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
}
 
export default TrendingSection;