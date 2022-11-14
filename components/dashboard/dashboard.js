import DashLanding from '../dash-landing/dash_landing';
import DashSlider from '../dash_slider/dash_slider';
import TrendingSection from '../trending/trending';
import styles from './dashboard.module.scss'

const Dashboard = ({trending, nowPlaying, tvAiring, topRatedTV, topRatedMovie}) => {
    return ( 
        <div className={styles.dash}>
            <div className={styles.dash_left}>
                <TrendingSection data={trending}/>
            </div>

            <div className={styles.dash_right}>
                <DashLanding />
                <DashSlider data={nowPlaying}/>
                <DashSlider data={tvAiring}/>
                <DashSlider data={topRatedTV}/>
                <DashSlider data={topRatedMovie}/>
            </div>
        </div>
    );
}
 
export default Dashboard;