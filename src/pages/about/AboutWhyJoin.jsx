function AboutWhyJoin() {
  const reasons = [
    {
      title: "Nikmati di TV-mu",
      description:
        "Tonton di Smart TV, Playstation. Xbox, Chromecast, Apple Tv, pemutar Blu-ray, dan banyak lagi.",
      icon: "📺",
    },
    {
      title: "Download acara Tv untuk menontonnya secara offline",
      description:
        "Simpan favoritmu dengan mudah agar selalu ada acara TV dan Film yang bisa ditonton.",
      icon: "📺",
    },
    {
      title: "Tonton di mana pun",
      description:
        "Streaming Film dan acara TV tidak terbatas di ponsel, tabler, laptop, dan TV-mu.",
      icon: "📺",
    },
    {
      title: "Buat profil untuk anak",
      description:
        "Kirim anak-anak untuk berpetualang bersama karakter favorit di dunia yang buat khusus untuk mereka.",
      icon: "📺",
    },
  ];

  return (
    <section className="w-full bg-black text-white py-20 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Alasan Lainnya untuk Bergabung
      </h2>

      <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {reasons.map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-xl p-6 flex flex-col justify-between shadow-md"
          >
            <div>
              <h3 className="text-lg font-bold mb-3">{item.title}</h3>
              <p className="text-sm text-gray-300">{item.description}</p>
            </div>
            <div className="mt-6 text-3xl text-center">{item.icon}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutWhyJoin;
