import { useState, useEffect } from "react";
import { getTvByNetwork } from "../../api/tv";
import SliderMediaList from "../../components/media/SliderMediaList";

function TrendingTvByNetwork({ networkId, title }) {
  const [tvNetwork, setTvNetwork] = useState([]);

  useEffect(() => {
    async function fetchNetwork() {
      try {
        const data = await getTvByNetwork(networkId);
        setTvNetwork(data.results);
      } catch (error) {
        console.error(
          `Error fetching Tv Show from Network ${networkId}:`,
          error
        );
      }
    }
    fetchNetwork();
  }, [networkId]);

  if (tvNetwork.length === 0) return null;

  return (
    <div className="bg-black">
      <h2 className="text-white text-2xl font-bold px-8 ">{title}</h2>
      <SliderMediaList items={tvNetwork} />
    </div>
  );
}

export default TrendingTvByNetwork;
