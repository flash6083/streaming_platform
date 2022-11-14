import Link from 'next/link';
import GlassCard from '../glass-card/glass_card';
import SelectCompo from '../select_option/selectCompo';
import styles from './movies.module.scss'


const MoviePage = ({movies}) => {
    return ( 
        <div className={styles.wrapper}>
            <div className={styles.select}>
                <SelectCompo/>
            </div>
            <div className={styles.movie}>
                {movies.results.map((movie, index) => (
                    <Link key={index} href={`/${movie.id}mv`}>
                    <GlassCard details={movie} ht={22} wd={30} hf={1.3} sf={1} rf={1.3}/>
                    </Link>
                ))}
            </div>
        </div>
        
    );
}


 
export default MoviePage;