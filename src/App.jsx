import { useState } from 'react'

import './App.css'
import Head from './components/Head';
import Body from './components/Body';
import { Provider } from 'react-redux';
import store from './utils/store';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Wachpage from './components/Wachpage';
import Maincontainer from "./components/Maincontainer"
import Demo from './components/Demo';
import Demo2 from './components/Demo2';
const appRouter = createBrowserRouter([
  {
    path:"/",
  element:<Body/>,
  children:[
    {
      path:"/",
      element:<Maincontainer/>
    },
    {
      path:"/watch",
      element:<Wachpage/>
    },
    {
      path:"/demo",
      element:<><Demo/> <Demo2/></>
    }
  
    

  ]
}
]
);
// createBrowserRouter coms from react-router-dom.it takes array of paths
function App() {
  

  return (
    <Provider store={store}>
      <Head></Head>
      <RouterProvider router={appRouter}/>
      {/* here component changes as per thr routes */}
      
    </Provider>
  )
}

export default App;
