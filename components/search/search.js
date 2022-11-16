import { useState, useEffect } from 'react';
import Link from 'next/link';
import baseURL from '../../constants/tmdb_baseUrl';
import apiKey from '../../constants/tmdb_api_key';
import GlassCard from '../glass-card/glass_card';

import styles from './search.module.scss'

const Search = () => {
    const [search, setSearch] = useState('')
    const [movies, setMovies] = useState({results: []})
    const [shows, setShows] = useState({results: []})
    const [listening, setListening] = useState(false)
    const [ftrans, setFtrans] = useState()


    const handleSearch = (event) => {
        const {value} = event.target
        setSearch(value)
    }

    const handleMovie = async () => {
        const val = search.replaceAll(' ','+')
        const res = await fetch(`${baseURL}/search/movie?api_key=${apiKey}&query=${val}`)
        const movie = await res.json()
        setShows({results:[]})
        setMovies(movie)
    }

    const handleTV = async () => {
        const val = search.replaceAll(' ','+')
        const res = await fetch(`${baseURL}/search/tv?api_key=${apiKey}&query=${val}`)
        const tv = await res.json()
        setMovies({results:[]})
        setShows(tv)
    }
    

    const handleVoice1 = () => {
        setListening(!listening)
    }

    const handleVoiceSearch = async () => {

        const val = ftrans ? ftrans.replaceAll(' ','+') : search.replaceAll(' ','+')
        const res = await fetch(`${baseURL}/search/movie?api_key=${apiKey}&query=${val}`)
        const product = await res.json()

        setShows({results:[]})
        setMovies(product)

    }

    useEffect(() => {

        var speechRecognition = new window.webkitSpeechRecognition();
        speechRecognition.continuous = true;
        speechRecognition.interimResults = true;
        
        let final_transcript = "";
        if(listening){
            
            speechRecognition.start();

            speechRecognition.onresult = (event) => {
                
                let interim_transcript = "";

                for (let i = event.resultIndex; i < event.results.length; ++i) {
                  
                  if (event.results[i].isFinal) {
                    final_transcript += event.results[i][0].transcript;
                  } else {
                    interim_transcript += event.results[i][0].transcript;
                  }
                }
                setSearch(interim_transcript)
                setFtrans(final_transcript)
              };

        }
        else{
            speechRecognition.stop();
            if(ftrans || search){
                handleVoiceSearch()
            }
        }
        
    }, [listening]);


    return ( 
        <div className={styles.search}>
            <div className={styles.search_container}>
                <input className={styles.search_input}
                    type='text' placeholder='Search' onChange={handleSearch} 
                    value={search} required   
                />
                <span onClick={handleMovie}>Search Movie</span>
                <span onClick={handleTV} style={{backgroundColor:'#3c1ae8'}}>
                Search TV Show</span>
                <span onClick={handleVoice1} style={{backgroundColor:'#2ba3ff'}}>
                {!listening ? 'Voice Search' : 'listening...'}</span>
            </div>
            <div className={styles.searched_items}>
                {movies.results.length > 0 ? movies.results.map((movie, index) => (
                    <Link key={index} href={`/${movie.id}mv`}>
                        <GlassCard details={movie} ht={22} wd={30} hf={1.3} sf={1} rf={1.3}/>
                    </Link>
                )) : (shows.results.length > 0 ? shows.results.map((show, index) => (
                    <Link key={index} href={`/${show.id}tv`}>
                        <GlassCard details={show} ht={22} wd={30} hf={1.3} sf={1} rf={1.3}/>
                    </Link>
                )): <h1>Nothing to show here</h1>)}
            </div>
        </div>
    );
}
 
export default Search;