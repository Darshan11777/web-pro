// import React, { useRef, useState, useEffect } from "react";

// const ResponsiveText = ({
//   children,
//   minFontSize = 12,
//   maxFontSize = 48,
//   multiLine = false, // Allow multi-line text resizing
//   adjustOnResize = true, // Allow resizing when the container is resized
//   maxLines = 2, // Max lines for multi-line text
// }) => {
//   const containerRef = useRef(null);
//   const [fontSize, setFontSize] = useState(minFontSize); // Default to minFontSize

//   // Function to adjust font size
//   const adjustFontSize = () => {
//     if (containerRef.current) {
//       const containerWidth = containerRef.current.offsetWidth;
//       const containerHeight = containerRef.current.offsetHeight;

//       // Calculate the line height factor (considering multiLine setting)
//       const lineHeight = multiLine ? fontSize * 1.2 : 0; // Assuming 1.2 is the line height multiplier

//       // Resize font size to fit the container
//       let newFontSize = maxFontSize;
//       while (newFontSize > minFontSize) {
//         containerRef.current.style.fontSize = `${newFontSize}px`;

//         // Calculate the number of lines based on scrollHeight and lineHeight
//         const lines = Math.floor(containerRef.current.scrollHeight / lineHeight);
//         const isOverflowing =
//           containerRef.current.scrollHeight > containerHeight ||
//           containerRef.current.scrollWidth > containerWidth;

//         // Check if the number of lines exceeds maxLines or if the text overflows
//         if (isOverflowing || lines > maxLines) {
//           newFontSize -= 1; // Decrease font size if the text overflows
//         } else {
//           break; // If it fits, stop adjusting
//         }
//       }

//       setFontSize(newFontSize);
//     }
//   };

//   // Effect to handle resizing logic
//   useEffect(() => {
//     if (adjustOnResize) {
//       const resizeObserver = new ResizeObserver(() => {
//         adjustFontSize();
//       });

//       if (containerRef.current) {
//         resizeObserver.observe(containerRef.current);
//       }

//       adjustFontSize(); // Initial font size adjustment

//       return () => {
//         if (resizeObserver && containerRef.current) {
//           resizeObserver.unobserve(containerRef.current);
//         }
//       };
//     }

//     adjustFontSize(); // Initial adjustment when first rendered
//   }, [minFontSize, maxFontSize, adjustOnResize, maxLines]);

//   return (
//     <div
//       ref={containerRef}
//       className="h-full w-full"
//       style={{
//         fontSize: `${fontSize}px`,
//         whiteSpace: multiLine ? "normal" : "nowrap", // Allow wrapping for multi-line text
//         lineHeight: multiLine ? "1.2em" : "normal", // Adjust line height if multi-line
//       }}
//     >
//       {children}
//     </div>
//   );
// };

// export default ResponsiveText;



import React, { useRef, useState, useEffect } from "react";

const ResponsiveText = ({
  children,
  minFontSize = 5,
  maxFontSize = 500,
  multiLine = true, // Allow multi-line text resizing
  adjustOnResize = true, // Allow resizing when the container is resized
  breakWord,
}) => {
  const containerRef = useRef(null);
  const [fontSize, setFontSize] = useState(minFontSize); // Default to minFontSize
const [firstRender, setFirstRender] = useState(true);


  // Function to adjust font size
  const adjustFontSize = () => {
    if (containerRef.current) {
 
      const containerWidth = containerRef.current.offsetWidth;
      const containerHeight = containerRef.current.offsetHeight;
      // Calculate font size to fit the container
      let newFontSize = maxFontSize;

      // Resize until the text fits within the container
      while (newFontSize > minFontSize) {
        containerRef.current.style.fontSize = `${newFontSize}px`;
        const isOverflowing = containerRef.current.scrollHeight > containerHeight || containerRef.current.scrollWidth > containerWidth;

        if (isOverflowing) {
          newFontSize -= 1; // Decrease font size if the text overflows
        } else {
          break; // If it fits, break out of the loop
        }
      }
     
      // Set the font size
      setFontSize(newFontSize);
      // setFontSize(fontSize);
    }
  };

  const breakAtWord = (text, word) => {
    const parts = text.toLowerCase().split(word.toLowerCase());
    return (
      <>
        {parts[0]}
        {word}
        <br />
        {parts[1]}
      </>
    );
  };

  // Effect to handle resizing logic
  useEffect(() => {
    if (adjustOnResize  ) {
     
      const resizeObserver = new ResizeObserver(() => {
        adjustFontSize();
      });

      if (containerRef.current) {
        resizeObserver.observe(containerRef.current);
      }

      adjustFontSize(); // Initial font size adjustment

      return () => {
        if (resizeObserver && containerRef.current) {
          resizeObserver.unobserve(containerRef.current);
        }
      };
    }

    
  
  }, [minFontSize, maxFontSize, adjustOnResize]);

  console.log( "children",children,breakWord);

  return (
    <div
      ref={containerRef}
    className="h-full w-full     "
      style={{
        fontSize: `${fontSize}px`,
        
        // overflow: "hidden",
        whiteSpace: multiLine ? "normal" : "nowrap", // Allow wrapping for multi-line text
        lineHeight: multiLine ? "1.2em" : "normal", // Adjust line height if multi-line
      }}
    >
      {breakWord ? breakAtWord(children,breakWord) : children}
    </div>
  );
};

export default ResponsiveText;



// import React, { useRef, useState, useEffect } from "react";

// const ResponsiveText = ({
//   children,
//   minFontSize = 12,
//   maxFontSize = 48,
//   multiLine = false, // Allow multi-line text resizing
//   adjustOnResize = true, // Allow resizing when the container is resized
// }) => {
//   const containerRef = useRef(null);
//   const [fontSize, setFontSize] = useState(minFontSize); // Default to minFontSize
// const [firstRender, setFirstRender] = useState(true);

//   // const containerWidth = containerRef.current.offsetWidth;
//   // const containerHeight = containerRef.current.offsetHeight;
//   // const totalCharacters =  containerRef.current.innerText.length
  
//   // const totalPx = containerWidth * containerHeight
//   // const pxPerCharacters = containerWidth * containerHeight / totalCharacters

//   // const fontSize2=Math.sqrt(pxPerCharacters / 1.2);

//   // console.log( "(fontsize*(fontsize*1.2))",(fontSize*(fontSize*1.2)),fontSize);

//   // console.log( "{containerWidth,containerHeight}",{containerWidth,containerHeight,totalCharacters,pxPerCharacters,totalPx,fontSize,fontSize2});
    
//   // Function to adjust font size
//   const adjustFontSize = () => {
//     if (containerRef.current) {
//       const containerWidth = containerRef.current.offsetWidth;
//       const containerHeight = containerRef.current.offsetHeight;
//       const totalCharacters =  containerRef.current.innerText.length
//       const totalPx = containerWidth * containerHeight
//       const pxPerCharacters = containerWidth * containerHeight / totalCharacters
 
//       const fontSize2=Math.sqrt(pxPerCharacters / 1.2);

//       console.log( "(fontsize*(fontsize*1.2))",(fontSize*(fontSize*1.2)),fontSize);
    
//       console.log( "{containerWidth,containerHeight}",{containerWidth,containerHeight,totalCharacters,pxPerCharacters,totalPx,fontSize,fontSize2});

//       // Calculate font size to fit the container
//       let newFontSize = maxFontSize;

//       // Resize until the text fits within the container
//       while (newFontSize > minFontSize) {
//         containerRef.current.style.fontSize = `${newFontSize}px`;
//         const isOverflowing = containerRef.current.scrollHeight > containerHeight || containerRef.current.scrollWidth > containerWidth;

//         if (isOverflowing) {
//           newFontSize -= 1; // Decrease font size if the text overflows
//         } else {
//           break; // If it fits, break out of the loop
//         }
//       }
     
//       // Set the font size
//       setFontSize(newFontSize);
//       // setFontSize(fontSize);
//     }
//   };

//   // Effect to handle resizing logic
//   useEffect(() => {
//     if (adjustOnResize ) {
     
//       const resizeObserver = new ResizeObserver(() => {
//         adjustFontSize();
//       });

//       if (containerRef.current) {
//         resizeObserver.observe(containerRef.current);
//       }

//       adjustFontSize(); // Initial font size adjustment

//       return () => {
//         if (resizeObserver && containerRef.current) {
//           resizeObserver.unobserve(containerRef.current);
//         }
//       };
//     }

//     if(firstRender){
//       setFirstRender(false)
//       adjustFontSize();
//     }
  
//   }, [minFontSize, maxFontSize, adjustOnResize]);

//   return (
//     <div
//       ref={containerRef}
//     className="h-full w-full bg-red-400"
//       style={{
//         fontSize: `${fontSize}px`,
//         // overflow: "hidden",
//         whiteSpace: multiLine ? "normal" : "nowrap", // Allow wrapping for multi-line text
//         lineHeight: multiLine ? "1.2em" : "normal", // Adjust line height if multi-line
//       }}
//     >
//       {children}
//     </div>
//   );
// };

// export default ResponsiveText;




// import React, { useRef, useState, useEffect } from "react";

// const ResponsiveText = ({
//   children,
//   minFontSize = 12,
//   maxFontSize = 48,
//   multiLine = false, // Allow multi-line text resizing
//   adjustOnResize = true, // Allow resizing when the container is resized
// }) => {
//   const containerRef = useRef(null);
//   const [fontSize, setFontSize] = useState(minFontSize); // Default to minFontSize

//   // Function to adjust font size
//   // const adjustFontSize = () => {
//   //   if (containerRef.current) {
//   //     const containerWidth = containerRef.current.offsetWidth;
//   //     const containerHeight = containerRef.current.offsetHeight;
//   //     const totalCharacters =  containerRef.current.innerText.length
//   //     const totalPx = containerWidth * containerHeight
//   //     const pxPerCharacters = containerWidth * containerHeight / totalCharacters
 

//   //   const fontSize= pxPerCharacters/ 1.2
      
//   //     console.log( "{containerWidth,containerHeight}",{containerWidth,containerHeight,totalCharacters,pxPerCharacters,totalPx,fontSize});

//   //     // Calculate font size to fit the container
//   //     let newFontSize = maxFontSize;

//   //     // Resize until the text fits within the container
//   //     while (newFontSize > minFontSize) {
//   //       containerRef.current.style.fontSize = `${newFontSize}px`;
//   //       const isOverflowing = containerRef.current.scrollHeight > containerHeight || containerRef.current.scrollWidth > containerWidth;

//   //       if (isOverflowing) {
//   //         newFontSize -= 1; // Decrease font size if the text overflows
//   //       } else {
//   //         break; // If it fits, break out of the loop
//   //       }
//   //     }
     
//   //     // Set the font size
//   //     setFontSize(newFontSize);
//   //     // setFontSize(fontSize);
//   //   }
//   // };

//   const adjustFontSize = () => {
//     if (!containerRef.current) return;
  
//     const container = containerRef.current;
//     const { offsetWidth: containerWidth, offsetHeight: containerHeight } = container;
//     const totalCharacters = container.innerText.length;
//     const pxPerCharacter = (containerWidth * containerHeight) / totalCharacters;
//     // const initialFontSize = Math.sqrt(pxPerCharacter / 1.2);
    
//     const initialFontSize = pxPerCharacter / 1.2;
  
//     console.log("Container Info:", { containerWidth, containerHeight, totalCharacters, pxPerCharacter, initialFontSize });
  
//     let newFontSize = Math.min(initialFontSize, maxFontSize);
//     // let newFontSize = Math.min(initialFontSize, maxFontSize);
  
//     // Adjust only if the initial font size does not fit
//     container.style.fontSize = `${newFontSize}px`;
//     if (container.scrollWidth <= containerWidth && container.scrollHeight <= containerHeight) {
//       setFontSize(newFontSize); // Set directly if it fits
//       return;
//     }
  
//     // Otherwise, reduce font size until it fits
//     while (newFontSize > minFontSize) {
//       newFontSize -= 1;
//       container.style.fontSize = `${newFontSize}px`;
//       if (container.scrollWidth <= containerWidth && container.scrollHeight <= containerHeight) break;
//     }
  
//     setFontSize(newFontSize);
//   };
  
//   // Effect to handle resizing logic
//   useEffect(() => {
//     if (adjustOnResize ) {
//       const resizeObserver = new ResizeObserver(() => {
//         adjustFontSize();
//       });

//       if (containerRef.current) {
//         resizeObserver.observe(containerRef.current);
//       }

//       adjustFontSize(); // Initial font size adjustment

//       return () => {
//         if (resizeObserver && containerRef.current) {
//           resizeObserver.unobserve(containerRef.current);
//         }
//       };
//     }
//   }, [minFontSize, maxFontSize, adjustOnResize]);

//   return (
//     <div
//       ref={containerRef}
//     className="h-full w-full bg-red-400"
//       style={{
//         fontSize: `${fontSize}px`,
//         // overflow: "hidden",
//         whiteSpace: multiLine ? "normal" : "nowrap", // Allow wrapping for multi-line text
//         lineHeight: multiLine ? "1.2em" : "normal", // Adjust line height if multi-line
//       }}
//     >
//       {children}
//     </div>
//   );
// };

// export default ResponsiveText;
