import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import Link from 'next/link';
import {FiSearch} from 'react-icons/fi';



import styles from './navbar.module.scss'
import AppContext from "../AppContext";

const Navbar = () => {
    
    const [routeName, setRouteName] = useState('')
    const router = useRouter()
    const path = router.asPath
    const context = useContext(AppContext)

    const handleLogout = () => {
        context.setNameContext({
            results:[],
            user:''
        })
        router.push('/')
    }

    useEffect(() => {
        setRouteName(path)
    },[path])

    return ( 
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <Link href='/dashboard'>
                    <h1>MOTION</h1>
                </Link>
                
            </div>

            <div className={styles.links}>
                <Link href='/dashboard'>
                    <div className={routeName === '/dashboard' ? styles.link : styles.link_grey}>
                        Dashboard
                    </div>
                </Link>
                <Link href='/movies'>
                    <div className={routeName === '/movies' ? styles.link : styles.link_grey}>
                        Movies
                    </div>
                </Link>
                <Link href='/tv_shows'>
                    <div className={routeName === '/tv_shows' ? styles.link : styles.link_grey}>
                        TV shows
                    </div>
                </Link>
                <Link href='/favourites'>
                    <div className={routeName === '/favourites' ? styles.link : styles.link_grey}>
                        Favourites
                    </div>
                </Link>
                <Link href='/pricing'>
                    <div className={routeName === '/pricing' ? styles.link : styles.link_grey}>
                        Pricing
                    </div>
                </Link>
            </div>

            <div className={styles.search}>
                <div className={styles.search_content}>
                    <span className={styles.search_icon}>  
                        <Link href='/search'><FiSearch size={20}/></Link> 
                    </span>
                    <p>Welcome {context.nameContext.user}</p>
                    <p onClick={handleLogout} className={styles.logout}>Logout</p>
                </div>
            </div>
        </div>
    );
}
 
export default Navbar;