import { useState } from "react";

const tabs = [
  { id: "trending", label: "Trending Now" },
  { id: "popular", label: "Popular" },
  { id: "originals", label: "Netflix Original" },
  { id: "premiers", label: "Premiers" },
  { id: "recent", label: "Recently Added" },
];

function CategoryTabs({ onChange }) {
  const [activeTab, setActiveTab] = useState("trending");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    if (onChange) onChange(tabId);
  };

  return (
    <div className="relative bottom-0 left-0 w-full z-40 bg-black/98">
      <div className="flex justify-between px-6 py-5 mx-10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`relative pb-2 text-base font-semibold transition-colors duration-300 cursor-pointer tracking-wide ${
              activeTab === tab.id
                ? "text-white"
                : "text-gray-400 hover:text-gray-200"
            }`}
          >
            {tab.label}
            <span
              className={`absolute left-0 -bottom-[18px] h-[3px] bg-red-600 rounded-full transition-transfrom duration-300 origin-left ${
                activeTab === tab.id
                  ? "w-full scale-x-100"
                  : "w-full scale-x-0 group-hover:scale-x-100"
              }`}
            ></span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategoryTabs;
