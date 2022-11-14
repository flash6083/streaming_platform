import Link from 'next/link';
import GlassCard from '../glass-card/glass_card';
import styles from './dash_landing.module.scss'

const details = {
    "adult": false,
    "backdrop_path": "/mDfJG3LC3Dqb67AZ52x3Z0jU0uB.jpg",
    "genre_ids": [
        12,
        28,
        878
    ],
    "id": 299536,
    "original_language": "en",
    "original_title": "Avengers: Infinity War",
    "overview": "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
    "popularity": 505.258,
    "poster_path": "/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
    "release_date": "2018-04-25",
    "title": "Avengers: Infinity War",
    "video": false,
    "vote_average": 8.3,
    "vote_count": 25720
}

const DashLanding = () => {
    return ( 
        <div className={styles.landing}>
        <Link href={`/${details.id}mv`}>
            <GlassCard details={details} ht={18} wd={60} hf={1.5} sf={1} rf={1.2}/>
        </Link>   
        </div>
    );
}
 
export default DashLanding;