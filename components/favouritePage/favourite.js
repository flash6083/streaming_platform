import { useContext, useEffect } from 'react';
import Link from 'next/link';
import GlassCard from '../glass-card/glass_card';
import AppContext from '../AppContext';
import styles from './favourite.module.scss'

const Favourite = () => {

    const context = useContext(AppContext)

    useEffect(() => {
        
    }, [context]);

    return ( 
        <div className={styles.fav}>
            <h1>
                {context.nameContext.results.length > 0 ? 
                'Your favourites' : 'No favourites added'}
            </h1>
            <div className={styles.container}>
                {context.nameContext.results.length > 0 && 
                    context.nameContext.results.map((item, index) => (
                        <Link key={index} href={`/${item.id}${item.type}`}>
                        <GlassCard details={item} ht={22} wd={30} hf={1.3} sf={1} rf={1.3}/>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
}
 
export default Favourite;