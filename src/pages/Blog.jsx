import React from 'react'
import NewsLetter from '../components/NewsLetter'
import Testimonial from '../components/Testimonial'
import Reading from '../components/Reading'

const Blog = () => {
  return (
    <div className='max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-10'>
      <span className='robot-font bg-[#283A61] px-3 py-1 mt-3 inline-block text-white text-center rounded font-bold'>
        Food Theory
      </span>

      <h1 className='merriweather-font mt-3 text-3xl sm:text-4xl md:text-[46px] font-bold'>
        What I Learned About Life and Food Backpacking Around Greece
      </h1>

      <p className='text-[#515151] merriweather-font text-sm sm:text-base mt-3'>
        Aug 1, 2021 • 7 min read
      </p>

      <div className='w-full mt-3'>
        <img
          src="/src/assets/Post-Thumbnail.png"
          alt="This is an image"
          className='w-full h-auto rounded'
        />
      </div>

      <div className='flex items-center gap-2 mt-3 text-sm sm:text-base'>
        <img src="/src/assets/image-3.png" alt="This is an image" className='w-8 h-8 object-cover rounded-full'/>
        <span>George Costanza</span>
      </div>

      <div className='roboto-font text-[#434343] text-base sm:text-lg md:text-xl'>
        <p className='font-semibold mt-10'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices dui diam arcu pharetra at laoreet pellentesque. Imperdiet sit ut ornare nulla risus id fames nascetur urna. Eros in neque tincidunt.
        </p>
        <p className='mt-10'>
          Vel leo proin facilisis metus sit ut cursus sagittis. Diam donec mus malesuada et ac vulputate. Aenean lacinia suspendisse et mattis adipiscing id dictum commodo nunc. Feugiat lorem cras ut cras enim neque, elit, facilisi habitasse. Facilisis faucibus nunc congue urna diam. Vitae, diam justo, massa, elit. In et nibh ut in diam tellus at tellus diam.
        </p>
      </div>

      <div className='bg-[#F5F5F5] border-[#DDDDDD] border-1 rounded py-6 sm:py-8 px-6 sm:px-8 mt-10 space-y-2'>
        <h2 className='merriweather-font font-bold text-xl sm:text-2xl'>
          In this article
        </h2>
        <ol className='merriweather-font text-[#303030] space-y-2 text-base sm:text-lg'>
          <li className='cursor-pointer hover:underline'>1. How to travel without spending a dime</li>
          <li className='cursor-pointer hover:underline'>2. Get the most out of your credit card reward points</li>
          <li className='cursor-pointer hover:underline'>3. Why you don't need more than 3 pieces of clothing</li>
        </ol>
      </div>

      <div className='roboto-font text-[#434343] text-base sm:text-lg md:text-xl'>
        <p className='mt-10'>
          Amet aliquet at a aliquam ac suspendisse euismod. Lectus sit in ut erat in. Et nulla a magna amet, amet. Sodales malesuada laoreet bibendum neque amet turpis non. Ac arcu lacus turpis elementum imperdiet. Euismod purus, libero scelerisque vitae, libero fermentum urna, nunc.
        </p>
      </div>

      <div>
        <h2 className='merriweather-font font-semibold text-xl sm:text-2xl text-[#303030] mt-10'>
          How to travel without spending a dime
        </h2>

        <div className='roboto-font text-[#434343] text-base sm:text-lg md:text-xl'>
          <p className='mt-6'>
            Dignissim lacus sit congue lacus aliquam. Ut non fermentum vulputate donec enim sed ornare scelerisque. Sollicitudin orci leo egestas fermentum platea a imperdiet nisl. Velit placerat nibh nisl ut feugiat. Egestas id egestas nunc mattis. Sed mauris vitae commodo pharetra, vestibulum rhoncus natoque.
          </p>

          <p className='mt-6'>
            Leo id aliquet potenti enim sed maecenas sed ornare. Risus nam mauris etiam nibh maecenas nibh interdum mauris suspendisse. Volutpat, enim interdum facilisi mauris vitae id. Vel malesuada sit etiam dolor. Ullamcorper habitant vitae, nec pretium ullamcorper viverra integer praesent tincidunt. At erat sagittis tellus ultricies in a.
          </p>
        </div>
      </div>

      <div>
        <h2 className='merriweather-font font-semibold text-xl sm:text-2xl text-[#303030] mt-10'>
          Get the most out of your credit card reward points
        </h2>

        <div className='roboto-font text-[#434343] text-base sm:text-lg md:text-xl'>
          <p className='mt-6'>
            Massa, libero morbi morbi sed non sed. In et neque lectus ultricies leo eros. Auctor in elementum accumsan malesuada gravida neque cursus pellentesque nunc. Dui nullam odio neque varius massa praesent. Neque, porta vel, morbi nulla at tincidunt. Neque, et ultrices duis fermentum, tincidunt sem sed. Erat accumsan dui enim nisl morbi feugiat.
          </p>

          <p className='mt-6'>
            Ac eget lorem sit nulla sed fusce etiam. Elementum nibh in eu sed. Nibh non semper amet sit hac tristique orci. Quis velit vitae amet magnis nec in nunc. Amet vitae id cras nibh. Sed ipsum, lacinia in sit vitae. Duis luctus convallis risus purus sollicitudin purus id eu. Faucibus mattis eget ullamcorper eu suspendisse elit elit lacus purus. Tortor felis.
          </p>
        </div>
      </div>

      <div>
        <h2 className='merriweather-font font-semibold text-xl sm:text-2xl text-[#303030] mt-10'>
          Why you don't need more than 3 pieces of clothing
        </h2>

        <div className='roboto-font text-[#434343] text-base sm:text-lg md:text-xl'>
          <p className='mt-6'>
            Massa aenean cursus nulla urna dui, fermentum cursus in facilisis. Vulputate euismod vestibulum dolor in elementum quis quis. Erat proin in eget arcu tellus ut ultrices. Quis maecenas ullamcorper ante sit leo placerat. Quisque dictum laoreet eget quam leo tortor scelerisque sit nullam. Lacus, tortor, aenean mattis lobortis lacinia mauris. Viverra nulla.
          </p>

          <p className='mt-6'>
            Sed pellentesque quam lorem urna. Mauris donec molestie eget massa pellentesque facilisis netus mauris. Magna eget eget sollicitudin at faucibus odio. At augue sit nisi et metus cras dignissim vel, tortor. Maecenas molestie consequat cursus posuere ultrices facilisis hac bibendum semper. Sed lorem vel donec proin. Volutpat aliquet rhoncus sit et.
          </p>
        </div>
      </div>

      <Reading />
    </div>
  )
}

export default Blog
