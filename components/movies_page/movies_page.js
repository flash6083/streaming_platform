import GlassCard from '../glass-card/glass_card';
import styles from './movies.module.scss'


const MoviePage = ({movies}) => {
    return ( 
        <div className={styles.movie}>
        {movies.results.map((movie, index) => (
            <GlassCard key={index} details={movie} ht={22} wd={30} hf={1.3} sf={1} rf={1.3}/>
        ))}
            {/* <GlassCard details={movies.results}/> */}
        </div>
    );
}


 
export default MoviePage;