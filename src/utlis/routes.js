import {createBrowserRouter} from 'react-router-dom'
import Blog from '../Components/Blog/Blog';
import ChartList from '../Components/ChartList/ChartList';
import Home from '../Components/Home/Home';
import Main from '../Components/Main/Main';
import Error from '../Components/Error/Error';
import TopicsCart from '../Components/TopicsCart/TopicsCart';


const router = createBrowserRouter([
    
  {
  path:'/',
  element:<Main></Main>,
  errorElement:<Error></Error> ,
  loader: () => fetch ('https://openapi.programming-hero.com/api/quiz'),
  children:[
    {
        path:'/',
        element:<Home></Home>,  
    },
    {
        path:'/home',
        element:<Home></Home>,  
    },
    {
        path:'/blog',
        element:<Blog></Blog>,  
    },
    {
        path:'/topicsCart',
        element:<TopicsCart></TopicsCart>,  
    }
  ]
  },
  
  ])

  export default router;