import { useRef, useState, useEffect } from "react";
import MediaCard from "./MediaCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function SliderMediaList({ title, items }) {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [hovering, setHovering] = useState(false);

  const updateScrollButtons = () => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  useEffect(() => {
    updateScrollButtons();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollButtons);
    window.addEventListener("resize", updateScrollButtons);
    return () => {
      el.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, []);

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    const { clientWidth, scrollLeft } = el;
    const amount = Math.max(320, clientWidth - 120);
    el.scrollTo({
      left: dir === "left" ? scrollLeft - amount : scrollLeft + amount,
      behavior: "smooth",
    });
  };

  if (!items || items.length === 0) return null;

  const showLeft = hovering && canScrollLeft;
  const showRight = hovering && canScrollRight;

  return (
    <section className=" bg-black relative">
      <div className="px-8">
        {title && (
          <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
            {title}
          </h2>
        )}
      </div>
      <div
        className="relative py-5"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        {canScrollLeft && (
          <div className="pointer-events-none hidden md:block absolute left-0 top-0 h-full w-14 bg-gradient-to-r from-black to-transparent z-10" />
        )}
        {canScrollRight && (
          <div className="pointer-events-none hidden md:block absolute right-0 top-0 h-full w-14 bg-gradient-to-l from-black to-transparent z-10" />
        )}

        <button
          onClick={() => scroll("left")}
          className={`absolute left-2 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-10 h-10 rounded-full cursor-pointer text-white transition-opacity duration-300 ${
            showLeft ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          aria-label="Scroll left"
        >
          <FaChevronLeft size={30} />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto scrollbar-hide px-6 scroll-smooth"
        >
          {items.map((item) => (
            <MediaCard key={item.id} media={item} />
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className={`absolute right-2 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center cursor-pointer w-10 h-10 rounded-full text-white transition-opacity duration-300 ${
            showRight ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          aria-label="Scroll right"
        >
          <FaChevronRight size={30} />
        </button>
      </div>
    </section>
  );
}

export default SliderMediaList;
