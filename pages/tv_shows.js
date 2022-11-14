import apiKey from '../constants/tmdb_api_key'
import baseURL from '../constants/tmdb_baseUrl';
import lang from '../constants/language';
import TvPage from '../components/tv_page/tv_page';

export const getStaticProps = async () => {

    const res = await fetch(`${baseURL}discover/tv?api_key=${apiKey}`)
    const shows = await res.json()
  
    return {
      props: {
        shows,
      },
      revalidate: 7200
    }
}

const tvShowsPage = ({shows}) => {
    return ( 
        <TvPage shows={shows} />
    );
}
 
export default tvShowsPage;