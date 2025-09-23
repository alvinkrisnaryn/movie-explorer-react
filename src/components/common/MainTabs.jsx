function MainTabs({ activeTab, onChange }) {
  const tabs = [
    { key: "movies", label: "Movies" },
    { key: "tv_shows", label: "Tv Shows" },
    { key: "originals", label: "Netflix Originals" },
  ];

  return (
    <div className="font-nunito flex bg-black/90 px-4 md:px-8 py-5 overflow-x-auto scrollbar-hide justify-center md:justify-start">
      <div className="flex space-x-6 md:space-x-12">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => onChange(tab.key)}
            className={`relative pb-2 text-sm md:text-base uppercase font-semibold transition-colors duration-300 cursor-pointer tracking-wide ${
              activeTab === tab.key
                ? "text-white"
                : "text-gray-400 hover:text-gray-200"
            }`}
          >
            {tab.label}
            <span
              className={`absolute left-0 bottom-0 h-[3px] bg-red-600 rounded-full transition-transfrom duration-300 origin-left ${
                activeTab === tab.key
                  ? "w-full scale-x-100"
                  : "w-full scale-x-0"
              }`}
            ></span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default MainTabs;
