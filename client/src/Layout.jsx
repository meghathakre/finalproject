import { Outlet } from "react-router-dom"

import TopMenu from "./components/TopMenu"
import Header from "./components/Header";
import Footer from "./components/Footer";

const Layout=()=>{
    return(
        <>
    
    <Header/>
         <TopMenu/>
  
          <Outlet/>        

         <Footer/>
        </>
    )
}
export default Layout;