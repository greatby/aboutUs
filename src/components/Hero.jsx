import React from 'react'

const Hero = () => {
  return (
     <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 py-20 bg-white text-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
          Our mission is to make work{" "}
          <span className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent animate-gradient">
            meaningful
          </span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-700">
          Workforce is the #1{" "}
          <span className="text-black font-semibold">AI-powered</span> people
          platform that turns managers into leaders, employees into
          high-performers, and companies into the best places to work.
        </p>
      </div>
    </section>
  )
}

export default Hero
