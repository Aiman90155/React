import React from 'react'
import NewsLetter from './NewsLetter'
import Testimonial from './Testimonial'

const Reading = () => {
  return (
    <div className="px-4 sm:px-8">
      <h1 className='merriweather-font font-semibold text-[#303030] text-3xl sm:text-4xl mt-12 text-center sm:text-left'>
        Keep reading
      </h1>
        
      <div className='flex flex-col sm:flex-row items-start gap-4 mt-7'>
        <img
          src="/public/images/image-5.png"
          alt="This is an image"
          className='w-full sm:w-[250px] h-auto sm:h-[165.34px] object-cover rounded'
        />
        
        <div className='mt-3 sm:mt-0'>
          <h2 className='merriweather-font font-semibold text-xl sm:text-2xl text-[#303030] mt-1'>
            Why you don't need more than 3 pieces of clothing
          </h2>
        
          <p className='roboto-font text-base sm:text-lg text-[#4F4F4F] mt-2'>
            Et vitae, mollis euismod lobortis blandit amet sed amet. Amet ut amet nisl tortor arcu non id nulla mauris neque nisl magna.
          </p>
        </div>
      </div>

      <div className='flex flex-col sm:flex-row items-start gap-4 mt-7'>
        <img
          src="/public/images/image-6.png"
          alt="This is an image"
          className='w-full sm:w-[250px] h-auto sm:h-[165.34px] object-cover rounded'
        />
        
        <div className='mt-3 sm:mt-0'>
          <h2 className='merriweather-font font-semibold text-xl sm:text-2xl text-[#303030] mt-1'>
            Why you should cook with your family together everyday
          </h2>
        
          <p className='roboto-font text-base sm:text-lg text-[#4F4F4F] mt-2'>
            Rutrum aliquet eros semper nunc. In adipiscing augue sagittis, fermentum donec nunc lacinia. Risus in egestas in orci quam.
          </p>
        </div>
      </div>

      <div className='mt-10'>
        <Testimonial />
      </div>

      <div className='flex sm:flex-row flex-col justify-between sm:mt-20 mt-14 gap-10'>
        <NewsLetter />

        <div className='flex flex-col gap-5 max-w-full sm:max-w-[320px]'>
          <h4 className='roboto-font font-semibold text-sm'>POPULAR POSTS</h4>
          <p className='merriweather-font text-sm hover:underline cursor-pointer'>
            How To Have Your Cake and Eat It Too: The Way of The Chicken Man
          </p>
          <p className='merriweather-font text-sm hover:underline cursor-pointer'>
            My Grandma's 30-year-old Recipe
          </p>
          <p className='merriweather-font text-sm hover:underline cursor-pointer'>
            What I learned about cooking from Ratatoulie
          </p>
        </div>

        <div className='flex flex-col gap-5 max-w-full sm:max-w-[320px]'>
          <h4 className='roboto-font font-semibold text-sm'>RECENT POSTS</h4>
          <p className='merriweather-font text-sm hover:underline cursor-pointer'>
            How To Have Your Cake and Eat It Too: The Way of The Chicken Man
          </p>
          <p className='merriweather-font text-sm hover:underline cursor-pointer'>
            My Grandma's 30-year-old Recipe
          </p>
          <p className='merriweather-font text-sm hover:underline cursor-pointer'>
            What I learned about cooking from Ratatoulie
          </p>
        </div>
      </div>
    </div>
  )
}

export default Reading
