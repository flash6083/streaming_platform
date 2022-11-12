import apiKey from '../constants/tmdb_api_key'
import baseURL from '../constants/tmdb_baseUrl';
import lang from '../constants/language';
import MoviePage from "../components/movies_page/movies_page";

export const getStaticProps = async () => {

    const res = await fetch(`${baseURL}movie/popular?api_key=${apiKey}${lang}&page=1`)
    const movies = await res.json()
  
    return {
      props: {
        movies,
      },
      revalidate: 7200
    }
}

const MoviesPage = ({movies}) => {
    return ( 
        <MoviePage movies={movies}/>
    );
}
 
export default MoviesPage;