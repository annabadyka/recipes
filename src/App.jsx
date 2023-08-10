import {
  About, 
  Root,
  Home,
  SinglePage, 
  Error} 
  from './pages';
import './index.css';

import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
 

const queryClient = new QueryClient({//time the query is persistent, cache
  defaultOptions :{
    queries: {
      staleTime: 1000 * 60 * 6,//5min
    },
  },
});


import {loader as landingLoader} from './pages/Home';
import {loader as singlePageLoader} from './pages/SinglePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>, 
    errorElement: <Error/>, 
    children:[
      {
        index:true,
        element: <Home/>,
        loader: landingLoader(queryClient),
      },
      {
        path: 'single/:id', 
        errorElement: <Error/>,
        element: <SinglePage/>,
        loader: singlePageLoader(queryClient),
      }, 
      {
        path: '/about',
        element: <About/>
      },
    ]
  }  
  
]);

const App =() =>{
    return (
        <QueryClientProvider client = {queryClient}>
        <RouterProvider router = {router}/>
        <ReactQueryDevtools initialIsOpen = {false}/>
      </QueryClientProvider>
    );
};

export default App;