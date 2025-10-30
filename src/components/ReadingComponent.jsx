import React from 'react'
import BlogCard from './BlogCard'
import image1 from "../images/image-1.png"
import image2 from "../images/image-2.png"

const ReadingComponent = () => {
  return (
    <div className='flex overflow-x-hidden justify-center'>
      <div className='flex justify-evenly overflow-x-scroll sm:gap-6 gap-10 p-4 items-center mt-14 w-[84%] blog-card'>
        <BlogCard />
      </div>
    </div>
  )
}

export default ReadingComponent
