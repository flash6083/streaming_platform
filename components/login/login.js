import {useEffect, useState} from 'react'
import { useRouter } from 'next/router'

import styles from './login.module.scss'


const Login = () => {

    const router = useRouter()

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [hidden, setHidden] = useState(true)

    const handleEmail = (event) => {
        const {value} = event.target
        setEmail(value)  
    }

    const handlePass = (event) => {
        const {value} = event.target
        setPassword(value)
    }

    const handleClick = () => {
        router.push('/dashboard')
    }


    return ( 
        <div className={styles.login_bg} >
            <img src="/Main-min.jpg" alt="login-cover" />
            <div className={styles.login_text}>
                <h1>MOTION</h1>
                <p>Unlimited Movies and TV shows <br/> Anywhere, anytime!</p>
            </div>
            <div className={styles.card}>
                <input className={styles.form_input}
                type='email' placeholder='Email' onChange={handleEmail} required />

                <input className={styles.form_input}
                type={hidden ? "password" : "text"} 
                placeholder='Password' onChange={handlePass} required />    

                <label className={styles.pass}>
                    <input type="checkbox" onClick={() => setHidden(!hidden)}/>
                         <span>Show Password</span>
                </label>

                <div className={styles.btns}>
                    <span className={styles.login_btn} onClick={handleClick}>
                        <p>Login</p>
                    </span>
                    <span className={styles.sign_up} onClick={handleClick}>
                        <p>Sign Up</p>
                    </span>
                </div>
            </div>
            
        </div>
    );
}
 
export default Login;