import GlassCard from '../glass-card/glass_card';
import styles from './tv_page.module.scss'

const TvPage = ({shows}) => {
    return ( 
        <div className={styles.tv}>
            {shows.results.map((show, index) => (
                <GlassCard key={index} details={show} ht={22} wd={30} hf={1.3} sf={1} rf={1.3}/>
            ))}
        </div>
    );
}
 
export default TvPage;