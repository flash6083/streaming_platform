import Dashboard from "../components/dashboard/dashboard";
import apiKey from '../constants/tmdb_api_key'
import baseURL from '../constants/tmdb_baseUrl';
import lang from "../constants/language";


export const getStaticProps = async () => {

    const res = await fetch(`${baseURL}trending/all/day?api_key=${apiKey}`)
    const trending = await res.json()

    const res2 = await fetch(`${baseURL}movie/now_playing?api_key=${apiKey}${lang}&page=1`)
    const nowPlaying = await res2.json()
  
    return {
      props: {
        trending,
        nowPlaying
      },
      revalidate: 36000
    }
}

const DashboardPage = ({trending, nowPlaying}) => {

    return ( 
        <div>
            <Dashboard trending={trending} nowPlaying={nowPlaying} />
        </div>
    );
}
 
export default DashboardPage;