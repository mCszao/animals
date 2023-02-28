import { Swiper, SwiperProps } from 'swiper/react';
import { ReactNode } from 'react';
import 'swiper/css';
import './style.css';

interface SliderProps {
    settings: SwiperProps;
    children: ReactNode;
}

export const Slider = ({ settings, children }: SliderProps) => {
    return <Swiper {...settings}>{children}</Swiper>;
};
