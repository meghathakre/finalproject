
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import AdminDashboard from "./admin/AdminDashboard";
import InsertProduct from "./admin/InsertProduct";
const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
   
<Route path="/" element={<Layout/>}>
<Route index element={<Home/>}/>
<Route path="home" element={<Home/>}/>

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