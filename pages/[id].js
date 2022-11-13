import apiKey from '../constants/tmdb_api_key'
import baseURL from '../constants/tmdb_baseUrl';
import lang from '../constants/language';
import ProductComponent from '../components/product/productPage';



export const getServerSideProps = async (context) => {
    const id = context.params.id
    const check = id.slice(-2)

    if(check === 'mv'){ 
        const res = await fetch(`${baseURL}/movie/${id}/videos?api_key=${apiKey}${lang}`)
        const video = await res.json()

        const res2 = await fetch(`${baseURL}/movie/${id}?api_key=${apiKey}${lang}`)
        const product = await res2.json()

        return{
            props:{
                video: video,
                product: product,
            }
        }
    }


    else if(check === 'tv'){
        const res = await fetch(`${baseURL}/tv/${id}/videos?api_key=${apiKey}${lang}`)
        const video = await res.json()

        const res2 = await fetch(`${baseURL}/tv/${id}?api_key=${apiKey}${lang}`)
        const product = await res2.json()

        return{
            props:{
                video: video,
                product: product,
            }
        }
    }

   
}

const product = ({video, product}) => {
    return(
        <ProductComponent video={video} product={product} />
    )
}

export default product;