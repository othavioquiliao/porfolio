// "use client";

// import { useState } from "react";
// import {
//   ChevronDown,
//   ChevronRight,
//   File,
//   Folder,
//   FolderOpen,
//   Github,
//   Linkedin,
//   Twitter,
//   X,
// } from "lucide-react";
// import { Card } from "@/components/ui/card";

// export default function VSCodePortfolio() {
//   const [activeTab, setActiveTab] = useState("hello");
//   const [expandedFolders, setExpandedFolders] = useState({
//     "personal-info": true,
//     contacts: true,
//   });

//   const toggleFolder = (folder: string) => {
//     setExpandedFolders((prev) => ({
//       ...prev,
//       [folder]: !prev[folder as keyof typeof prev],
//     }));
//   };

//   const tabs = [
//     { id: "hello", label: "hello.js" },
//     { id: "about-me", label: "about-me.js" },
//     { id: "projects", label: "projects.js" },
//     { id: "contact-me", label: "contact-me.js" },
//   ];

//   const fileStructure = [
//     {
//       name: "personal-info",
//       type: "folder",
//       expanded: expandedFolders["personal-info"],
//       children: [
//         { name: "bio.txt", type: "file", icon: "📄" },
//         { name: "interests.md", type: "file", icon: "📄" },
//         {
//           name: "education",
//           type: "folder",
//           children: [
//             { name: "high-school.json", type: "file", icon: "🎓" },
//             { name: "university.json", type: "file", icon: "🎓" },
//           ],
//         },
//       ],
//     },
//     {
//       name: "contacts",
//       type: "folder",
//       expanded: expandedFolders["contacts"],
//       children: [
//         { name: "email.js", type: "file", icon: "📧" },
//         { name: "phone.js", type: "file", icon: "📱" },
//         { name: "social.json", type: "file", icon: "🌐" },
//       ],
//     },
//   ];

//   const getTabContent = () => {
//     switch (activeTab) {
//       case "hello":
//         return {
//           code: `console.log("Hello World! 👋");

// // Welcome to my portfolio
// const developer = {
//   name: "Michael Weaver",
//   role: "Full Stack Developer",
//   location: "São Paulo, Brazil",
//   status: "Available for hire",

//   greeting() {
//     return \`Hi there! I'm \${this.name},
//            a passionate \${this.role}
//            based in \${this.location}.\`;
//   }
// };

// console.log(developer.greeting());

// // Let's explore my work together!
// const navigation = [
//   "📋 about-me.js  // Learn more about me",
//   "🚀 projects.js  // Check out my projects",
//   "📞 contact-me.js // Get in touch"
// ];

// navigation.forEach(item => console.log(item));`,
//           language: "javascript",
//         };

//       case "about-me":
//         return {
//           code: `/**
//  * About Me - Full Stack Developer
//  *
//  * I'm a passionate developer with 5+ years of experience
//  * building modern web applications using cutting-edge
//  * technologies like React, Next.js, Node.js, and more.
//  */

// const aboutMe = {
//   experience: "5+ years",
//   specialties: [
//     "Frontend Development (React, Next.js, TypeScript)",
//     "Backend Development (Node.js, Python, PostgreSQL)",
//     "UI/UX Design (Figma, Tailwind CSS)",
//     "DevOps & Cloud (AWS, Docker, Vercel)"
//   ],

//   currentFocus: [
//     "Building scalable web applications",
//     "Learning AI/ML integration",
//     "Contributing to open source",
//     "Mentoring junior developers"
//   ],

//   philosophy: \`
//     I believe in writing clean, maintainable code
//     and creating user experiences that make a
//     difference. Always learning, always growing.
//   \`,

//   funFact: "I debug with console.log() and I'm not ashamed! 🐛"
// };

// export default aboutMe;`,
//           language: "javascript",
//         };

//       case "projects":
//         return {
//           code: `// My Featured Projects 🚀

// const projects = [
//   {
//     name: "E-commerce Platform",
//     tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
//     description: "Full-stack e-commerce with admin dashboard",
//     status: "Production",
//     github: "github.com/username/ecommerce",
//     live: "mystore.vercel.app",
//     highlights: [
//       "💳 Integrated payment processing",
//       "📊 Real-time analytics dashboard",
//       "🔐 JWT authentication system",
//       "📱 Fully responsive design"
//     ]
//   },

//   {
//     name: "Task Management App",
//     tech: ["React", "Node.js", "MongoDB", "Socket.io"],
//     description: "Collaborative project management tool",
//     status: "Development",
//     github: "github.com/username/taskapp",
//     highlights: [
//       "⚡ Real-time collaboration",
//       "🎯 Drag & drop interface",
//       "📈 Progress tracking",
//       "👥 Team management"
//     ]
//   },

//   {
//     name: "Weather Dashboard",
//     tech: ["Vue.js", "Express", "OpenWeather API"],
//     description: "Beautiful weather app with forecasts",
//     status: "Completed",
//     github: "github.com/username/weather",
//     live: "weather-dash.netlify.app",
//     highlights: [
//       "🌤️ 7-day forecasts",
//       "📍 Location-based weather",
//       "📊 Interactive charts",
//       "🎨 Animated weather icons"
//     ]
//   }
// ];

// // Currently working on...
// const currentProject = {
//   name: "AI Code Assistant",
//   description: "VS Code extension for AI-powered coding help",
//   progress: "75%",
//   expectedLaunch: "Q2 2024"
// };

// console.log("Check out my work! 💻");`,
//           language: "javascript",
//         };

//       case "contact-me":
//         return {
//           code: `// Let's Connect! 📬

// const contactInfo = {
//   email: "michael.weaver@email.com",
//   phone: "+55 11 99999-9999",
//   location: "São Paulo, SP - Brazil",
//   timezone: "GMT-3 (BRT)",

//   social: {
//     github: "github.com/michael-weaver",
//     linkedin: "linkedin.com/in/michael-weaver",
//     twitter: "@michaelweaver_dev",
//     portfolio: "michaelweaver.dev"
//   },

//   availability: {
//     status: "🟢 Available for new opportunities",
//     workingHours: "Mon-Fri, 9AM-6PM BRT",
//     responseTime: "Usually within 24 hours",

//     interestedIn: [
//       "Full-time positions",
//       "Freelance projects",
//       "Technical consulting",
//       "Open source collaboration"
//     ]
//   },

//   preferredContact: "email", // or "linkedin"

//   // Quick contact function
//   sendMessage: function(message) {
//     return \`
//       📧 Email: \${this.email}
//       💬 Message: \${message}

//       I'll get back to you soon!
//       Thanks for reaching out! 🚀
//     \`;
//   }
// };

// // Feel free to reach out!
// console.log("Let's build something amazing together! ✨");

// export default contactInfo;`,
//           language: "javascript",
//         };

//       default:
//         return { code: "", language: "javascript" };
//     }
//   };

//   const currentContent = getTabContent();
//   const projects = [
//     {
//       name: "_ui-animations",
//       description: "Created 5 months ago",
//       details: "details",
//       stars: 3,
//     },
//     {
//       name: "_ai-resources",
//       description: "Created 9 months ago",
//       details: "details",
//       stars: 0,
//     },
//   ];

//   return (
//     <div className="h-screen bg-zinc-900 text-zinc-300 flex flex-col font-mono text-sm">
//       {/* Top Bar */}
//       <div className="bg-zinc-800 border-b border-zinc-700 px-4 py-2 flex items-center justify-between">
//         <div className="flex items-center space-x-4">
//           <span className="text-zinc-400">michael-weaver</span>
//         </div>
//         <div className="flex space-x-1">
//           <div className="w-3 h-3 bg-red-500 rounded-full"></div>
//           <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
//           <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//         </div>
//       </div>

//       {/* Tab Bar */}
//       <div className="bg-zinc-800 border-b border-zinc-700 flex">
//         {tabs.map((tab) => (
//           <button
//             key={tab.id}
//             onClick={() => setActiveTab(tab.id)}
//             className={`px-4 py-2 border-r border-zinc-700 flex items-center space-x-2 hover:bg-zinc-700 transition-colors ${
//               tab.id === activeTab
//                 ? "bg-zinc-700 border-b-2 border-orange-400"
//                 : ""
//             }`}
//           >
//             <span>{tab.label}</span>
//             {tab.id === activeTab && (
//               <X className="w-3 h-3 hover:bg-zinc-600 rounded" />
//             )}
//           </button>
//         ))}
//       </div>

//       <div className="flex flex-1 overflow-hidden">
//         {/* Sidebar */}
//         <div className="w-64 bg-zinc-800 border-r border-zinc-700 flex flex-col">
//           {/* Explorer Header */}
//           <div className="p-2 text-xs text-zinc-400 uppercase tracking-wide border-b border-zinc-700">
//             Explorer
//           </div>

//           {/* File Tree */}
//           <div className="flex-1 p-2">
//             {fileStructure.map((item) => (
//               <div key={item.name} className="mb-1">
//                 <div
//                   className="flex items-center space-x-1 hover:bg-zinc-700 px-1 py-0.5 rounded cursor-pointer transition-colors"
//                   onClick={() => toggleFolder(item.name)}
//                 >
//                   {item.expanded ? (
//                     <ChevronDown className="w-3 h-3" />
//                   ) : (
//                     <ChevronRight className="w-3 h-3" />
//                   )}
//                   {item.expanded ? (
//                     <FolderOpen className="w-4 h-4 text-blue-400" />
//                   ) : (
//                     <Folder className="w-4 h-4 text-blue-400" />
//                   )}
//                   <span className="text-sm">{item.name}</span>
//                 </div>
//                 {item.expanded && item.children && (
//                   <div className="ml-4 mt-1">
//                     {item.children.map((child) => (
//                       <div
//                         key={child.name}
//                         className="flex items-center space-x-1 hover:bg-zinc-700 px-1 py-0.5 rounded cursor-pointer transition-colors"
//                       >
//                         <span className="w-3"></span>
//                         <File className="w-4 h-4 text-zinc-400" />
//                         <span className="text-sm">{child.name}</span>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="flex-1 flex overflow-hidden">
//           {/* Code Editor */}
//           <div className="flex-1 bg-zinc-900 flex flex-col overflow-hidden">
//             {/* Line Numbers and Code */}
//             <div className="flex-1 flex overflow-hidden">
//               <div className="w-12 bg-zinc-800 border-r border-zinc-700 py-4 overflow-y-auto">
//                 {currentContent.code.split("\n").map((_, i) => (
//                   <div
//                     key={i + 1}
//                     className="text-zinc-500 text-right pr-2 leading-6"
//                   >
//                     {i + 1}
//                   </div>
//                 ))}
//               </div>
//               <div className="flex-1 p-4 overflow-y-auto">
//                 <pre className="text-zinc-300 leading-6">
//                   <code>
//                     {currentContent.code.split("\n").map((line, i) => (
//                       <div key={i}>
//                         {line.includes("//") ? (
//                           <span className="text-zinc-500">{line}</span>
//                         ) : line.includes("/**") ||
//                           line.includes("*/") ||
//                           line.includes("*") ? (
//                           <span className="text-emerald-400">{line}</span>
//                         ) : line.includes("const ") ||
//                           line.includes("function ") ||
//                           line.includes("return ") ? (
//                           <span>
//                             <span className="text-purple-400">
//                               {
//                                 line.match(
//                                   /(const|function|return|export|default)/g
//                                 )?.[0]
//                               }
//                             </span>
//                             {line.replace(
//                               /(const|function|return|export|default)/,
//                               ""
//                             )}
//                           </span>
//                         ) : line.includes('"') ||
//                           line.includes("'") ||
//                           line.includes("`") ? (
//                           <span>
//                             {line
//                               .split(/("[^"]*"|'[^']*'|`[^`]*`)/)
//                               .map((part, idx) =>
//                                 idx % 2 === 1 ? (
//                                   <span key={idx} className="text-emerald-300">
//                                     {part}
//                                   </span>
//                                 ) : (
//                                   <span key={idx}>{part}</span>
//                                 )
//                               )}
//                           </span>
//                         ) : (
//                           <span>{line}</span>
//                         )}
//                       </div>
//                     ))}
//                   </code>
//                 </pre>
//               </div>
//             </div>
//           </div>

//           {/* Right Sidebar */}
//           <div className="w-80 bg-zinc-800 border-l border-zinc-700 p-4 overflow-y-auto">
//             <div className="mb-4">
//               <h3 className="text-zinc-400 text-sm mb-3">
//                 // Code snippet showcase:
//               </h3>

//               <div className="space-y-4">
//                 {projects.map((project) => (
//                   <Card
//                     key={project.name}
//                     className="bg-zinc-900 border-zinc-600 p-3 hover:bg-zinc-800 transition-colors"
//                   >
//                     <div className="flex items-start justify-between mb-2">
//                       <div className="flex items-center space-x-2">
//                         <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-xs">
//                           @
//                         </div>
//                         <span className="text-blue-400 text-sm">
//                           {project.name}
//                         </span>
//                       </div>
//                       <div className="flex items-center space-x-2 text-xs text-zinc-400">
//                         <span>{project.details}</span>
//                         <div className="flex items-center space-x-1">
//                           <span>★</span>
//                           <span>{project.stars} stars</span>
//                         </div>
//                       </div>
//                     </div>
//                     <p className="text-xs text-zinc-400 mb-3">
//                       {project.description}
//                     </p>

//                     <div className="bg-zinc-950 p-2 rounded text-xs border border-zinc-700">
//                       <div className="text-blue-400">
//                         function{" "}
//                         <span className="text-yellow-400">
//                           initializeModelChunk
//                         </span>
//                         () {"{"}
//                       </div>
//                       <div className="ml-2 text-zinc-300">
//                         const value: T ={" "}
//                         <span className="text-emerald-400">parseModel</span>();
//                       </div>
//                       <div className="ml-2 text-zinc-300">
//                         const chunk:{" "}
//                         <span className="text-blue-400">InitializedChunk</span>{" "}
//                         = any;
//                       </div>
//                       <div className="ml-2 text-purple-400">return</div>{" "}
//                       <span className="text-zinc-300">value;</span>
//                       <div>{"}"}</div>
//                     </div>
//                   </Card>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Status Bar */}
//       <div className="bg-zinc-800 border-t border-zinc-700 px-4 py-2 flex items-center justify-between text-xs">
//         <div className="flex items-center space-x-4">
//           <span className="text-zinc-400">find me in:</span>
//           <div className="flex items-center space-x-2">
//             <Twitter className="w-4 h-4 text-zinc-400 hover:text-blue-400 cursor-pointer transition-colors" />
//             <Linkedin className="w-4 h-4 text-zinc-400 hover:text-blue-600 cursor-pointer transition-colors" />
//           </div>
//         </div>
//         <div className="flex items-center space-x-2">
//           <span className="text-zinc-400">@username</span>
//           <Github className="w-4 h-4 text-zinc-400 hover:text-white cursor-pointer transition-colors" />
//         </div>
//       </div>
//     </div>
//   );
// }
