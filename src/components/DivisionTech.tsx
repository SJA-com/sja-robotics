// ============================================================
// SJA TECH DIVISION — COMMENTED OUT (uncomment when needed)
// ============================================================

// import Link from "next/link";
//
// const detailedProducts = [
//   {
//     name: "Voice-Automated Weighing Scale",
//     slug: "weighing-scale",
//     fullForm: "Smart Health Monitoring",
//     description:
//       "A smart weighing scale that does more than just measure weight. When a user stands on the scale, it asks for their identity, records the data, and provides historical trends and personalized health feedback. This product integrates voice recognition and AI to give detailed insights.",
//     features: [
//       {
//         title: "Voice Identification",
//         detail: "Asks for user identity and records personalized data.",
//       },
//       {
//         title: "Weight Trends",
//         detail:
//           "Tracks last recorded weight and weight trends over time with historical analysis.",
//       },
//       {
//         title: "Smart Reminders",
//         detail:
//           "Provides reminders for regular weigh-ins to maintain consistency.",
//       },
//       {
//         title: "Health App Connectivity",
//         detail:
//           "Connects with health apps to track fitness goals and offer personalized health advice.",
//       },
//     ],
//     icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3",
//     badge: "In Development",
//   },
//   {
//     name: "AI-Driven Doorbell",
//     slug: "smart-bell",
//     fullForm: "Intelligent Doorbell System",
//     description:
//       "A doorbell that interacts with visitors through AI technology. When pressed, it asks the visitor who they are, records the response, and sends a notification to the homeowner's mobile device.",
//     features: [
//       {
//         title: "Voice Interaction",
//         detail:
//           "The AI system engages with visitors, collects their details, and alerts the homeowner in real-time.",
//       },
//       {
//         title: "Mobile Connectivity",
//         detail:
//           "Instant notifications and two-way communication through the connected mobile app.",
//       },
//       {
//         title: "Security Features",
//         detail:
//           "Facial recognition, voice verification, and integration with home security systems.",
//       },
//     ],
//     icon: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
//     badge: "In Development",
//   },
//   {
//     name: "Smart Kitchen Appliances",
//     slug: "smart-kitchen",
//     fullForm: "AI-Powered Kitchen Suite",
//     description:
//       "Your smart home wouldn't be complete without appliances that understand your needs. SJA Robotics brings AI to the kitchen with devices that make cooking effortless.",
//     features: [
//       {
//         title: "Smart Fridge",
//         detail:
//           "Tracks food expiration dates, suggests recipes based on available ingredients, and can be controlled through voice commands.",
//       },
//       {
//         title: "Voice-Controlled Oven",
//         detail:
//           "Allows users to preheat, adjust temperatures, and start cooking just by speaking.",
//       },
//     ],
//     icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
//     badge: "In Development",
//   },
//   {
//     name: "Home Security & Monitoring",
//     slug: "home-security",
//     fullForm: "AI-Powered Protection",
//     description:
//       "AI-powered security systems designed to make homes safer and smarter. With voice commands and real-time alerts, these systems provide comprehensive monitoring, track entry and exit points, and recognize patterns to alert users of any unusual activity.",
//     features: [
//       {
//         title: "Voice-Controlled Security",
//         detail: "Manage your entire security system through voice commands.",
//       },
//       {
//         title: "Real-Time Alerts",
//         detail:
//           "Instant notifications for any detected activity or anomalies.",
//       },
//       {
//         title: "Pattern Recognition",
//         detail:
//           "AI recognizes behavioral patterns and alerts users of unusual activity.",
//       },
//       {
//         title: "Entry & Exit Tracking",
//         detail:
//           "Comprehensive monitoring of all entry and exit points in the home.",
//       },
//     ],
//     icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
//     badge: "In Development",
//   },
//   {
//     name: "Personal Health Monitoring",
//     slug: "health-monitoring",
//     fullForm: "AI Health Device Ecosystem",
//     description:
//       "Beyond the smart weighing scale, SJA Robotics is developing a series of health-monitoring devices that provide comprehensive health insights and sync with medical records to assist in medical care.",
//     features: [
//       {
//         title: "AI Blood Pressure Monitors",
//         detail: "Track readings and detect anomalies in real-time.",
//       },
//       {
//         title: "Sleep Trackers",
//         detail: "Monitor sleep patterns and offer advice for better rest.",
//       },
//       {
//         title: "Personal Health Assistants",
//         detail:
//           "AI-powered devices that provide feedback on vital statistics and trends.",
//       },
//       {
//         title: "Medical Record Sync",
//         detail:
//           "Syncs with health records to assist healthcare professionals in medical care.",
//       },
//     ],
//     icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
//     badge: "In Development",
//   },
// ];
//
// const upcomingProducts = [
//   {
//     name: "Laptops & Desktops",
//     description: "High-performance computing built for the AI era",
//     icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
//   },
//   {
//     name: "Smartphones & Tablets",
//     description: "AI-native mobile devices with deep ecosystem integration",
//     icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
//   },
//   {
//     name: "Smart Wearables",
//     description: "Wrist-worn health and productivity companions",
//     icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
//   },
//   {
//     name: "Accessories & Peripherals",
//     description: "Seamless add-ons that complete the SJA Tech ecosystem",
//     icon: "M13 10V3L4 14h7v7l9-11h-7z",
//   },
// ];
//
// export default function DivisionTech() {
//   return (
//     <section id="sja-tech" className="py-24 relative bg-datastream overflow-hidden">
//       {/* Background accents */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px]" />
//         <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-2/10 rounded-full blur-[100px]" />
//         <div className="absolute top-0 left-[15%] w-px h-full bg-gradient-to-b from-transparent via-accent/15 to-transparent" />
//         <div className="absolute top-0 left-[45%] w-px h-full bg-gradient-to-b from-transparent via-accent-2/15 to-transparent" />
//         <div className="absolute top-0 left-[75%] w-px h-full bg-gradient-to-b from-transparent via-accent-3/15 to-transparent" />
//       </div>
//
//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Division Header */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-mono mb-4 tracking-wider">
//             DIVISION 01
//           </div>
//           <h2 className="text-4xl sm:text-5xl font-bold mb-4">
//             SJA <span className="text-accent">Tech</span>
//           </h2>
//           <p className="text-accent/70 text-sm font-mono mb-4">
//             Consumer Electronics
//           </p>
//           <p className="text-foreground/60 max-w-2xl mx-auto">
//             Designing and manufacturing next-generation consumer electronics —
//             laptops, smartphones, tablets, and smart devices that seamlessly
//             integrate with the SJA ecosystem.
//           </p>
//         </div>
//
//         {/* Upcoming Hardware Products */}
//         <div className="mb-16">
//           <h3 className="text-xl font-bold mb-6 text-center">
//             Hardware <span className="text-accent">Lineup</span>
//           </h3>
//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
//             {upcomingProducts.map((product) => (
//               <div
//                 key={product.name}
//                 className="rounded-xl bg-surface border border-border p-5 hover:border-accent/30 transition-all"
//               >
//                 <div className="flex items-center justify-between mb-3">
//                   <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
//                     <svg
//                       className="w-5 h-5 text-accent"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={1.5}
//                         d={product.icon}
//                       />
//                     </svg>
//                   </div>
//                   <span className="px-2 py-0.5 rounded-full bg-accent/10 text-accent text-[10px] font-mono tracking-wider">
//                     COMING SOON
//                   </span>
//                 </div>
//                 <h4 className="text-sm font-bold mb-1">{product.name}</h4>
//                 <p className="text-foreground/50 text-xs leading-relaxed">
//                   {product.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//
//         {/* Smart Home & Health Products (detailed) */}
//         <div className="mb-12">
//           <h3 className="text-xl font-bold mb-6 text-center">
//             Smart Home & Health{" "}
//             <span className="text-accent">Devices</span>
//           </h3>
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {detailedProducts.map((product) => (
//               <div
//                 key={product.name}
//                 className="group rounded-xl bg-surface border border-border hover:border-accent/30 p-6 transition-all hover:bg-surface-2"
//               >
//                 <div className="flex items-center justify-between mb-4">
//                   <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-accent-2 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
//                     <svg
//                       className="w-6 h-6 text-white"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={1.5}
//                         d={product.icon}
//                       />
//                     </svg>
//                   </div>
//                   <span className="px-2.5 py-0.5 rounded-full bg-amber-400/10 text-amber-400 text-[10px] font-mono tracking-wider">
//                     IN DEVELOPMENT
//                   </span>
//                 </div>
//                 <h4 className="text-lg font-bold mb-1">{product.name}</h4>
//                 <p className="text-accent/60 text-xs font-mono mb-3">
//                   {product.fullForm}
//                 </p>
//                 <p className="text-foreground/60 text-sm leading-relaxed mb-4">
//                   {product.description}
//                 </p>
//                 <ul className="space-y-2 mb-5">
//                   {product.features.map((feature) => (
//                     <li key={feature.title} className="text-xs">
//                       <div className="flex items-start gap-2">
//                         <span className="text-accent mt-0.5 shrink-0">
//                           &#8226;
//                         </span>
//                         <div>
//                           <span className="font-semibold text-foreground/70">
//                             {feature.title}:
//                           </span>{" "}
//                           <span className="text-foreground/50">
//                             {feature.detail}
//                           </span>
//                         </div>
//                       </div>
//                     </li>
//                   ))}
//                 </ul>
//                 <Link
//                   href={`/products/${product.slug}`}
//                   className="inline-flex items-center gap-1.5 text-accent text-sm font-medium hover:text-accent/80 transition-colors"
//                 >
//                   Learn More
//                   <svg
//                     className="w-3.5 h-3.5"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M17 8l4 4m0 0l-4 4m4-4H3"
//                     />
//                   </svg>
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </div>
//
//         {/* Join Waitlist */}
//         <div className="text-center">
//           <button className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-accent to-accent-2 text-white font-semibold hover:opacity-90 transition-opacity glow-accent mb-3">
//             Join Waitlist
//             <svg
//               className="w-4 h-4"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M17 8l4 4m0 0l-4 4m4-4H3"
//               />
//             </svg>
//           </button>
//           <p className="text-foreground/40 text-sm">
//             Be the first to experience SJA Tech products
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

// Placeholder export while SJA Tech is commented out
export default function DivisionTech() {
  return null;
}
