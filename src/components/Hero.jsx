// import React from 'react'

// const Hero = () => {
//   return (
//      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 py-20 bg-white text-gray-900">
//       <div className="max-w-4xl mx-auto text-center">
//         <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
//           Our mission is to make work{" "}
//           <span className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent animate-gradient">
//             meaningful
//           </span>
//         </h1>
//         <p className="text-lg sm:text-xl md:text-2xl text-gray-700">
//           Workforce is the #1{" "}
//           <span className="text-black font-semibold">AI-powered</span> people
//           platform that turns managers into leaders, employees into
//           high-performers, and companies into the best places to work.
//         </p>
//       </div>
//     </section>
//   )
// }

// export default Hero

export default function MissionHero() {
  return (
    <section className="relative h-screen overflow-hidden bg-[#011e3c] py-20 text-white">
      {/* Background wave graphic */}
      <div
       style={{
          backgroundImage: `url("/images/about_hero_wave_outline.svg")`,
        }}
        aria-hidden="true"
        class="pointer-events-none absolute -left-1/2 right-0 top-0 z-[11] h-[1330px] w-[1150px] bg-contain !bg-right-top bg-no-repeat sm:-right-48 sm:left-auto sm:top-36 sm:h-[1220px] sm:w-[1055px] md:-right-32 lg:-right-16"
      ></div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-1/2 right-0 top-0 z-10 h-[1330px] w-[1150px] bg-contain !bg-right-top bg-no-repeat
                   sm:-right-48 sm:left-auto sm:top-36 sm:h-[1220px] sm:w-[1055px]
                   md:-right-32 lg:-right-16"
        style={{
          backgroundImage: `url("/images/about_hero_wave_gradient.svg")`,
        }}
      />

      {/* Main content */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center gap-16 px-5 text-center">
        <h1 className="text-4xl md:text-6xl font-semibold">Our Mission</h1>

        <div className="flex max-w-xl flex-col gap-8 text-base md:text-lg text-white/90">
          <p>
            Individuals have not hit the limits of their potential. Groups of
            individuals are even farther from their potential.
          </p>
          <p>
            Step by step, we do the hard work to deliver working products that
            empower everyone to continuously dream bigger, even in the most
            complex scenarios.
          </p>
          <p>
            We let every individual dream bigger. We let every organization
            dream bigger. We dream bigger.
          </p>
        </div>
      </div>
    </section>
  );
}
