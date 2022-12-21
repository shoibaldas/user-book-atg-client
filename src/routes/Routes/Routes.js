import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/Home/Home";
import UserDetails from "../../pages/UserDetails/UserDetails";

const routes = createBrowserRouter([
    { 
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/user-details-of/:id',
                element:<UserDetails></UserDetails>,
                loader: ({params})=> fetch(`https://602e7c2c4410730017c50b9d.mockapi.io/users/${params.id}`)
            }
        ]
    }
])

export default routes;