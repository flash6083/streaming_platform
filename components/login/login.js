import {useContext, useEffect, useState, React} from 'react'
import { useRouter } from 'next/router'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import AppContext from '../AppContext'
import axios from 'axios'
import styles from './login.module.scss'

const Login = () => {

    const context = useContext(AppContext)

    const router = useRouter()

    const [open, setOpen] = useState(false);
    const [username, setUserName] = useState()
    const [password, setPassword] = useState()
    const [hidden, setHidden] = useState(true)
    const [msg, setMsg] = useState('')

    useEffect(() => {
        if(context.nameContext.user){
            router.push("/dashboard")
        }
    }, []);

    const handleClickSnack = () => {
        setOpen(true);
      };
    
      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };

    const handleEmail = (event) => {
        const {value} = event.target
        setUserName(value) 
    }

    const handlePass = (event) => {
        const {value} = event.target
        setPassword(value)
    }

    const handleSignUp = async () => {
        const payload = {
            user: username,
            password: password
        }
        try{
            const {data} = await axios.post("https://streaming-platform-backend.onrender.com/users/reg", payload)
            console.log(data);
            if(data.result.acknowledged){
                setMsg("Account created!")
                handleClickSnack()
                context.setNameContext({
                    results:[],
                    user: data.user
                })
                router.push("/dashboard")
            }
        }catch(err){
            console.log(err);
            setMsg(err.response.data.err)
            handleClickSnack()
        }
    }

    const handleLogin = async () => {
        const payload = {
            user: username,
            password: password
        }
        try{
            const {data} = await axios.post("https://streaming-platform-backend.onrender.com/users/login", payload)
            if(data.msg === "Correct Password"){
                setMsg(data.msg)
                handleClickSnack()
                context.setNameContext({
                    results:[],
                    user: data.user
                })
                router.push("/dashboard")
            }
                     
        }catch(err){
            setMsg("Invalid login credentials, try again!")
            handleClickSnack()
        }
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
                type='text' placeholder='Username' onChange={handleEmail} required />

                <input className={styles.form_input}
                type={hidden ? "password" : "text"} 
                placeholder='Password' onChange={handlePass} required />    

                <label className={styles.pass}>
                    <input type="checkbox" onClick={() => setHidden(!hidden)}/>
                         <span>Show Password</span>
                </label>

                <div className={styles.btns}>
                    <span className={styles.login_btn} onClick={handleLogin}>
                        <p>Login</p>
                    </span>
                    <span className={styles.sign_up} onClick={handleSignUp}>
                        <p>Sign Up</p>
                    </span>
                </div>

                
            </div>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <MuiAlert elevation={6} variant="filled"
                onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    {msg}
                </MuiAlert>
            </Snackbar>
            
        </div>
    );
}
 
export default Login;