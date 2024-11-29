import {Link,Outlet} from "react-router-dom";
const AdminDashboard=()=>{
    return(
        <>
        <div id="adminHeader">

       
        <h1> welcome to Dashbord</h1>
        </div>

        <div id="adminData">
            <div id="adminMenu">
                <Link to="insertpro" className="menucolor">Insert product</Link>
            
            </div>
            
            <div id="adminContent">
<Outlet/>
            </div>
        </div>
        </>
    )
}
export default AdminDashboard;