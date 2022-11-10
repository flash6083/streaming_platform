import Dashboard from "../components/dashboard/dashboard";
import apiKey from '../constants/tmdb_api_key'
import baseURL from '../constants/tmdb_baseUrl';


export const getStaticProps = async () => {

    const res = await fetch(`${baseURL}trending/all/week?api_key=${apiKey}`)
    const trending = await res.json()
  
    return {
      props: {
        trending,
      }
    }
}

const DashboardPage = ({trending}) => {
    console.log(trending);
    return ( 
        <div>
            <Dashboard trending={trending} />
        </div>
    );
}
 
export default DashboardPage;