import FavouriteComponent from "../components/favourite/favouritePage";

import apiKey from '../constants/tmdb_api_key'
import baseURL from '../constants/tmdb_baseUrl';
import lang from "../constants/language";

// export const getStaticProps = async () => {

//     const res2 = await fetch(`${baseURL}movie/now_playing?api_key=${apiKey}${lang}&page=1`)
//     const nowPlaying = await res2.json()
  
//     return {
//       props: {
//         nowPlaying
//       },
//       revalidate: 36000
//     }
// }

const FavouritePage = () => {
    return ( 
        <div>
            <FavouriteComponent/>
        </div>
    );
}
 
export default FavouritePage;