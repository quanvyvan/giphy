import React from "react";
import { Card } from "../../../components/card";
import { Carousel } from "../../../components/carousel";

type Props = {
  trendingData?: any;
};

const Trending: React.FC<Props> = (props: Props) => {
  return (
    <section className="space-y-2">
      <div className="flex justify-between items-center">
        <h3 className="flex font-medium text-2xl">
          <img
            className="mr-2"
            src="/images/icons/svgexport-2.svg"
            alt="svgexport"
          />
          Trending
        </h3>
        <span className="text-gray-600 font-bold flex items-center cursor-pointer">
          All The GIFs{" "}
          <img
            className="w-4 h-4"
            src="/images/icons/svgexport-3.svg"
            alt="svgexport"
          />
        </span>
      </div>
      {props.trendingData.map(() => (
        <Card />
      ))}
    </section>
  );
};

export default Trending;
