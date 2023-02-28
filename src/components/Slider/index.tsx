import { Swiper } from 'swiper/react';
import { SliderProps } from '../../interfaces/ISlidesProps';
import 'swiper/css';
import './style.css';

export const Slider = ({ settings, children }: SliderProps) => {
    return <Swiper {...settings}>{children}</Swiper>;
};
