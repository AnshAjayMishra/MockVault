 import React from 'react'
 import video from '../images/video3.mp4'

// const HeroSection = () => {
//   return (
//     <>
    
//     {/* <div  className="circlePosition w-[590px] h-[400px] bg-gradient-to-r from-[#770996] via-[#80277a] to-[#ad20c3] rounded-full absolute z-10 left-0 right-0 mx-auto top-[50%] transform -translate-y-1/2 blur-[150px] mt-10 mr-6"></div>
//     <div  className="circlePosition w-[590px] h-[400px] bg-gradient-to-r from-[#770996] via-[#80277a] to-[#ad20c3] rounded-full absolute z-10 left-0 right-0 mx-auto top-[50%] transform -translate-y-1/2 blur-[150px] mt-10 ml-6"></div> */}
//     <div className='relative '>
//     <video src={video} autoPlay loop muted className='h-25 w-25 ml-10 '></video>
// {/* 
//     <div className='absolute inset-0 flex flex-col items-center justify-center text-white text-center'> */}
//     <h1 className=' text-6xl text-center mt-5 '>
//         MockVault Interview 
//         <br />Prep Website
//     </h1>
//     <p className='text-center mt-5 text-2xl text-gray-500'>MockVault Leveraging AI Bots for Interview Prep </p>
//     {/* </div> */}
    
// </div>
    

//     </>
//   )
// } 

const HeroSection = () => {
    return (
        
      <div className="relative bg-black py-24 px-8">
        {/* Hero Section Title and Button */}
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-4">
          MockVault Interview <br />
                Prep Website
          </h1>
          <p className="text-2xl text-gray-300 mb-6">
          MockVault Leveraging AI Bots for Interview Prep
          </p>
          <button className="bg-gray-950 text-white px-6 py-2 rounded-lg">
            1:1 Session
          </button>
        </div>
  
        {/* Video Section */}
        <div className="mt-12 flex justify-center">
          <video
            className="w-[500px] h-[auto] object-cover"
            autoPlay
            loop
            muted
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    );
  };
  
  export default HeroSection;
  