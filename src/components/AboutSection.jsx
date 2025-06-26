export default function AboutSection() {
  return (
    <section className="relative z-20 overflow-hidden pb-20 pt-24 text-black bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-5">
        {/* Top Content */}
        <div className="flex max-w-xl flex-col items-center gap-8 text-center">
          <svg
            width="64"
            height="64"
            viewBox="0 0 512 297"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 h-16"
          >
            <path d="M507.28 0.142623H502.4C476.721 0.10263 455.882 20.899 455.882 46.5745V150.416C455.882 171.153 438.743 187.95 418.344 187.95C406.224 187.95 394.125 181.851 386.945 171.613L280.889 20.1391C272.089 7.56133 257.77 0.0626373 242.271 0.0626373C218.091 0.0626373 196.332 20.6191 196.332 45.9946V150.436C196.332 171.173 179.333 187.97 158.794 187.97C146.634 187.97 134.555 181.871 127.375 171.633L8.69966 2.12228C6.01976 -1.71705 0 0.182617 0 4.8618V95.426C0 100.005 1.39995 104.444 4.01984 108.204L120.815 274.995C127.715 284.853 137.895 292.172 149.634 294.831C179.013 301.51 206.052 278.894 206.052 250.079V145.697C206.052 124.961 222.851 108.164 243.59 108.164H243.65C256.15 108.164 267.87 114.263 275.049 124.501L381.125 275.955C389.945 288.552 403.524 296.031 419.724 296.031C444.443 296.031 465.622 275.455 465.622 250.099V145.677C465.622 124.941 482.421 108.144 503.16 108.144H507.3C509.9 108.144 512 106.044 512 103.445V4.8418C512 2.24226 509.9 0.142623 507.3 0.142623H507.28Z" />
          </svg>

          <p className="text-base md:text-lg text-pretty">
            Windsurf (formerly Codeium) has been developed by a team of researchers and engineers to build the future of software development.
          </p>
          <p className="text-base md:text-lg text-pretty">
            We realized that the combination of recent advances in generative models and our world-class optimized deep learning serving software could provide users with top quality AI-based products at the lowest possible costs (or ideally, free!).
          </p>
          <p className="text-base md:text-lg text-pretty">
            The result of that realization is <span className="font-semibold">Windsurf.</span>
          </p>
        </div>

        {/* CTA Box */}
        <div className="flex w-full flex-col gap-8 rounded-md bg-[#f9f3e9] p-6 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:p-10">
          <div className="flex flex-col gap-1 md:gap-0">
            <div className="text-xl font-semibold">Join Our Team</div>
            <div className="text-base text-black/60 sm:w-3/4 lg:w-full">
              We're always looking for talented people who share our vision.
            </div>
          </div>
          <a href="/careers" target="_blank" rel="noopener noreferrer">
            <button className="inline-flex items-center gap-3 rounded-[2px] bg-[#00f5d4] text-black hover:bg-[#5bf5de] px-4 py-2 text-base font-medium transition-colors">
              View Positions
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
