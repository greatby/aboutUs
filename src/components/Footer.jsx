// export default function Footer () {
//     return(
//         <footer className="w-full bg-gray-900 text-white py-12 mt-20">
//         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
//           <div>
//             <h2 className="text-xl font-bold mb-4">Company</h2>
//             <ul className="space-y-2">
//               <li><a href="#" className="hover:underline">About Us</a></li>
//               <li><a href="#" className="hover:underline">Careers</a></li>
//               <li><a href="#" className="hover:underline">Blog</a></li>
//               <li><a href="#" className="hover:underline">Contact</a></li>
//             </ul>
//           </div>
//           <div>
//             <h2 className="text-xl font-bold mb-4">Product</h2>
//             <ul className="space-y-2">
//               <li><a href="#" className="hover:underline">Features</a></li>
//               <li><a href="#" className="hover:underline">Pricing</a></li>
//               <li><a href="#" className="hover:underline">Integrations</a></li>
//               <li><a href="#" className="hover:underline">API</a></li>
//             </ul>
//           </div>
//           <div>
//             <h2 className="text-xl font-bold mb-4">Resources</h2>
//             <ul className="space-y-2">
//               <li><a href="#" className="hover:underline">Help Center</a></li>
//               <li><a href="#" className="hover:underline">Community</a></li>
//               <li><a href="#" className="hover:underline">Guides</a></li>
//               <li><a href="#" className="hover:underline">Events</a></li>
//             </ul>
//           </div>
//           <div>
//             <h2 className="text-xl font-bold mb-4">Legal</h2>
//             <ul className="space-y-2">
//               <li><a href="#" className="hover:underline">Privacy Policy</a></li>
//               <li><a href="#" className="hover:underline">Terms of Service</a></li>
//               <li><a href="#" className="hover:underline">Security</a></li>
//             </ul>
//           </div>
//         </div>
//         <div className="mt-12 text-center text-gray-400 text-sm">
//           © {new Date().getFullYear()} Payroll. All rights reserved.
//         </div>
//       </footer>
//     )
// }

// // import {
// //   FaTwitter,
// //   FaDiscord,
// //   FaGithub,
// //   FaYoutube,
// //   FaGlobe
// // } from 'react-icons/fa'

// // export default function Footer() {
// //   return (
// //     <footer className="relative z-10 w-full px-6 md:px-20 pb-12">
// //       <div className="max-w-7xl mx-auto rounded-xl bg-white/10 backdrop-blur-md text-white shadow-xl px-6 py-10 md:py-12">
// //         <div className="flex flex-col md:flex-row md:justify-between gap-10">
// //           {/* Brand Section */}
// //           <div className="md:w-1/4">
// //             <h2 className="text-lg font-semibold mb-2">🌙 ASTRIA</h2>
// //             <p className="text-sm text-gray-300">
// //               Astria brings high quality knowledge about the world and beyond the planet – free for everyone.
// //             </p>
// //             <p className="mt-4 text-xs text-gray-400">Designed by @GotinGeorgiG</p>
// //           </div>

// //           {/* Link Sections */}
// //           <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 text-sm">
// //             <div>
// //               <h3 className="font-semibold text-white mb-2">Explore</h3>
// //               <ul className="space-y-1 text-gray-300">
// //                 <li>Sessions & Practices</li>
// //                 <li>Articles & Insights</li>
// //                 <li>Community</li>
// //                 <li>Tools & Resources</li>
// //                 <li>Upcoming Features</li>
// //               </ul>
// //             </div>
// //             <div>
// //               <h3 className="font-semibold text-white mb-2">About Project</h3>
// //               <ul className="space-y-1 text-gray-300">
// //                 <li>Our Story</li>
// //                 <li>Meet the Team</li>
// //                 <li>Press & Media</li>
// //                 <li>Careers</li>
// //               </ul>
// //             </div>
// //             <div>
// //               <h3 className="font-semibold text-white mb-2">Support</h3>
// //               <ul className="space-y-1 text-gray-300">
// //                 <li>Contact Us</li>
// //                 <li>Privacy Policy</li>
// //                 <li>Terms of Service</li>
// //                 <li>Report an Issue</li>
// //               </ul>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Bottom Social Row */}
// //         <div className="mt-10 flex justify-between items-center border-t border-white/20 pt-6 text-sm text-gray-300">
// //           <p>Our Story Continues:</p>
// //           <div className="flex gap-4 text-xl text-white">
// //             <FaGlobe className="hover:text-blue-400 transition" />
// //             <FaTwitter className="hover:text-blue-400 transition" />
// //             <FaDiscord className="hover:text-indigo-400 transition" />
// //             <FaGithub className="hover:text-gray-300 transition" />
// //             <FaYoutube className="hover:text-red-400 transition" />
// //           </div>
// //         </div>
// //       </div>
// //     </footer>
// //   )
// // }


import {
  FaInstagram, FaTiktok, FaTwitter, FaDiscord,
  FaLinkedin, FaReddit, FaYoutube, FaEnvelope
} from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    { icon: FaEnvelope, href: "mailto:hello@windsurf.com", label: "Mail" },
    { icon: FaInstagram, href: "https://www.instagram.com/windsurf_ai/", label: "Instagram" },
    { icon: FaTiktok, href: "https://www.tiktok.com/@windsurf", label: "TikTok" },
    { icon: FaTwitter, href: "https://x.com/windsurf_ai", label: "Twitter" },
    { icon: FaDiscord, href: "https://discord.gg/GjCYNGChrw", label: "Discord" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/company/windsurf/", label: "LinkedIn" },
    { icon: FaReddit, href: "https://reddit.com/r/windsurf", label: "Reddit" },
    { icon: FaYoutube, href: "https://www.youtube.com/@windsurf_ai", label: "YouTube" },
  ];

  const footerColumns = [
    {
      heading: "Product",
      links: [
        { label: "Editor", href: "/editor" },
        { label: "Plugins", href: "/plugins" },
        { label: "Windsurf Reviews", href: "/reviews" },
        { label: "Pricing", href: "/pricing" },
        { label: "Windsurf for Enterprise", href: "/enterprise" },
      ],
    },
    {
      heading: "Capabilities",
      links: [
        { label: "Cascade", href: "/cascade" },
        { label: "Tab", href: "/tab" },
        { label: "JetBrains Plugin", href: "/plugins/jetbrains" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Blog", href: "/blog" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/contact" },
        { label: "Partnerships", href: "/partnerships" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Privacy Policy", href: "/privacy" },
      ],
    },
    {
      heading: "Resources",
      links: [
        { label: "Docs", href: "/docs" },
        { label: "Changelog", href: "/changelog" },
        { label: "Releases", href: "/releases" },
        { label: "Support", href: "/support" },
        { label: "Feature Requests", href: "/features" },
        { label: "University", href: "/university" },
      ],
    },
    {
      heading: "Connect",
      links: [
        { label: "Contact", href: "/contact" },
        { label: "Events", href: "/events" },
        { label: "Hackathons", href: "/hackathons" },
        { label: "Community", href: "/community" },
        { label: "Students", href: "/students" },
      ],
    },
  ];

  return (
    <footer className="relative bg-[#011e3c] text-white">
      {/* Desktop wave background */}
      <img
        src="https://windsurf.com/static/images/footer/footer_wave_desktop.svg"
        alt="Footer wave"
        className="hidden md:block absolute bottom-0 left-1/2 -translate-x-1/2 w-[2000px] h-[350px] pointer-events-none select-none"
      />

      {/* Mobile wave background */}
      <img
        src="https://exafunction.github.io/public/images/website/mobile_footer_wave.png"
        alt="Footer mobile wave"
        className="md:hidden absolute inset-0 h-full w-full object-bottom object-contain"
      />

      <div className="relative z-10 px-6 pt-16 pb-8 max-w-7xl mx-auto">
        {/* Logo + Social */}
        <div className="lg:flex lg:justify-between lg:items-start mb-12">
          <div className="space-y-4 max-w-sm mb-10 lg:mb-0">
            <img
              src="/logo/windsurf-white-wordmark.svg"
              alt="Windsurf Logo"
              className="h-4"
            />
            <p className="text-sm text-white/60">Built to keep you in flow state.</p>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map(({ icon: Icon, href, label }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                  <Icon className="w-5 h-5 hover:opacity-80" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Link Columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {footerColumns.map((col, idx) => (
              <div key={idx}>
                <h4 className="text-sm font-semibold uppercase mb-3">{col.heading}</h4>
                <ul className="space-y-2 text-sm text-white/60">
                  {col.links.map((link, i) => (
                    <li key={i}>
                      <a href={link.href} className="hover:text-white transition-colors">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-6 flex flex-col sm:flex-row items-center justify-between text-sm text-white/60">
          <p>© 2025 Exafunction, Inc. All rights reserved.</p>
          <p>Windsurf Inc.</p>
        </div>
      </div>
    </footer>
  );
}
