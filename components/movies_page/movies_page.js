import GlassCard from '../glass-card/glass_card';
import styles from './movies.module.scss'


const MoviePage = ({movies}) => {
    return ( 
        <div className={styles.movie}>
        {movies.results.map((movie, index) => (
            <GlassCard key={index} details={movie} />
        ))}
            {/* <GlassCard details={movies.results}/> */}
        </div>
    );
}


 
export default MoviePage;