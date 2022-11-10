import DashLanding from '../dash-landing/dash_landing';
import TrendingSection from '../trending/trending';
import styles from './dashboard.module.scss'

const Dashboard = ({trending}) => {
    return ( 
        <div className={styles.dash}>
            <div className={styles.dash_left}>
                <TrendingSection trending={trending.results}/>
            </div>

            <div className={styles.dash_right}>
                {/* <DashLanding/> */}
            </div>
        </div>
    );
}
 
export default Dashboard;