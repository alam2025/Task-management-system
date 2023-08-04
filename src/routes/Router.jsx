import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import CreateTask from "../pages/CreateTask/CreateTask";

const router= createBrowserRouter([
      {
            path: '/',
            element:<Main/>,
            children:[
                  {
                        path:'/',
                        element:<Home/>
                  },
                  {
                        path:'create-task',
                        element:<CreateTask/>
                  }
            ]
      }
])

export default router