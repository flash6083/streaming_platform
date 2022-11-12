import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Navbar from "./navbar/navbar";

const Layout = ({children}) => {

    const [nav, setNav] = useState(true)
    const router = useRouter()
    const path = router.asPath

    useEffect(() => {
        if(path === '/')
            setNav(false)
        else
            setNav(true)
    },[path])

    return ( 
        <>
            {nav && <Navbar/>}
            {children}
        </>
    );
}
 
export default Layout;