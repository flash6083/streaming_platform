import {useEffect, useState} from 'react'

import styles from './login.module.scss'


const Login = () => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleEmail = (event) => {
        const {value} = event.target
        setEmail(value)  
    }

    const handlePass = (event) => {
        const {value} = event.target
        setPassword(value)
    }


    return ( 
        <div className={styles.login_bg} >
            <img src="/Main.jpg" alt="login-cover" />
            <div className={styles.login_text}>
                <h1>MOTION</h1>
                <p>Unlimited Movies and TV shows <br/> Anywhere, anytime!</p>
            </div>
            <div className={styles.card}>
                <input className={styles.form_input}
                type='email' placeholder='Email' onChange={handleEmail} required />

                <input className={styles.form_input}
                type='email' placeholder='Password' onChange={handlePass} required />

                <div className={styles.btns}>
                    <span className={styles.login_btn}><p>Login</p></span>
                    <span className={styles.sign_up}><p>Sign Up</p></span>
                </div>
            </div>
            
        </div>
    );
}
 
export default Login;