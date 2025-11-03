// // hooks/useIntersectionObserver.ts
// import { useEffect, useRef, useState } from "react";

// export const useIntersectionObserver = (options: IntersectionObserverInit) => {
//   const [isIntersecting, setIsIntersecting] = useState(false);
//   const ref = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const element = ref.current;
//     const observer = new IntersectionObserver(([entry]) => {
//       setIsIntersecting(entry.isIntersecting);
//     }, options);

//     if (element) {
//       observer.observe(element);
//     }

//     return () => {
//       if (element) {
//         observer.unobserve(element);
//       }
//       observer.disconnect();
//     };
//   }, [options]);

//   return { ref, isIntersecting };
// };

"use client"

import { useEffect, useRef, useState } from "react";

export const useIntersectionObserver = (
  options: IntersectionObserverInit
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [options]); 

  return { ref, isIntersecting };
};
