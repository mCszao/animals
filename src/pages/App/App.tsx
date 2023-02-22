import { useEffect, useState } from 'react';
import * as AppStyles from './AppStyles';
import { Logo } from '../../components/Logo/Logo';
import logotype from '../../assets/images/logo.png';
import { Slider } from '../../components/Slider/Slider';
import { SwiperSlide } from 'swiper/react';
import { Card } from '../../components/Card/Card';
interface Item {
    titulo: string;
    avatar: string;
}
function App() {
    const [slides, setSlides] = useState<Item[]>([]);
    useEffect(() => {
        fetch('https://api.b7web.com.br/cinema/')
            .then((response) => response.json())
            .then((json) => setSlides(json));
    });
    const sliderSettings = {
        spaceBetween: 10,
        slidesPerView: 3,
    };
    return (
        <AppStyles.Body>
            <AppStyles.Header>
                <Logo
                    url='http://localhost:5173/'
                    source={logotype}
                    altTxt='Imagem'
                />
            </AppStyles.Header>
            <Slider settings={sliderSettings}>
                {slides.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Card urlImage={item.avatar} title={item.titulo} />
                    </SwiperSlide>
                ))}
            </Slider>
        </AppStyles.Body>
    );
}

export default App;
