import { createBrowserRouter} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Signup from "../pages/Signup/Signup";
import Login from "../pages/Login/Login";
import Dashboard from "../layout/Dashboard"
import AddTask from "../component/AddTask/AddTask";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        }
      ]
    },
    {
      path: "/dashboard",
      element: <Dashboard></Dashboard>,
      children: [
        {
            path: "addTask",
            element: <AddTask></AddTask>
        }
      ]
      
    },

    {
        path:"/signup",
        element: <Signup></Signup>
    },
    {
        path:"/login",
        element: <Login></Login>
    },
    
    

  ]);
  export default router;