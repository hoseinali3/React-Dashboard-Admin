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
    {path:'/', element: <Home/>},
    {path:'/dashboard_charts', element: <Dashboard_Charts/>},
    {path:'/sales', element: <Sales/>},
    {path:'/users', element: <UsersList/>},
    {path:'/user/:userID', element: <EditUser/>},
    {path:'/newUser', element: <NewUser/>},
    {path:'/products', element: <Products/>},
    {path:'/product/:productID',element:<Product/>},
    {path:'/trades',element:<Trades/>},
    {path:'/staff_chart',element:<Staff_Charts/>}
   
]

export default Routes