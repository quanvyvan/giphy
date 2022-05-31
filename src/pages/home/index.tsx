import React, { useEffect, useState } from "react";
import trendingApi from "../../api/trendingApi";
import Trending from "./trending";

const HomePage = () => {

  const [trendingData, setTrendingData] = useState<any>(null)
  console.log('🚀 ~ file: index.tsx ~ line 8 ~ HomePage ~ trendingData', trendingData);
  useEffect(() => {
    trendingApi.getAll().then((res) => setTrendingData(res));
  },[]);
  console.log(process.env.REACT_APP_API_KEY);

  return (
    <main className="space-y-2 mt-2">
      <img src="https://media.giphy.com/headers/2022-06-01-21-1654089664/PRIDE_BANNER_HP.gif" alt="" />
      <Trending trendingData={trendingData} />
    </main>
  );
};

export default HomePage;
