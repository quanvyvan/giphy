import React from "react";

interface Props {
  width?: string;
  height?: string;
  display?: string;
}

export const Card: React.FC<Props> = (props: Props) => {
  return (
    <div className="flex flex-col items-center font-bold">
      <div className="w-[251px] h-[299px] p-2 bg-blue-500 relative text-left ">
        <div className="overflow-hidden img-hover-zoom--basic">
          <img
            className="absolute h-full w-full top-0 left-0 p-2 "
            src="https://media2.giphy.com/media/yuhn8rh0bu76v87jhb/giphy.webp"
            alt=""
          />
        </div>
        <div className="relative flex flex-col w-full h-full">
          <div className="w-[50px] h-[50px] top-0 left-0 bg-[url('https://media.giphy.com/avatars/news/hggHJAb9dlmy/80h.gif')] bg-no-repeat bg-cover"></div>
          <div className="absolute bottom-0 left-0">
            <p>Proud to Love 🏳️‍🌈💖</p>
            <span>18h ago</span>
          </div>
        </div>
      </div>
      <div className={props?.display}>
        <div className="w-[245px] h-[5px] bg-blue-600 shadow-md"></div>
        <div className="w-[240px] h-[5px] bg-blue-700 shadow-md"></div>
      </div>
    </div>
  );
};
