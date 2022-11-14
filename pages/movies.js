import apiKey from '../constants/tmdb_api_key'
import baseURL from '../constants/tmdb_baseUrl';
import MoviePage from "../components/movies_page/movies_page";

export const getStaticProps = async () => {
  
    const res = await fetch(`${baseURL}discover/movie?api_key=${apiKey}`)
    const movies = await res.json()
  
    return {
      props: {
        movies
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