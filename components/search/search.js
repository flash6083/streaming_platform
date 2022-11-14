import { useState } from 'react';
import Link from 'next/link';
import baseURL from '../../constants/tmdb_baseUrl';
import apiKey from '../../constants/tmdb_api_key';
import GlassCard from '../glass-card/glass_card';

import styles from './search.module.scss'

const Search = () => {
    const [search, setSearch] = useState()
    const [movies, setMovies] = useState()
    const [shows, setShows] = useState()

    const handleSearch = (event) => {
        const {value} = event.target
        setSearch(value)
    }

    const handleMovie = async () => {
        const val = search.replaceAll(' ','+')
        const res = await fetch(`${baseURL}/search/movie?api_key=${apiKey}&query=${val}`)
        const movie = await res.json()
        console.log(val)
        console.log(movie)
        setShows('')
        setMovies(movie)
    }

    const handleTV = async () => {
        const val = search.replaceAll(' ','+')
        const res = await fetch(`${baseURL}/search/movie?api_key=${apiKey}&query=${val}`)
        const tv = await res.json()
        console.log(val)
        console.log(tv)
        setMovies('')
        setShows(tv)
    }

    return ( 
        <div className={styles.search}>
            <div className={styles.search_container}>
                <input className={styles.search_input}
                    type='text' placeholder='Search' onChange={handleSearch} required />
                <span onClick={handleMovie}>Search Movie</span>
                <span onClick={handleTV}>Search TV Show</span>
            </div>
            <div className={styles.searched_items}>
                {movies ? movies.results.map((movie, index) => (
                    <Link key={index} href={`/${movie.id}mv`}>
                        <GlassCard details={movie} ht={22} wd={30} hf={1.3} sf={1} rf={1.3}/>
                    </Link>
                )) : (shows ? shows.results.map((show, index) => (
                    <Link key={index} href={`/${show.id}tv`}>
                        <GlassCard details={show} ht={22} wd={30} hf={1.3} sf={1} rf={1.3}/>
                    </Link>
                )): <h1>Nothing to show here</h1>)}
            </div>
        </div>
    );
}
 
export default Search;