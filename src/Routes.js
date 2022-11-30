import Home from "./Pages/Home/Home";
import UsersList from "./Pages/Users/UsersList";
import NewUser from "./Pages/NewUser/NewUser";
import Products from "./Pages/Products/Products";
import Product from "./Pages/Product/Product";
import Dashboard_Charts from "./Pages/Charts/Dashboard_Charts";
import EditUser from "./Pages/EditUser/EditUser";
import Staff_Charts from "./Pages/Charts/Staff_Charts";
import Sales from "./Pages/Sales/Sales";
import Trades from "./Pages/Trades/Trades";

const Routes = [
    {path:'/React-Dashboard-Admin/', element: <Home/>},
    {path:'/React-Dashboard-Admin/dashboard_charts', element: <Dashboard_Charts/>},
    {path:'/React-Dashboard-Admin/sales', element: <Sales/>},
    {path:'/React-Dashboard-Admin/users', element: <UsersList/>},
    {path:'/React-Dashboard-Admin/user/:userID', element: <EditUser/>},
    {path:'/React-Dashboard-Admin/newUser', element: <NewUser/>},
    {path:'/React-Dashboard-Admin/products', element: <Products/>},
    {path:'/React-Dashboard-Admin/product/:productID',element:<Product/>},
    {path:'/React-Dashboard-Admin/trades',element:<Trades/>},
    {path:'/React-Dashboard-Admin/staff_chart',element:<Staff_Charts/>}
   
]

export default Routes