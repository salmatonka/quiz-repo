import {createBrowserRouter} from 'react-router-dom'
import Blog from '../Components/Blog/Blog';
import Quiz from '../Components/Quiz/Quiz'
import Home from '../Components/Home/Home';
import Main from '../Components/Main/Main';
import Error from '../Components/Error/Error';
import TopicsCart from '../Components/TopicsCart/TopicsCart';
import Recharts from '../Components/Recharts/Recharts';


const router = createBrowserRouter([
    
  {
  path:'/',
  element:<Main></Main>,
  errorElement:<Error></Error> ,
  loader: () => fetch ('https://openapi.programming-hero.com/api/quiz'),
  loader1: () => fetch (' https://openapi.programming-hero.com/api/quiz/1'),

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
        path:'/topicsCart',
        element:<TopicsCart></TopicsCart>,  
    },
    {
        path:'/quiz',
        
        element:<Quiz></Quiz>,  
    },
    {
        path:'/recharts',
        element:<Recharts></Recharts>,  
    },{
        path:'/blog',
        element:<Blog></Blog>,  
    }
  ]
  },
  
  ])

  export default router;