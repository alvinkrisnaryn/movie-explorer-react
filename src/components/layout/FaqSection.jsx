import { useState } from "react";
import FaqItem from "./FaqItem";

function FaqSection() {
  const [openItems, setOpenItems] = useState({});

  const faqs = [
    {
      q: "What is Netflix?",
      a: "Netflix is a streaming service that offers a wide variety of TV shows, movies, and more.",
    },
    {
      q: "How much does Netflix cost?",
      a: "Plans range from $9 to $18 a month depending on features.",
    },
    {
      q: "Where can I Watch Netflix?",
      a: "You can watch anywhere, anytime, on any internet-connected device.",
    },
    {
      q: "How do I Cancel?",
      a: "Cancel anytime online, with no cancellation fees",
    },
    {
      q: "What can I watch on Netflix?",
      a: "Netflix has an extensive library of feature films, documentaries, TV shows, and more.",
    },
    {
      q: "Is Netflix good for kids?",
      a: "Netflix has a kids section with family-friendly content and parental controls.",
    },
  ];

  const toggleItem = (i) => {
    setOpenItems((prev) => ({
      ...prev,
      [i]: !prev[i],
    }));
  };

  return (
    <section className="bg-black text-white py-10 px-4">
      <div className="max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        <div className="flex flex-col items-start text-left md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            <span className="block">Frequently</span>
            <span className="block">Asked Questions</span>
          </h2>
          <p className="mt-3 text-base md:text-lg text-white/70 max-w-md mx-auto md:mx-0">
            The easiest and fastest way to pay tuition and fees to educational,
            businesses, and government agencies worldwide.
          </p>
        </div>
        <div className="font-medium">
          {faqs.map((item, index) => (
            <FaqItem
              key={index}
              question={item.q}
              answer={item.a}
              isOpen={!!openItems[index]}
              onToggle={() => toggleItem(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
