import React from 'react'

const Testimonial = () => {
  return (
    <div className='bg-[#F5F5F5] border-[#DDDDDD] border-1 rounded py-8 px-6 sm:px-8 mt-10 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 text-sm'>

      <img
        src="/src/assets/image-4.png"
        alt="This is me"
        className="w-full sm:w-auto max-w-[150px] h-auto object-cover rounded"
      />
         
      <div className="text-center sm:text-left">
        <h2 className='merriweather-font font-semibold text-xl sm:text-2xl mb-3 sm:mb-4'>
          Written by George Costanza
        </h2>
        <p className='roboto-font hover:underline text-base sm:text-lg'>
          Volutpat cursus id id tincidunt duis id. Urna curabitur ultrices molestie bibendum. Purus orci nisl, commodo ipsum, ut urna, elementum. Nunc potenti lectus in erat ligula cras. Eget.
        </p>
      </div>      
    </div>
  )
}

export default Testimonial
