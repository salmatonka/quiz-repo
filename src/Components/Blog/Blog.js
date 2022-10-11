import React from 'react';

const Blog = () => {
    return (
        
        <div className=' py-10 '>
      <h1 className='text-center text-4xl text-sky-600'>Question:3</h1>

<div className='bg-sky-200 py-8 px-8 mx-8 my-8  border-solid border-2 border-gray-400 rounded-lg shadow-lg '><h3 className='text-3xl'>1. What is the propose of React Router ?</h3>

<p className='text-1xl py-3'>Ans: <span>ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</span></p>
</div>
<div className='bg-sky-200  py-8 px-8 mx-8 my-8 border-solid border-2 border-gray-400 rounded-lg shadow-lg'><h3 className='text-3xl'>2. How does context Api works ?</h3>

<p className='text-1xl py-3'>Ans: <span>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</span>
</p>
</div>
<div className='bg-sky-200 py-8 px-8 mx-8 my-8 border-solid border-2 border-gray-400 rounded-lg shadow-lg'><h3 className='text-3xl'>3. What is useHref hook ? </h3>

<p className='text-1xl py-3' >Ans: <span>The useHref hook returns a URL that may be used to link to the given to location, even outside of React Router. Tip: You may be interested in taking a look at the source for the "Link" component in react-router-dom to see how it uses useHref internally to determine its own href value.</span></p>
</div>




            
            </div>
      
    );
};

export default Blog;