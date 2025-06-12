"use client"

export default function Navbar() {
  return <nav className="fixed top-0 left-0 w-screen flex justify-center backdrop-blur-3xl z-50 bg-black/15">
    <div className="flex justify-between container py-3">
      <div className="flex items-center">
        <img src="/img/favicon.png" className="w-15 h-15 -ml-3.5" alt="" />
        <h4>Lucia.</h4>
      </div>

      <ul className="flex gap-10 items-center mr-1">
        <li className="nav-item"><a href="#project-section">Projects</a></li>
        <li className="nav-item"><a href="#technical-skill-section">Skills</a></li>
        <li className="nav-item"><a href="#achievement-section">Achivements</a></li>
        <li className="nav-item"><a href="#sertificate-section">Sertificates</a></li>
        <li className="nav-item"><a href="#contact-section">Contact</a></li>
      </ul>
    </div>
  </nav>
}

// export default function Navbar() {
//   const links = [
//     {
//       name: "About",
//       href: "/"
//     },
//     {
//       name: "Achivements",
//       href: "/"
//     },
//     {
//       name: "Sertificates",
//       href: "/"
//     },
//     {
//       name: "Educations",
//       href: "/"
//     },
//     {
//       name: "Projects",
//       href: "/"
//     },
//   ]

//   let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

//   return <nav className="fixed top-0 left-0 w-screen flex justify-center backdrop-blur-3xl z-40 bg-black/15">
//     <div className="flex justify-between container py-3">
//       <div className="flex items-center">
//         <img src="/img/favicon.png" className="w-15 h-15 -ml-3.5" alt="" />
//         <h4>Lucia.</h4>
//       </div>

//       <ul className="flex items-center">
//         {links.map((link, index) => {
//           return <li
//             className="nav-item relative px-10"
//             key={index}
//             onMouseEnter={() => setHoveredIndex(index)}
//             onMouseLeave={() => setHoveredIndex(null)}
//           >
//             <AnimatePresence>
//               {hoveredIndex === index && (
//                 <motion.span
//                   className="absolute inset-0 h-full w-full bg-neutral-200 block rounded-3xl"
//                   layoutId="hoverBackground"
//                   initial={{ opacity: 0 }}
//                   animate={{
//                     opacity: 1,
//                     transition: { duration: 0.15 },
//                   }}
//                   exit={{
//                     opacity: 0,
//                     transition: { duration: 0.15, delay: 0.2 },
//                   }}
//                 />
//               )}
//             </AnimatePresence>
//             <a
//               className="relative group block"
//               href={link.href}
//             // key={link.href}
//             >
//               {link.name}

//             </a>
//           </li>
//         })}
//       </ul>
//     </div>
//   </nav>
// }

