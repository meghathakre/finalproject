
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import AdminDashboard from "./admin/AdminDashboard";
import InsertProduct from "./admin/InsertProduct";
import CardData from "./pages/CradData";
import ProductDetail from "./pages/ProductDetail";
import Allproduct from "./pages/All product";

import Fragrance from "./pages/Fragrance";
import Hair from "./pages/Hair";
import Lipstick from "./pages/Lipstick";
import Makeup from "./pages/Makeup";
import Nails from "./pages/Nails";
import Search from "./pages/search";

const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
   
<Route path="/" element={<Layout/>}>
<Route index element={<Home/>}/>
<Route path="home" element={<Home/>}/>
<Route path="carddata" element={<CardData/>}/>
<Route path="prodetail/:proid" element={<ProductDetail/>}/>
<Route path="allproduct" element={<Allproduct/>}/>
<Route path="search" element={<Search/>}/>
<Route path="frag" element={<Fragrance/>}/>
<Route path="hair" element={<Hair/>}/>
<Route path="/lips" element={<Lipstick/>}/>
<Route path="makeup" element={<Makeup/>}/>
<Route path="nails" element={<Nails/>}/>

      </Route>
    </Routes>
    <Routes>
      <Route path="/admin" element={<AdminDashboard/>}>
      <Route path="insertpro" element={<InsertProduct/>}/>
      
      
      
          
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;