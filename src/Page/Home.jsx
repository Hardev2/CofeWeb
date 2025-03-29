import React from 'react';
import { heroSection } from '../Components/Data/HomeData/';
import video1 from '../../public/Image/mp4.mp4';
import Package1 from '../../public/Image/package.png';
import image1 from '../../public/Image/homeImage.jpg';
import useFetch from '../Components/useFetch';
import Loader from '../Components/Loader/Loader';

export const Home = () => {
  return (
    <div className='pt-32 w-full'>
      <Hero />
      <ImageSection />
      <Product />
    </div>
  );
};

const Hero = () => {
  return (
    <div className=' px-8 lg:px-16  relative flex flex-col items-center justify-center w-full'>
      {heroSection.map((item, index) => (
        <div
          className=' relative flex flex-col items-center justify-center w-full'
          key={index}>
          <div className='mb-5'>
            <h1 className='font-custom font-thin text-2xl text-gray-500 select-none'>
              {item.subHeader}
            </h1>
          </div>
          <div className='mx-12 mb-5 text-center'>
            <h1 className='font-extrabold uppercase text-zinc-800 text-5xl lg:text-[8rem] select-none lg:leading-[108px]'>
              {item.header}
            </h1>
          </div>
          <div className='mb-5 text-center'>
            <p className='text-gray-800 w-full lg:w-[600px] font-bold'>
              {item.description}
            </p>
          </div>
          <div>
            <button className='border-[1px] border-solid border-black-Color px-8 py-2 hover:bg-black-Color hover:text-white-Color duration-700'>
              {item.button}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

const ImageSection = () => {
  return (
    <div className='w-full h-[50vh] lg:h-screen  px-8 lg:px-16 flex items-center justify-center mt-10 mb-10 lg:mb-20 lg:mt-20'>
      <div className='flex w-full lg:w-[75%] h-full gap-0'>
        <div className='w-[50%] h-full'>
          <img
            src={image1}
            alt='image'
            className='w-full h-[50vh] lg:h-full object-cover'
          />
        </div>
        <div className='w-[50%] h-full'>
          <video
            src={video1}
            autoPlay
            muted
            loop
            playsInline
            className='w-full h-[50vh]  lg:h-full object-cover'></video>
        </div>
      </div>
    </div>
  );
};

const Product = () => {
  const {
    data: products,
    isLoading,
    error,
  } = useFetch('https://api.sampleapis.com/coffee/hot');

  console.log('Products in component:', products);

  if (error) return <p className='text-red-500'>Error: {error}</p>;

  return (
    <div className='w-full bg-black-Color'>
      <div className='flex items-center justify-center flex-col px-5 pt-20 lg:pt-44 '>
        <h1 className='text-gray-300 font-custom font-thin text-xl'>
          We are multiple ranges,
        </h1>
        <h1 className='text-white uppercase font-extrabold text-5xl text-center mt-5 lg:text-6xl lg:w-[550px]'>
          Discover Your New Coffee Haven
        </h1>
      </div>
      <div className='w-full px-8 lg:px-16 py-10 h-auto grid   gap-4 lg:gap-0 grid-cols-2 lg:grid-cols-3 place-items-center'>
        {products && products.length > 0 ? (
          products.slice(0, 6).map((item) => (
            <div className='w-full' key={item.id}>
              {isLoading ? (
                <Loader />
              ) : (
                <>
                  <div
                    className='flex items-center justify-center   w-full h-[250px] lg:w-[390px] lg:h-[460px]'
                    style={{
                      background:
                        'linear-gradient(150deg, rgba(160,158,156,1) 0%, rgba(137,134,128,1) 22%, rgba(118,113,107,1) 47%, rgba(105,99,93,1) 73%, rgba(116,110,107,1) 83%, rgba(104,97,91,1) 92%, rgba(111,105,100,1) 100%)',
                    }}>
                    <div className='relative  w-[500px] h-[200px] flex items-center justify-center'>
                      <img
                        src={item.image}
                        alt=''
                        className='absolute w-[120px] h-[180px] lg:w-[280px] lg:h-[350px] transition-opacity duration-500 ease-out hover:opacity-0 rounded-md object-cover'
                      />
                      <img
                        src={Package1}
                        alt={item.title}
                        className=' w-[180px] h-[180px] lg:w-[300px] lg:h-[300px] object-cover '
                      />
                    </div>
                  </div>
                  <div className='my-5 lg:w-[390px]'>
                    <h3 className='text-[#decca8] mb-3 uppercase font-extrabold text-lg'>
                      {item.title}
                    </h3>
                    <div className='flex items-center justify-between'>
                      <p className='text-[#decca8] text-sm'>
                        {item.ingredients.join(', ')}
                      </p>
                      <p className='text-[#decca8] text-sm '>${item.price}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))
        ) : (
          <p className='text-white'>No products available.</p>
        )}
      </div>
    </div>
  );
};
