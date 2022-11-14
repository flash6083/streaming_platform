import Dashboard from "../components/dashboard/dashboard";
import apiKey from '../constants/tmdb_api_key'
import baseURL from '../constants/tmdb_baseUrl';
import lang from "../constants/language";


export const getStaticProps = async () => {

    const res = await fetch(`${baseURL}trending/movie/day?api_key=${apiKey}`)
    const trending = await res.json()

    const res2 = await fetch(`${baseURL}movie/now_playing?api_key=${apiKey}${lang}&page=1`)
    const nowPlaying = await res2.json()

    const res3 = await fetch(`${baseURL}tv/airing_today?api_key=${apiKey}${lang}&page=1`)
    const tvAiring = await res3.json()

    const res4 = await fetch(`${baseURL}tv/top_rated?api_key=${apiKey}${lang}&page=1`)
    const topRatedTV = await res4.json()

    const res5 = await fetch(`${baseURL}movie/top_rated?api_key=${apiKey}${lang}&page=1`)
    const topRatedMovie = await res5.json()
  
    return {
      props: {
        trending: {value: trending, type: 'mv', displayName: 'Trending'},
        nowPlaying: {value: nowPlaying, type: 'mv', displayName: 'Now Playing'},
        tvAiring: {value: tvAiring, type: 'tv', displayName: 'TV airing today'},
        topRatedTV: {value: topRatedTV, type: 'tv', displayName: 'Top rated TV shows'},
        topRatedMovie: {value: topRatedMovie, type: 'mv', displayName: 'Top rated movies'}
      },
      revalidate: 36000
    }
}

const DashboardPage = ({trending, nowPlaying, tvAiring, topRatedTV, topRatedMovie}) => {

    return ( 
        <div>
            <Dashboard 
              trending={trending} 
              nowPlaying={nowPlaying} 
              tvAiring={tvAiring} 
              topRatedTV = {topRatedTV}
              topRatedMovie = {topRatedMovie}
            />
        </div>
    );
}
 
export default DashboardPage;