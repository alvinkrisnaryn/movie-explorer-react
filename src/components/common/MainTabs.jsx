function MainTabs({ activeTab, onChange }) {
  const tabs = [
    { key: "movies", label: "Movies" },
    { key: "tv_shows", label: "Tv Shows" },
    { key: "originals", label: "Netflix Originals" },
  ];

  return (
    <div className="flex gap-10 bg-black/90 px-6 py-5 ">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onChange(tab.key)}
          className={`relative py-3 mx-20 text-base uppercase font-semibold transition-colors duration-300 cursor-pointer ${
            activeTab === tab.key
              ? "text-white"
              : "text-gray-400 hover:text-gray-200"
          }`}
        >
          {tab.label}
          <span
            className={`absolute left-0 -bottom-[18px] h-[3px] bg-red-600 rounded-full transition-transfrom duration-300 origin-left ${
              activeTab === tab.key
                ? "w-full scale-x-100"
                : "w-full scale-x-0 group-hover:scale-x-100"
            }`}
          ></span>
        </button>
      ))}
    </div>
  );
}

export default MainTabs;
