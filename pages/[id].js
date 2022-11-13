import apiKey from '../constants/tmdb_api_key'
import baseURL from '../constants/tmdb_baseUrl';
import lang from '../constants/language';
import ProductComponent from '../components/product/productPage';

var check=''

export const getServerSideProps = async (context) => {
    const id = context.params.id


    const res = await fetch(`${baseURL}/movie/${id}/videos?api_key=${apiKey}${lang}`)
    const video = await res.json()

    const res2 = await fetch(`${baseURL}/movie/${id}?api_key=${apiKey}${lang}`)
    const product = await res2.json()

    if(video.results!= undefined){
        if(video.results.length != 0){
            return{
                props:{
                    video: video,
                    product: product,
                    check
                }
            }
        }
        
    }

    else{
        const res = await fetch(`${baseURL}/tv/${id}/videos?api_key=${apiKey}${lang}`)
        const video = await res.json()

        const res2 = await fetch(`${baseURL}/tv/${id}?api_key=${apiKey}${lang}`)
        const product = await res2.json()

        return{
            props:{
                video: video,
                product: product,
                check
            }
        }
    }

   
}

const product = ({video, product, check}) => {
    console.log(check);
    return(
        <ProductComponent video={video} product={product} />
    )
}

export default product;