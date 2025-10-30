import React from "react";

const Contact = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
     
      <div className="text-center mb-12">
        <h1 className="merriweather-font text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Contact Us
        </h1>
        <p className="roboto-font text-gray-600 max-w-2xl mx-auto text-lg">
          We'd love to hear from you! Whether you have a question, feedback, or
          just want to say hello — feel free to reach out anytime.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="bg-white shadow-md border border-gray-100 rounded-xl p-8">
          <h2 className="merriweather-font text-2xl font-semibold text-gray-800 mb-6">
            Send us a message
          </h2>
          <form className="merriweather-font flex flex-col gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Write your message here..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-600 focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#000638] cursor-pointer text-white py-2 px-6 rounded-md transition font-medium w-fit"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="flex flex-col gap-6">
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
            <h3 className="merriweather-font text-xl font-semibold text-gray-800 mb-3">
              Get in touch
            </h3>
            <p className="roboto-font text-gray-600 mb-3">
              Have questions about our services or collaboration ideas? We’re
              always open to new conversations.
            </p>

            <div className="roboto-font space-y-2 text-gray-700">
              <p>
                📍 <strong>Address:</strong> 123 Innovation Street, Karachi,
                Pakistan
              </p>
              <p>
                📧 <strong>Email:</strong> hello@example.com
              </p>
              <p>
                📞 <strong>Phone:</strong> +92 300 1234567
              </p>
            </div>
          </div>

          <div className=" rounded-xl overflow-hidden shadow-md border border-gray-100">
            <iframe
              title="Google Map"
              className="w-full h-64"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28927.54487827341!2d67.03764829999999!3d24.928303599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e9939ac34a1%3A0x86952ab7e29c9d2d!2sKarachi%20Pakistan!5e0!3m2!1sen!2s!4v1709238714002!5m2!1sen!2s"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="text-center bg-blue-50 py-12 rounded-xl mt-16">
        <h3 className="merriweather-font text-2xl font-semibold text-gray-800 mb-3">
          Let's work together!
        </h3>
        <p className="roboto-font text-gray-600 mb-6">
          We're here to help bring your ideas to life. Drop us a message and
          we'll get back to you soon.
        </p>
        <a
          href="mailto:hello@example.com"
          className="bg-[#000638] text-white px-6 py-3 rounded-lg transition"
        >
          Email Us
        </a>
      </div>
    </div>
  );
};

export default Contact;
