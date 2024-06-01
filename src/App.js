import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
const App =()=> {
  
  const[progress,setProgress]=useState(0);
  

  
    const router = createBrowserRouter([
      {
        path: "/",
        element: <><LoadingBar color='#f11946' progress={progress}/><Navbar /><News setProgress={setProgress} key="general" pagesize={6} country={"in"} category="general" /></>,
      },
      {
        path: "/business",
        element: <><LoadingBar color='#f11946' progress={progress}/><Navbar /><News setProgress={setProgress} key="business" pagesize={6} country="in" category="business" /></>,
      },
      {
        path: "/entertainment",
        element: <><LoadingBar color='#f11946' progress={progress}/><Navbar /><News setProgress={setProgress} key="entertainment" pagesize={6} country="in" category="entertainment" /></>,
      },
      {
        path: "/health",
        element: <><LoadingBar color='#f11946' progress={progress}/><Navbar /><News setProgress={setProgress} key="health" pagesize={6} country="in" category="health" /></>,
      },

      {
        path: "/science",
        element: <><LoadingBar color='#f11946' progress={progress}/><Navbar /><News setProgress={setProgress}  key="science" pagesize={6} country="in" category="science" /></>,
      },
      {
        path: "/sports",
        element: <><LoadingBar color='#f11946' progress={progress}/><Navbar /><News setProgress={setProgress} key="sports" pagesize={6} country="in" category="sports" /></>,
      },

      {
        path: "/technology",
        element: <><LoadingBar color='#f11946' progress={progress}/><Navbar /><News setProgress={setProgress} key="technology" pagesize={6} country="in" category="technology" /></>,
      },
    ]);

    return (
      <>
      
        <RouterProvider router={router} />
      </>
    )
  }

  export default App;
