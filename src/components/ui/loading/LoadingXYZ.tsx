// "use client";
// import React, { useEffect, useState } from "react";

// interface LoadingProps {
//   isLoading: boolean;
// }

// const Loading: React.FC<LoadingProps> = ({ isLoading }) => {
//   const [showLoader, setShowLoader] = useState(false);
//   const [doorsOpen, setDoorsOpen] = useState(false);

//   useEffect(() => {
//     if (isLoading) {
//       // Show loader and close doors
//       setShowLoader(true);
//       setDoorsOpen(false);
//     } else {
//       // Open doors first, then hide loader after animation
//       setDoorsOpen(true);
//       const timer = setTimeout(() => {
//         setShowLoader(false);
//       }, 1000); // Match this with CSS transition duration
//       return () => clearTimeout(timer);
//     }
//   }, [isLoading]);

//   if (!showLoader) {
//     return null;
//   }

//   return (
//     <div className="fixed inset-0 z-1000 overflow-hidden">
//       {/* Loader Spinner - behind doors but visible through gap */}
//       <div
//         className={`
//         absolute inset-0 z-10 flex items-center justify-center
//         transition-opacity duration-500 ease-out
//         ${doorsOpen ? "opacity-0" : "opacity-100"}
//       `}
//       >
//         <div className="relative w-32 h-32">
//           <div className="absolute inset-0 border-4 border-transparent rounded-full border-t-blue-500 animate-spin"></div>
//           <div
//             className="absolute inset-2 border-4 border-transparent rounded-full border-t-green-500 animate-spin"
//             style={{ animationDuration: "3s" }}
//           ></div>
//           <div
//             className="absolute inset-4 border-4 border-transparent rounded-full border-t-red-500 animate-spin"
//             style={{ animationDuration: "1.5s" }}
//           ></div>
//         </div>
//       </div>

//       {/* Left Sliding Door */}
//       <div
//         className={`
//           absolute top-0 left-0 w-1/2 h-full bg-white z-20
//           transition-transform duration-1000 ease-in-out
//           ${doorsOpen ? "-translate-x-full" : "translate-x-0"}
//         `}
//       ></div>

//       {/* Right Sliding Door */}
//       <div
//         className={`
//           absolute top-0 right-0 w-1/2 h-full bg-white z-20
//           transition-transform duration-1000 ease-in-out
//           ${doorsOpen ? "translate-x-full" : "translate-x-0"}
//         `}
//       ></div>
//     </div>
//   );
// };

// export default Loading;

// "use client";
// import React, { useEffect, useState } from "react";

// interface LoadingProps {
//   isLoading: boolean;
// }

// const Loading: React.FC<LoadingProps> = ({ isLoading }) => {
//   const [showLoader, setShowLoader] = useState(isLoading);
//   const [doorsOpen, setDoorsOpen] = useState(false);

//   useEffect(() => {
//     if (isLoading) {
//       setShowLoader(true);
//       setDoorsOpen(false);
//     } else {
//       setDoorsOpen(true);
//       const timer = setTimeout(() => {
//         setShowLoader(false);
//       }, 1000);
//       return () => clearTimeout(timer);
//     }
//   }, [isLoading]);

//   if (!showLoader) {
//     return null;
//   }

//   return (
//     <div className="fixed inset-0 w-full h-full z-1000 overflow-hidden">
//       {/* Background behind doors - ensures no gaps */}
//       <div className="absolute inset-0 bg-white z-1000"></div>

//       {/* Left Sliding Door */}
//       <div
//         className={`
//           absolute top-0 left-0 w-1/2 h-full bg-white z-1001
//           transition-transform duration-1000 ease-out

//           ${doorsOpen ? "-translate-x-full" : "translate-x-0"}
//         `}
//       ></div>

//       {/* Right Sliding Door */}
//       <div
//         className={`
//           absolute top-0 right-0 w-1/2 h-full bg-white z-1001
//           transition-transform duration-1000 ease-out

//           ${doorsOpen ? "translate-x-full" : "translate-x-0"}
//         `}
//       ></div>

//       {/* Loader Spinner - positioned above everything */}
//       <div
//         className={`
//           absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-1002
//           transition-opacity duration-300 ease-out
//           ${doorsOpen ? "opacity-0" : "opacity-100"}
//         `}
//       >
//         <div
//           className="
//             relative
//             w-[150px] h-[150px]
//             border-[5px] border-transparent rounded-full
//             border-t-blue-500
//             animate-spin
//           "
//         >
//           <div
//             className="
//               absolute top-1 left-1 right-1 bottom-1
//               border-[5px] border-transparent rounded-full
//               border-t-green-500
//               animate-spin
//             "
//             style={{ animationDuration: "3s" }}
//           ></div>
//           <div
//             className="
//               absolute top-3.5 left-3.5 right-3.5 bottom-3.5
//               border-[5px] border-transparent rounded-full
//               border-t-red-500
//               animate-spin
//             "
//             style={{ animationDuration: "1.5s" }}
//           ></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Loading;
