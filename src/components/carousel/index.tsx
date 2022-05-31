import React from 'react';
import Slider from "react-slick";
import { Card } from '../card';

interface Props {
  width?: string;
  height?: string;
}

export const Carousel: React.FC<Props> = (props: Props) => {
  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true
  };

  return (
    <div>
      <Slider {...settings}>

        </Slider>
    </div>
  );
};