import TrendingSection from '../trending/trending';
import styles from './dashboard.module.scss'

const Dashboard = () => {
    return ( 
        <div className={styles.dash}>
            <div className={styles.dash_left}>
                <TrendingSection/>
            </div>

            <div className={styles.dash_right}>

            </div>
        </div>
    );
}
 
export default Dashboard;