import DashLanding from '../dash-landing/dash_landing';
import DashSlider from '../dash_slider/dash_slider';
import TrendingSection from '../trending/trending';
import styles from './dashboard.module.scss'

const Dashboard = ({trending, nowPlaying}) => {
    return ( 
        <div className={styles.dash}>
            <div className={styles.dash_left}>
                <TrendingSection trending={trending.results}/>
            </div>

            <div className={styles.dash_right}>
                <DashLanding cover={trending.results[6]}/>
                <DashSlider data={nowPlaying}/>
                <DashSlider data={nowPlaying}/>
                <DashSlider data={nowPlaying}/>
            </div>
        </div>
    );
}
 
export default Dashboard;