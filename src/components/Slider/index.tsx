import { Swiper } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper';
import { SliderProps } from '../../interfaces/ISlidesProps';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './style.css';

export const Slider = ({ settings, children }: SliderProps) => {
    return (
        <Swiper modules={[Navigation, Pagination, A11y]} {...settings}>
            {children}
        </Swiper>
    );
};
