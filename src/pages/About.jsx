import React from "react";

const About = () => {
  return (
    
    <div className='max-w-6xl mx-auto px-6 py-16'>    
      <div className='text-center mb-12'>
        <h1 className=" merriweather-font text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          About Us
        </h1>
        <p className="roboto-font text-gray-600 max-w-2xl mx-auto text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nesciunt dolore, impedit sapiente vitae ex similique explicabo amet, perspiciatis sint accusantium rem nihil doloremque distinctio possimus optio autem reprehenderit architecto?
        </p>
      </div>

      
      <div className='flex flex-col md:flex-row items-center gap-10 mb-16'>
        <img
          src="/images/photo-1.jpg"
          alt="Team working"
          className="rounded-xl shadow-md w-full md:w-1/2 object-cover"
        />
        <div className="w-full md:w-1/2">
          <h2 className=" merriweather-font text-2xl font-semibold text-gray-800 mb-4">
            Our Story
          </h2>
          <p className=" roboto-font text-gray-600 leading-relaxed mb-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt rerum odit temporibus quia deleniti assumenda dolores, tempore eius totam eaque ullam, pariatur in voluptates illo modi ipsam facere quasi. Sit distinctio asperiores provident minima vel libero ex laborum totam eum sed quisquam ea quasi, vero ipsam sequi, aliquid, facere inventore id.
          </p>
          <p className="roboto-font text-gray-600 leading-relaxed">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis sint dolorum, sequi facilis impedit beatae ab quod quidem dolores?Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aut autem distinctio quisquam animi vero ratione et inventore molestias ad. Officia consectetur, consequatur natus quaerat consequuntur necessitatibus exercitationem dolorum sit.
          </p>
        </div>
      </div>

      
      <div className="grid md:grid-cols-2 gap-10 mb-16">
        <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm">
          <h3 className=" merriweather-font text-xl font-semibold text-gray-800 mb-3">Our Mission</h3>
          <p className="roboto-font text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, quod dolorum dolor ut in quas aliquid velit illo dignissimos reprehenderit eum explicabo quidem labore at. Impedit distinctio odit hic vero!
          </p>
        </div>

        <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm">
          <h3 className=" merriweather-font text-xl font-semibold text-gray-800 mb-3">Our Vision</h3>
          <p className="roboto-font text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque molestias impedit, possimus fugiat voluptatem beatae sunt! Repellat minima consectetur possimus quidem maxime optio, doloremque dolor in vel aperiam nemo error.
          </p>
        </div>
      </div>

     
      <div className="text-center mb-12">
  <h2 className="merriweather-font text-3xl font-semibold text-gray-800 mb-6">
    Meet Our Team
  </h2>

  <div className="merriweather-font grid sm:grid-cols-2 md:grid-cols-3 gap-8">
    <div className=" bg-white border border-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition">
      <img
        src="/images/Aiman.jpg"
        alt="Aiman"
        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
      />
      <h4 className=" font-semibold text-lg text-gray-800">Aiman</h4>
      <p className="text-gray-500 text-sm">Founder & Designer</p>
    </div>

    <div className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition">
      <img
        src="/images/Eman.jpg"
        alt="Eman"
        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
      />
      <h4 className="font-semibold text-lg text-gray-800">Eman</h4>
      <p className="text-gray-500 text-sm">Frontend Developer</p>
    </div>

    <div className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition">
      <img
        src="/images/Abdullah.jpg"
        alt="Abdullah"
        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
      />
      <h4 className="font-semibold text-lg text-gray-800">Abdullah</h4>
      <p className="text-gray-500 text-sm">Frontend Developer</p>
    </div>

    
    <div className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition">
      <img
        src="/images/John.jpg"
        alt="John"
        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
      />
      <h4 className="font-semibold text-lg text-gray-800">John</h4>
      <p className="text-gray-500 text-sm">Manager</p>
    </div>

    
    <div className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition">
      <img
        src="/images/Mac.jpg"
        alt="Mac"
        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
      />
      <h4 className="font-semibold text-lg text-gray-800">Mac</h4>
      <p className="text-gray-500 text-sm">Media Head</p>
    </div>

    <div className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition">
      <img
        src="/images/Moaaz.jpg"
        alt="Moaaz"
        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
      />
      <h4 className="font-semibold text-lg text-gray-800">Moaaz</h4>
      <p className="text-gray-500 text-sm">Content Strategist</p>
    </div>
  </div>
</div>


      <div className="text-center bg-blue-50 py-12 rounded-xl">
        <h3 className="Merriweather-font  text-2xl font-semibold text-gray-800 mb-3">
          Want to work with us?
        </h3>
        <p className="Merriweather-font text-gray-600 mb-6">
          Let's build something amazing together. Reach out and say hello!
        </p>
        <a
          href="/contact"
          className='bg-[#000638] rounded w-[99px] text-sm sm:text-base text-white font-bold text-center px-4 py-2 cursor-pointer'
        >
          Contact Us
        </a>
      </div>
    </div>
  )
}

export default About;
