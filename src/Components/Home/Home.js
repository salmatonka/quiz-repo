import React from 'react';

const Home = () => {
    return (   
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-24'>
    <div className='flex flex-col items-center justify-between lg:flex-row'>
      <div className='mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0'>
        <div className='max-w-xl mb-6 lg:mt-8'>
          
          <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
          Our quiz games   <br className='hidden md:block' /> put the {' '}
            <span className='inline-block text-blue-400'>fun into learning.</span>
          </h2>
          <p className='text-base text-gray-700 md:text-lg'>
          Your knowledge will be tested regarding a variety of subjects, including geography, cultures, and cartoons. Well-traveled players will love showcasing their map skills in every continent. Answer questions about international borders and capitals to score points and advance. If you get stuck, certain games allow hints and retries. The objective is always to earn a perfect score. Play again and again to achieve a 100% rating!

          </p>
        </div>
        <div className='flex flex-col items-center md:flex-row'>
          <a
            href='/books'
            className='inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-blue-400 hover:bg-blue-700 focus:shadow-outline focus:outline-none'
          >
            <span className='mr-3'> Learn More</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
</svg>
          </a>
        </div>
      </div>
      <div className='relative lg:w-1/2'>
        <div className='w-full lg:w-4/5 lg:ml-auto sm:h-96'>
        
        <img className='h-80 w-50' src="https://www.calculators.org/graphics/quiz-games.png" alt="" />

        </div>
      </div>
    </div>
  </div>   


            
            
    );
};

export default Home;