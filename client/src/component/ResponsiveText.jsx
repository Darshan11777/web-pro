import React, { useRef, useState, useEffect } from "react";

const ResponsiveText = ({
  children,
  minFontSize = 12,
  maxFontSize = 48,
  multiLine = false, // Allow multi-line text resizing
  adjustOnResize = true, // Allow resizing when the container is resized
}) => {
  const containerRef = useRef(null);
  const [fontSize, setFontSize] = useState(minFontSize); // Default to minFontSize

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
    }
  };

  // Effect to handle resizing logic
  useEffect(() => {
    if (adjustOnResize) {
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

  return (
    <div
      ref={containerRef}
      style={{
        fontSize: `${fontSize}px`,
        overflow: "hidden",
        whiteSpace: multiLine ? "normal" : "nowrap", // Allow wrapping for multi-line text
        lineHeight: multiLine ? "1.2em" : "normal", // Adjust line height if multi-line
      }}
    >
      {children}
    </div>
  );
};

export default ResponsiveText;
