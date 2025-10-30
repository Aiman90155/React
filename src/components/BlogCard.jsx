import React, { useContext } from 'react'
import { AuthContext } from '../auth/AuthContext'

const BlogCard = () => {

    const {blogs} = useContext (AuthContext)

  return (
    <>
      {blogs.map((blog, index) => (
    <div>
        <div className='flex, justify-center flex-col gap-6 sm:w-[510px] w-[255px]' key={index}>
            <img src={blog.image} alt="This is an image" />
        </div>

        <div>
            <span className='robot-font bg-[#283A61] px-6 py-2 mt-3 inline-block text-white text-center rounded font-bold'>{blog.subHeading}</span>
            <h3 className='merriweather-font font-bold text-2xl mt-7'>{blog.heading}</h3>
            <span className='merriweather-font text-sm text-[#515151]'>Jun 21, 2021 • 11 min read</span>
            <p className='sm:w-[510px] w-[255px] text-md roboto-font text-[#434343] mt-4'>{blog.description}</p>
        </div>

        <div className='flex items-center gap-2 mt-10'>
            <img src={image3} alt="This is an image" />
            <span>{blog.author}</span>
        </div>
        
    </div>
    ))
    }
    </>
  )
}

export default BlogCard