import React from "react";
import { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

export default function GoToTopBtn() {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  });

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {backToTop && (
        <button
          className="fixed bottom-12 right-12 h-12 w-12 text-5xl"
          onClick={scrollUp}
        >
          <AiOutlineArrowUp
            fontSize={30}
            className="bg-black rounded-full text-lime-500 hover:bg-lime-500 hover:text-black transition-colors"
            aria-aria-hidden="true"
          />
        </button>
      )}
    </div>
  );
}
