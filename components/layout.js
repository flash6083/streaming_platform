import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import AppContext from "./AppContext";
import Navbar from "./navbar/navbar";

const Layout = ({children}) => {
    const [nameContext, setNameContext] = useState({results:[], user:''})
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
            <Head>
            <meta name="description" content="Digital Streaming Platform"/>
            <title>Motion</title>
            </Head>
            <AppContext.Provider value={{nameContext, setNameContext}}>
                {nav && <Navbar/>}
                {children}
            </AppContext.Provider>
        </>
    );
}
 
export default Layout;